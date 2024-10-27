import type { MetadataRoute } from 'next'

// @see https://developers.netlify.com/guides/blocking-ai-bots-and-controlling-crawlers/
// @see https://github.com/netlify/examples/blob/main/examples/ai-bot-control/agents.json 
// @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
            "AdsBot-Google",
            "Amazonbot",
            "anthropic-ai",
            "Applebot",
            "AwarioRssBot",
            "AwarioSmartBot",
            "Bytespider",
            "CCBot",
            "ChatGPT",
            "ChatGPT-User",
            "Claude-Web",
            "ClaudeBot",
            "cohere-ai",
            "DataForSeoBot",
            "Diffbot",
            "FacebookBot",
            "FacebookBot",
            "Google-Extended",
            "GPTBot",
            "ImagesiftBot",
            "magpie-crawler",
            "omgili",
            "Omgilibot",
            "peer39_crawler",
            "PerplexityBot",
            "YouBot"
        ],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://gatographql.com/sitemap.xml',
  }
}