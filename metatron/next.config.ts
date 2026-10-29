import type { NextConfig } from "next";

/** Gamlar WordPress-slóðir metatron.is vísa á nýju síðurnar svo leitarvélastaða haldist. */
const OLD: Record<string, string> = {
  "fyrir-fotboltann": "/gervigrasvellir",
  "okkar-lausnir/fotboltavellir": "/gervigrasvellir",
  "gervigras-2": "/gervigrasvellir",
  "lysingarkerfi-vokvunarkerfi": "/flodlysing",
  "okkar-lausnir/lysingarbunadur": "/flodlysing",
  "okkar-lausnir/vokvunarkerfi-fyrir-gervigras-og-hybrid-velli": "/vokvunarkerfi",
  "fyrir-gardinn": "/gervigras-i-gardinn",
  "okkar-lausnir/vorur-og-thjonusta-2": "/gervigras-i-gardinn",
  "okkar-lausnir/vorur": "/gervigras-i-gardinn",
  "okkar-lausnir/vorur-og-thjonusta": "/gervigras-i-gardinn",
  shop: "/gervigras-i-gardinn",
  tilbodssida: "/hafa-samband",
  thjonusta: "/vidhald",
  "okkar-lausnir/thjonustuleidir-vid-gervigrasvelli": "/vidhald",
  "okkar-lausnir/epoxy-golfefni": "/vidhald",
  "okkar-lausnir/ithrottahallir": "/ithrottahus-og-leiksvaedi",
  "okkar-lausnir/hlaupabrautir-og-leikvellir": "/ithrottahus-og-leiksvaedi",
  "okkar-lausnir": "/",
  "metatron-forsida": "/",
  verkefnin: "/verkefni",
  "category/verkin-okkar": "/verkefni",
  "ka-vollurinn-akureyri": "/verkefni#ka",
  "sun-vollurinn-neskaupstadur": "/verkefni#sun",
  "kerecis-vollurinn-isafjordur": "/verkefni#kerecis",
  vatnsnes: "/verkefni#vatnsnes",
  "2025-5-vellir-i-fullri-staerd-a-fyrstu-5-manudum-arsins": "/verkefni#2025",
  stadsetning: "/hafa-samband",
  mannaudur: "https://idnafl.is/mannaudur",
  "fyrir-golfid": "https://www.golfstofan.is/golfklubbar",
  "okkar-lausnir/gervigras-fyrir-golvelli-og-garda": "https://www.golfstofan.is/golfklubbar",
  "okkar-lausnir/puttvellir-heima-i-gardi": "https://www.golfstofan.is/puttflot",
  "puttgrin-gardabaer": "https://www.golfstofan.is/puttflot",
  "tgl-puttgrin-oddur-golfklubbur": "https://www.golfstofan.is/golfklubbar",
};

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.metatron.is" }], destination: "https://metatron.is/:path*", permanent: true },
      ...Object.entries(OLD).map(([from, to]) => ({ source: `/${from}`, destination: to, permanent: true })),
      { source: "/product/:slug", destination: "/gervigras-i-gardinn", permanent: true },
      { source: "/product-category/:rest*", destination: "/gervigras-i-gardinn", permanent: true },
      { source: "/feed/:rest*", destination: "/", permanent: true },
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
      {
        source: "/video/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
