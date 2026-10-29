import type { MetadataRoute } from "next";
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
    page("/verkefni", 0.8),
    page("/gaedakerfi", 0.7),
    page("/mannaudur", 0.6),
    page("/hafa-samband", 0.8),
    page("/personuvernd", 0.2, "yearly"),
  ];
}
