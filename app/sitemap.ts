import type { MetadataRoute } from "next"

const SITE = "https://www.guildy.ai"

// Real indexable routes only (no api, no utility, no redirect targets), all on
// the canonical www host.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}
