import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [], // add any external domains if you use external images
    unoptimized: true, // if you don't need Next.js image optimization
  },
};

module.exports = nextConfig;
