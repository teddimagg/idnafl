import type { NextConfig } from "next";

/** Gamlar WordPress-slóðir idnafl.is vísa á nýju síðurnar eða á síðu dótturfélagsins sem á efnið. */
const OLD: Record<string, string> = {
  verkefnalisti: "/verkefni",
  "verkefnalisti/page/:n": "/verkefni",
  "sja-oll-verkefni": "/verkefni",
  "vorur-og-thjonusta": "/#fyrirtaekin",
  "kemur-bradlega": "/",
  metatron: "https://metatron.is",
  "ss-golf": "https://golflagnir.is",
  "staff/:slug": "/mannaudur",
  "category/fyrirtaeki/metatron": "https://metatron.is/verkefni",
  "category/fyrirtaeki/ss-golf": "https://golflagnir.is/verkefni",
  "category/gervigras": "https://metatron.is/verkefni",
  "category/keywords/fotboltavellir": "https://metatron.is/gervigrasvellir",
  "category/keywords/gardagras": "https://metatron.is/gervigras-i-gardinn",
  "category/keywords/golfgras": "https://www.golfstofan.is",
  "category/keywords/lysingarkerfi": "https://metatron.is/flodlysing",
  "category/keywords/500-golf": "https://golflagnir.is/golfefni/epoxy-golf",
  "category/keywords/blastrac": "https://golflagnir.is/golfefni/slipun-og-blastrac",
  "2025/05/05/ka-vollurinn-akureyri": "https://metatron.is/verkefni#ka",
  "2025/05/05/kerecis-vollurinn-isafjordur": "https://metatron.is/verkefni#kerecis",
  "2025/05/05/sun-vollurinn-neskaupstadur": "https://metatron.is/verkefni#sun",
  "2025/05/05/vatnsnes-keflavik": "https://metatron.is/verkefni#vatnsnes",
  "2025/05/05/puttgrin-gardabaer": "https://www.golfstofan.is/puttflot",
  "2025/06/05/tgl-puttgrin-oddur-golfklubbur": "https://www.golfstofan.is/golfklubbar",
  "2025/05/06/sprungid-golf": "https://golflagnir.is/golfefni/flex",
  "2025/05/06/bifreidaverkstaedi-toyota": "https://golflagnir.is/verkefni",
  "2025/05/06/geymslurymi-atnorth": "https://golflagnir.is/verkefni",
  "2025/05/06/vinnuadstada-atnorth": "https://golflagnir.is/verkefni",
  "2025/05/06/sundakaelir-eimskip": "https://golflagnir.is/verkefni",
};

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.idnafl.is" }], destination: "https://idnafl.is/:path*", permanent: true },
      ...Object.entries(OLD).map(([from, to]) => ({ source: `/${from}`, destination: to, permanent: true })),
      { source: "/:year(\\d{4})/:rest*", destination: "/verkefni", permanent: true },
      { source: "/wp-content/uploads/2025/05/Innra-Eftirlit-Idnafls.pdf", destination: "/skjol/innra-eftirlit-idnafls.pdf", permanent: true },
      { source: "/wp-content/uploads/2025/05/Sjalfbaernistefna-Idnafls.pdf", destination: "/skjol/sjalfbaernistefna-idnafls.pdf", permanent: true },
      { source: "/wp-content/uploads/2025/05/Samfelagsleg-Abyrgd-Idnafls.pdf", destination: "/skjol/samfelagsleg-abyrgd-idnafls.pdf", permanent: true },
      { source: "/wp-content/uploads/2025/05/Umhverfisstefna-Idnafls.pdf", destination: "/skjol/umhverfisstefna-idnafls.pdf", permanent: true },
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
    ];
  },
};

export default nextConfig;
