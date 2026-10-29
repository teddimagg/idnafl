import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  /** Gamlar WordPress-slóðir golfstofan.is vísa á nýju síðurnar svo leitarvélastaða haldist. */
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "golfstofan.is" }], destination: "https://www.golfstofan.is/:path*", permanent: true },
      { source: "/expo", destination: "/golfklubbar", permanent: true },
      { source: "/fadu-tilbod", destination: "/", permanent: true },
      { source: "/feed/:rest*", destination: "/", permanent: true },
      { source: "/comments/:rest*", destination: "/", permanent: true },
      { source: "/wp-json/:rest*", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
