import type { NextConfig } from "next";

/** Gamlar slóðir golflagnir.is (WordPress) og ssgolf.is vísa á nýju síðurnar svo leitarvélastaða haldist. */
const ITEMS: Record<string, string> = {
  "ep-topp-4000": "/golfefni/epoxy-golf",
  "ep-topp-4000-veggefni": "/golfefni/epoxy-golf",
  "ep-maxi-5000": "/golfefni/epoxy-golf",
  "topp-1500": "/golfefni/epoxy-golf",
  "ep-maxi-700": "/golfefni/epoxy-golf",
  "ep-evp-malning": "/golfefni/malning",
  "ep-klar-rakagrunnur": "/golfefni/epoxy-golf",
  flogugolf: "/golfefni/epoxy-golf",
  "maxi-flex-5000": "/golfefni/polyurethan",
  "maxi-crete": "/golfefni/ucrete",
  "epoxy-terrazzo": "/golfefni/epoxy-terrazzo",
  "flotgolf-vespox-ew-v": "/golfefni/flotun",
  "slipud--polerud-steinsteypa": "/golfefni/slipun-og-blastrac",
  "lakkad-flot": "/golfefni/flotun",
  rykbinding: "/golfefni/slipun-og-blastrac",
};

const CATEGORIES: Record<string, string> = {
  "opinberar-byggingar-skolar-og-sofn": "/hentar-fyrir/skolar-og-stofnanir",
  lyfjaidnadur: "/hentar-fyrir/lyfjaidnadur",
  matvaelaidnadur: "/hentar-fyrir/matvaelaidnadur",
  fiskvinnsla: "/hentar-fyrir/fiskvinnsla",
  verkstaedi: "/hentar-fyrir/verkstaedi",
  skrifstofur: "/hentar-fyrir/verslanir-og-skrifstofur",
  eldhus: "/hentar-fyrir/idnadareldhus",
  bilastaedahus: "/hentar-fyrir/bilastaedahus",
  verslanir: "/hentar-fyrir/verslanir-og-skrifstofur",
  heimili: "/hentar-fyrir/heimili",
  bilskurar: "/hentar-fyrir/bilskurar",
  lagergolf: "/hentar-fyrir/lagergolf",
  idnadargolf: "/golfefni/epoxy-golf",
  "epoxy-golfefni": "/golfefni/epoxy-golf",
  "polyurethan-golfefni": "/golfefni/polyurethan",
  "polyurethane-golfefni": "/golfefni/polyurethan",
  "flotgolf-golfefni": "/golfefni/flotun",
};

const SSGOLF: Record<string, string> = {
  "/golfefni/500-golf": "/golfefni/epoxy-golf",
  "/golfefni/700-golf": "/golfefni/epoxy-golf",
  "/golfefni/1500-golf": "/golfefni/epoxy-golf",
  "/golfefni/4000-golf": "/golfefni/epoxy-golf",
  "/golfefni/5000-golf": "/golfefni/epoxy-golf",
  "/golfefni/aferdarflotun-og-lokkun": "/golfefni/flotun",
  "/golfefni/steinteppi": "/golfefni/epoxy-terrazzo",
  "/golfefni": "/golfefni",
  "/hentar-fyrir/bilageymslur": "/hentar-fyrir/bilastaedahus",
  "/hentar-fyrir/bilskurinn": "/hentar-fyrir/bilskurar",
  "/hentar-fyrir/fisk-kjotvinnslur": "/hentar-fyrir/fiskvinnsla",
  "/hentar-fyrir/heimilid": "/hentar-fyrir/heimili",
  "/hentar-fyrir/idnadareldhusid": "/hentar-fyrir/idnadareldhus",
  "/hentar-fyrir/ithrottahus": "/golfefni/polyurethan",
  "/hentar-fyrir/lagergolf": "/hentar-fyrir/lagergolf",
  "/hentar-fyrir/likamsraektarstodvar": "/golfefni/polyurethan",
  "/hentar-fyrir/lyfjaidnadur": "/hentar-fyrir/lyfjaidnadur",
  "/hentar-fyrir/skrifstofur-verslanir": "/hentar-fyrir/verslanir-og-skrifstofur",
  "/hentar-fyrir/snyrtingar-buningsklefar": "/hentar-fyrir/buningsklefar",
  "/hentar-fyrir/syningarsalir": "/hentar-fyrir/verslanir-og-skrifstofur",
  "/hentar-fyrir/verkstaedi": "/hentar-fyrir/verkstaedi",
  "/hentar-fyrir/verslanir-vorumottokur": "/hentar-fyrir/verslanir-og-skrifstofur",
  "/hentar-fyrir": "/hentar-fyrir",
  "/um-okkur": "/um-okkur",
  "/hafa-samband": "/hafa-samband",
};

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      ...Object.entries(ITEMS).map(([from, to]) => ({ source: `/item/${from}`, destination: to, permanent: true })),
      { source: "/item/:slug*", destination: "/golfefni", permanent: true },
      ...Object.entries(CATEGORIES).map(([from, to]) => ({ source: `/catalog/category/${from}`, destination: to, permanent: true })),
      { source: "/catalog/:path*", destination: "/golfefni", permanent: true },
      { source: "/about", destination: "/um-okkur", permanent: true },
      { source: "/contact", destination: "/hafa-samband", permanent: true },
      ...Object.entries(SSGOLF).map(([from, to]) => ({
        source: from,
        has: [{ type: "host" as const, value: "(www\\.)?ssgolf\\.is" }],
        destination: `https://golflagnir.is${to}`,
        permanent: true,
      })),
      {
        source: "/:year(\\d{4})/:rest*",
        has: [{ type: "host" as const, value: "(www\\.)?ssgolf\\.is" }],
        destination: "https://golflagnir.is/verkefni",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(www\\.)?ssgolf\\.is" }],
        destination: "https://golflagnir.is/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www\\.golflagnir\\.is" }],
        destination: "https://golflagnir.is/:path*",
        permanent: true,
      },
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
