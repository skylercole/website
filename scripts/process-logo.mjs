/**
 * Converts logo for dark backgrounds:
 * - Dark/near-black pixels (the "300CONSULTING" text) → white
 * - Green pixels (the Spartan helmet) → kept as-is
 * - Transparent pixels → kept transparent
 */

import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputPath = resolve(__dirname, "../public/logo.png");
const outputPath = resolve(__dirname, "../public/logo-light.png");

const image = sharp(inputPath).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const buf = Buffer.from(data);

for (let i = 0; i < buf.length; i += channels) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];
  const a = buf[i + 3];

  // Skip fully transparent pixels
  if (a < 10) continue;

  // Calculate luminance and greenness
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Is this a "green" pixel? Green channel dominant and not too light
  const isGreen = g > r * 1.15 && g > b * 1.15 && luminance < 200;

  if (!isGreen) {
    // Invert dark pixels to white — preserve mid-tones proportionally
    // Pixels darker than threshold → remap toward white
    const threshold = 160;
    if (luminance < threshold) {
      const t = luminance / threshold; // 0 (black) → 1 (at threshold)
      const newVal = Math.round(220 + t * 35); // map to 220–255 (white range)
      buf[i] = newVal;
      buf[i + 1] = newVal;
      buf[i + 2] = newVal;
    }
  }
  // Green pixels: leave untouched
}

await sharp(buf, {
  raw: { width, height, channels },
})
  .png({ compressionLevel: 9 })
  .toFile(outputPath);

console.log(`✓ Saved logo-light.png (${width}×${height})`);
