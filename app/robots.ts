import type { MetadataRoute } from "next"

const SITE = "https://www.guildy.ai"

// Explicitly allow general crawlers plus the AI search/answer crawlers so none
// are blocked by omission. Only the api routes are disallowed (no indexable
// content there). Host + sitemap use the canonical www origin.
const AI_AND_SEARCH_AGENTS = [
  "Googlebot",
  "Bingbot",
  "Google-Extended", // Gemini / Vertex training + grounding
  "GPTBot", // OpenAI crawler
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic crawler
  "anthropic-ai", // Anthropic
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live fetch
  "Applebot", // Siri / Spotlight
  "Applebot-Extended", // Apple AI training
  "Amazonbot", // Alexa / Amazon
  "CCBot", // Common Crawl (feeds many LLMs)
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      ...AI_AND_SEARCH_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
