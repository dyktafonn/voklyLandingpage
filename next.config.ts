import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/relay-7RpO/static/(.*)",
        destination: "https://us-assets.i.posthog.com/static/$1",
      },
      {
        source: "/relay-7RpO/(.*)",
        destination: "https://us.i.posthog.com/$1",
      },
    ];
  },
};

export default nextConfig;
