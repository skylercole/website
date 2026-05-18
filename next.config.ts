import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const nextConfig: NextConfig = {
  output: "export",
  // Must match the subdirectory where the site is deployed (domain.com/portfolio)
  basePath: "/portfolio",
  // Emit <route>/index.html so static hosts resolve subpaths without listing dirs
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Pin Turbopack's workspace root to this folder so it doesn't get confused
  // by stray lockfiles in parent directories (yarn.lock, etc.)
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
