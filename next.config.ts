import type { NextConfig } from "next";

const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: assetBase,
  basePath: assetBase,
};

export default nextConfig;