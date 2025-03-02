import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.igdb.com"], // Add IGDB images domain here
  },
  async rewrites() {
    return [
      {
        source: "/api/igdb/:path*",
        destination: "https://api.igdb.com/v4/:path*",
      },
    ];
  },
};

export default nextConfig;
