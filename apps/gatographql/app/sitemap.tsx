import { DOMAIN } from 'gatoapp/data/env/domain'
import { MetadataRoute } from 'next'
import AppConfig from '@/app/app.config'
import {
  allBlogPosts,
  allDemoPosts,
  allComparisonPosts,
  allDocs,
  allExtensions,
  allFeatures,
} from '@/.contentlayer/generated'
import { getURL } from 'gatoapp/utils/content/application-urls'
import { getReleaseData } from 'gatoapp/data/release'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const releaseDateV2_2 = new Date(getReleaseData('2.2'))
  // const releaseDateV2_2_1 = new Date(getReleaseData('2.2.1'))
  const releaseDateV2_2_2 = new Date(getReleaseData('2.2.2'))
  const releaseDateV2_2_3 = new Date(getReleaseData('2.2.3'))
  const releaseDateV2_2_4 = new Date(getReleaseData('2.2.4'))
  const blogPostSitemapEntries = allBlogPosts.map((blogPost) => (
    {
      url: getURL(blogPost),
      lastModified: new Date(blogPost.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ))
  const extensionSitemapEntries = allExtensions.map((extension) => (
    {
      url: getURL(extension),
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const extensionDocumentationSitemapEntries = allExtensions.map((extension) => (
    {
      url: getURL(extension),
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const featureSitemapEntries = allFeatures.map((feature) => (
    {
      url: getURL(feature),
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const demoPostSitemapEntries = allDemoPosts.map((demoPost) => (
    {
      url: getURL(demoPost),
      lastModified: new Date(demoPost.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ))
  const comparisonPostSitemapEntries = allComparisonPosts.map((comparisonPost) => (
    {
      url: getURL(comparisonPost),
      lastModified: releaseDateV2_2_2,
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ))
  const docSitemapEntries = allDocs.map((doc) => (
    {
      url: getURL(doc),
      lastModified: releaseDateV2_2,
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ))
  // TS error: "Type 'string' is not assignable to type '"weekly" | "monthly" | "yearly" | "always" | "hourly" | "daily" | "never" | undefined'"
  // @ts-ignore
  return [
    {
      url: DOMAIN,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Pricing
    {
      url: `${DOMAIN}/pricing`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Features
    {
      url: `${DOMAIN}/${AppConfig.paths.features}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Extensions
    {
      url: `${DOMAIN}/${AppConfig.paths.extensions}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Highlights
    {
      url: `${DOMAIN}/${AppConfig.paths.highlights}`,
      lastModified: releaseDateV2_2_3,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Comparisons
    {
      url: `${DOMAIN}/${AppConfig.paths.comparisonPosts}`,
      lastModified: releaseDateV2_2_2,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Demos
    // {
    //   url: `${DOMAIN}/${AppConfig.paths.demoPosts}`,
    //   lastModified: releaseDateV2_2,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // Guides
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.guides}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Extensions reference
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.extensionsReference}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Queries library
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.queryLibrary}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Schema tutorial
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.tutorial}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Refund policy
    {
      url: `${DOMAIN}/refund-policy`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    // Blog
    {
      url: `${DOMAIN}/${AppConfig.paths.blog}`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    // Newsletter
    {
      url: `${DOMAIN}/newsletter`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Customers
    // {
    //   url: `${DOMAIN}/customers`,
    //   lastModified: releaseDateV2_2,
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
    // Developer Partnership Program
    {
      url: `${DOMAIN}/developers`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // About us
    {
      url: `${DOMAIN}/about`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    // Contact us
    {
      url: `${DOMAIN}/contact`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // WPBuilds series
    {
      url: `${DOMAIN}/specials/wpbuilds`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // My orders
    {
      url: `${DOMAIN}/shop/my-orders`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    // Customer portal
    {
      url: `${DOMAIN}/shop/customer-portal`,
      lastModified: releaseDateV2_2_4,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    // Support request
    {
      url: `${DOMAIN}/support`,
      lastModified: releaseDateV2_2,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
    .concat(
      blogPostSitemapEntries,
      // updatesSitemapEntries,
      extensionSitemapEntries,
      extensionDocumentationSitemapEntries,
      featureSitemapEntries,
      demoPostSitemapEntries,
      comparisonPostSitemapEntries,
      docSitemapEntries,
    )
}