import type { NextConfig } from "next";

const repoName =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, "") ||
  process.env.GITHUB_REPOSITORY?.split("/")[1] ||
  "website";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;