import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
