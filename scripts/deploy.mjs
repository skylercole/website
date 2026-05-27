#!/usr/bin/env node
/**
 * FTP deploy script — uploads the /out folder to the server.
 * Reads credentials from .env.deploy in the project root.
 */

import FtpDeploy from "ftp-deploy";
import { readFileSync, existsSync } from "fs";
import { posix, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const envFile = resolve(rootDir, ".env.deploy");

// --- Load .env.deploy manually ---
if (!existsSync(envFile)) {
  console.error("\n❌  Missing .env.deploy — copy .env.deploy.example and fill it in.\n");
  process.exit(1);
}

const env = {};
for (const line of readFileSync(envFile, "utf8").split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const [key, ...rest] = trimmed.split("=");
  env[key.trim()] = rest.join("=").trim();
}

const required = ["DEPLOY_HOST", "DEPLOY_USER", "DEPLOY_PASSWORD", "DEPLOY_PATH"];
for (const key of required) {
  if (!env[key]) {
    console.error(`\n❌  ${key} is not set in .env.deploy\n`);
    process.exit(1);
  }
}

const outDir = resolve(rootDir, "out");
if (!existsSync(outDir)) {
  console.error("\n❌  /out directory not found. Run 'npm run build' first.\n");
  process.exit(1);
}

const seoRootDir = resolve(rootDir, "seo-root");
const seoRootRemote = posix.dirname(env.DEPLOY_PATH);

const baseConfig = {
  user: env.DEPLOY_USER,
  password: env.DEPLOY_PASSWORD,
  host: env.DEPLOY_HOST,
  port: parseInt(env.DEPLOY_PORT ?? "21", 10),
  forcePasv: true,
  sftp: false,
  // Explicit FTPS (TLS on port 21) — required by most cPanel hosts
  secure: "explicit",
  secureOptions: { rejectUnauthorized: false },
};

const seoConfig = {
  ...baseConfig,
  localRoot: seoRootDir,
  remoteRoot: seoRootRemote,
  include: ["robots.txt", "sitemap.xml"],
  deleteRemote: false,
};

const siteConfig = {
  ...baseConfig,
  localRoot: outDir,
  remoteRoot: env.DEPLOY_PATH,
  include: ["*", "**/*", ".htaccess"],
  deleteRemote: true,
};

const ftpDeploy = new FtpDeploy();
let lastPct = -1;

ftpDeploy.on("uploading", ({ filename, transferredFileCount, totalFilesCount }) => {
  const pct = Math.round((transferredFileCount / totalFilesCount) * 100);
  if (pct !== lastPct) {
    lastPct = pct;
    process.stdout.write(`\r   [${String(pct).padStart(3)}%] ${transferredFileCount}/${totalFilesCount} — ${filename}`.padEnd(80));
  }
});

ftpDeploy.on("upload-error", ({ err }) => {
  console.error("\n❌  Upload error:", err);
});

try {
  if (existsSync(seoRootDir)) {
    console.log(`\n🔎  Uploading SEO files → ${baseConfig.host}${seoRootRemote}\n`);
    lastPct = -1;
    await ftpDeploy.deploy(seoConfig);
    console.log("");
  }

  console.log(`\n🚀  Deploying via FTP → ${baseConfig.host}${siteConfig.remoteRoot}\n`);
  lastPct = -1;
  await ftpDeploy.deploy(siteConfig);
  const subfolder = env.DEPLOY_PATH.replace(/.*public_html\/?/, "");
  const url = subfolder ? `https://${baseConfig.host}/${subfolder}/` : `https://${baseConfig.host}/`;
  console.log(`\n\n✅  Deploy complete → ${url}\n`);
} catch (err) {
  console.error("\n❌  Deploy failed:", err.message);
  process.exit(1);
}
