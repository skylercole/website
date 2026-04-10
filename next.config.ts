import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Must match the subdirectory where the site is deployed (domain.com/portfolio)
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
