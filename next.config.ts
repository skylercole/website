import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Must match the subdirectory where the site is deployed (domain.com/portfolio)
  basePath: "/portfolio",
  // Emit <route>/index.html so static hosts resolve subpaths without listing dirs
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
