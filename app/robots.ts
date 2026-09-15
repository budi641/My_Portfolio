import type { MetadataRoute } from "next"
import { content } from "@/lib/content"

export const dynamic = "force-static"

const pageUrl = content.site.url.replace(/\/$/, "")

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${pageUrl}/sitemap.xml`,
    host: pageUrl,
  }
}
