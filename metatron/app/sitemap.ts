import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";

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
    ...SERVICES.map((s, i) => page(s.href, i < 3 ? 0.9 : 0.8)),
    page("/verkefni", 0.7),
    page("/hafa-samband", 0.7),
    page("/personuvernd", 0.2, "yearly"),
  ];
}
