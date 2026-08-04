import type { NextConfig } from "next";

const assetBase =
  process.env.NEXT_PUBLIC_ASSET_BASE?.trim().replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

if (assetBase) {
  nextConfig.assetPrefix = assetBase;
  nextConfig.basePath = assetBase;
}

export default nextConfig;
