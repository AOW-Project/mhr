import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["blob.v0.dev", "yourdomain.com"], // Add any external image domains
    formats: ["image/webp", "image/avif"],
    unoptimized: false,
  },
  swcMinify: true,
  reactStrictMode: true, // Optional but helpful for debugging
};

export default nextConfig;
