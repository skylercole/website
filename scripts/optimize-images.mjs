/**
 * Build-time image optimizer.
 *
 * Reads source artwork from   brand/   (NOT shipped to the browser)
 * and emits only the optimized assets the site actually serves into
 * public/   (which Next copies verbatim into the static export).
 *
 * Outputs:
 *   public/me.webp          avatar, 256px (rendered at 128px, 2× for retina)
 *   public/logo-mark.webp   helmet mark, 120px tall (navbar 42px / footer 30px)
 *   public/og.png           1200×630 social card for OpenGraph / Twitter
 *
 * Runs as the first step of `npm run build`. Safe to re-run; deterministic.
 */

import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brand = (f) => resolve(__dirname, "../brand", f);
const out = (f) => resolve(__dirname, "../public", f);

// Brand background (matches --bg-base in globals.css)
const BG = { r: 233, g: 232, b: 228, alpha: 1 };
const ACCENT = "#9c2b2b"; // --accent-emerald (red) from globals.css

// 1. Avatar → compact WebP. 800×800 JPEG ~97KB → ~10KB.
await sharp(brand("me.jpeg"))
  .resize(256, 256, { fit: "cover" })
  .webp({ quality: 82 })
  .toFile(out("me.webp"));
console.log("✓ public/me.webp");

// 2. Helmet mark → WebP with alpha. 267×384 PNG ~142KB → ~10KB.
await sharp(brand("logo-mark.png"))
  .resize({ height: 120 })
  .webp({ quality: 90 })
  .toFile(out("logo-mark.webp"));
console.log("✓ public/logo-mark.webp");

// 3. OpenGraph card: full light-background logo centered on brand beige,
//    with a serif tagline and a tracked accent sub-line.
const OG_W = 1200;
const OG_H = 630;

// logo.png is 1426×624 (dark "300", green helmet) — best contrast on light bg.
const logoW = 600;
const logoMeta = await sharp(brand("logo.png")).metadata();
const logoH = Math.round((logoW * logoMeta.height) / logoMeta.width);
const logoBuf = await sharp(brand("logo.png"))
  .resize({ width: logoW })
  .png()
  .toBuffer();

const textSvg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
    <text x="${OG_W / 2}" y="500" text-anchor="middle"
      font-family="Georgia, 'Times New Roman', serif" font-size="36"
      fill="#18171a" fill-opacity="0.88">Architecture, cloud, and production code.</text>
    <text x="${OG_W / 2}" y="552" text-anchor="middle"
      font-family="Helvetica, Arial, sans-serif" font-size="20"
      letter-spacing="4" fill="${ACCENT}">HELSINKI · SOLUTION ARCHITECTURE · CLOUD</text>
  </svg>`,
);

await sharp({ create: { width: OG_W, height: OG_H, channels: 4, background: BG } })
  .composite([
    { input: logoBuf, top: Math.round((OG_H - logoH) / 2) - 60, left: Math.round((OG_W - logoW) / 2) },
    { input: textSvg, top: 0, left: 0 },
  ])
  .png()
  .toFile(out("og.png"));
console.log("✓ public/og.png");
