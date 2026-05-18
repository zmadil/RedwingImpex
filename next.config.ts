import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/RedwingImpex",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
