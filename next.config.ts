import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
    output: 'standalone',
  },
};

module.exports = nextConfig;
