import type { MetadataRoute } from "next"
import { content } from "@/lib/content"

const pageUrl = content.site.url.replace(/\/$/, "")

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: `${pageUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...content.sections.map((section) => ({
      url: `${pageUrl}/#${section.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${pageUrl}/#${content.about.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ]
}
