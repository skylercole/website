/**
 * Crops the helmet mark out of the full logo for use in tight UI spots
 * (Navbar, Footer) where the "300CONSULTING" wordmark would be unreadable
 * at small sizes.
 *
 * Source : public/logo-dark.png   (full logo for dark backgrounds)
 * Output : public/logo-mark.png   (helmet only, transparent background)
 *
 * Detection: scans rows top→bottom, finds the helmet vertical band, then
 * stops at the first mostly-empty row beneath it (the gap before the
 * "300CONSULTING" wordmark). Falls back to a sensible ratio if needed.
 */

import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputPath = resolve(__dirname, "../public/logo-dark.png");
const outputPath = resolve(__dirname, "../public/logo-mark.png");

const image = sharp(inputPath).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// Build a per-row "opaque pixel count" histogram
const rowCounts = new Int32Array(height);
for (let y = 0; y < height; y++) {
  let count = 0;
  const rowStart = y * width * channels;
  for (let x = 0; x < width; x++) {
    const a = data[rowStart + x * channels + 3];
    if (a > 16) count++;
  }
  rowCounts[y] = count;
}

// Find first opaque row (top of helmet)
let top = 0;
while (top < height && rowCounts[top] < 4) top++;

// From the helmet's first row, walk down until we hit a sustained empty band
// (the gap between helmet and wordmark). "Empty" = fewer than ~1% opaque pixels.
const emptyThreshold = Math.max(4, Math.floor(width * 0.01));
const minGapRows = Math.max(6, Math.floor(height * 0.015));

let bottom = height - 1;
let runStart = -1;
for (let y = top + 1; y < height; y++) {
  if (rowCounts[y] < emptyThreshold) {
    if (runStart < 0) runStart = y;
    if (y - runStart >= minGapRows) {
      bottom = runStart;
      break;
    }
  } else {
    runStart = -1;
  }
}

// Safety fallback: if detection failed, take the top ~62% (matches eyeballed layout)
if (bottom <= top + 10) {
  bottom = Math.floor(height * 0.62);
}

// Small padding so the helmet isn't flush against the crop edge
const pad = Math.floor(height * 0.02);
const cropTop = Math.max(0, top - pad);
const cropHeight = Math.min(height - cropTop, bottom - cropTop + pad);

console.log(
  `crop: top=${top} bottom=${bottom} cropTop=${cropTop} cropHeight=${cropHeight} (image ${width}×${height})`,
);

await sharp(Buffer.from(data), { raw: { width, height, channels } })
  .extract({ left: 0, top: cropTop, width, height: cropHeight })
  .png({ compressionLevel: 9 })
  .toBuffer()
  .then((buf) =>
    sharp(buf).trim().png({ compressionLevel: 9 }).toFile(outputPath),
  );

console.log(`✓ Saved logo-mark.png`);
