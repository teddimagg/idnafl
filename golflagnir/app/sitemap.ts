import type { MetadataRoute } from "next";
import { SYSTEMS, USES } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("", 1, "weekly"),
    page("/golfefni", 0.9),
    ...SYSTEMS.map((s) => page(`/golfefni/${s.slug}`, s.slug === "epoxy-golf" ? 0.95 : 0.8)),
    page("/hentar-fyrir", 0.8),
    ...USES.map((u) => page(`/hentar-fyrir/${u.slug}`, u.slug === "bilskurar" ? 0.85 : 0.7)),
    page("/verkefni", 0.6),
    page("/um-okkur", 0.5),
    page("/hafa-samband", 0.7),
    page("/taekniblod", 0.5),
    page("/personuvernd", 0.2, "yearly"),
  ];
}
