import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.mjs": {
        loaders: ["swc-loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
