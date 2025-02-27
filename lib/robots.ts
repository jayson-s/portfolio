import type { MetadataRoute } from 'next'

const WEBSITE_URL = "https://www.jaysonsandhu.com"; // placeholder url

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  }
}
