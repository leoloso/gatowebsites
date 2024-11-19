import { DOMAIN } from 'gatoapp/data/env/domain'
import { MetadataRoute } from 'next'
import AppConfig from '@/app/app.config'
import {
  allBlogPosts,
  allDemoPosts,
  allDocs,
  allPlugins,
  allFeatures,
} from '@/.contentlayer/generated'
import {
  getBlogPostURL,
  getPluginURL,
  getPluginDocumentationURL,
  getDemoPostURL,
  getDocURL,
} from '@/utils/content/application-urls'
import { getURL } from 'gatoapp/utils/content/application-urls'
import { getReleaseData } from 'gatoapp/data/release'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const releaseDateV3_3 = new Date(getReleaseData('3.3.0'))
  const blogPostSitemapEntries = allBlogPosts.map((blogPost) => (
    {
      url: getBlogPostURL(blogPost),
      lastModified: new Date(blogPost.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ))
  const pluginSitemapEntries = allPlugins.map((plugin) => (
    {
      url: getPluginURL(plugin),
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const pluginDocumentationSitemapEntries = allPlugins.map((plugin) => (
    {
      url: getPluginDocumentationURL(plugin),
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const featureSitemapEntries = allFeatures.map((feature) => (
    {
      url: getURL(feature),
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const demoPostSitemapEntries = allDemoPosts.map((demoPost) => (
    {
      url: getDemoPostURL(demoPost),
      lastModified: new Date(demoPost.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ))
  const docSitemapEntries = allDocs.map((doc) => (
    {
      url: getDocURL(doc),
      lastModified: releaseDateV3_3,
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ))
  // TS error: "Type 'string' is not assignable to type '"weekly" | "monthly" | "yearly" | "always" | "hourly" | "daily" | "never" | undefined'"
  // @ts-ignore
  return [
    {
      url: DOMAIN,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Pricing
    {
      url: `${DOMAIN}/pricing`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // // Features
    // {
    //   url: `${DOMAIN}/${AppConfig.paths.features}`,
    //   lastModified: releaseDateV3_3,
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // Plugins
    {
      url: `${DOMAIN}/${AppConfig.paths.plugins}`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Demos
    {
      url: `${DOMAIN}/${AppConfig.paths.demoPosts}`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // // Guides
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.guides}`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Plugins reference
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.pluginsReference}`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Queries library
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.queryLibrary}`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Refund policy
    {
      url: `${DOMAIN}/refund-policy`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    // Blog
    {
      url: `${DOMAIN}/${AppConfig.paths.blog}`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    // Newsletter
    {
      url: `${DOMAIN}/newsletter`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // About us
    {
      url: `${DOMAIN}/about`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    // Contact us
    {
      url: `${DOMAIN}/contact`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // My orders
    {
      url: `${DOMAIN}/shop/my-orders`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    // Customer portal
    {
      url: `${DOMAIN}/shop/customer-portal`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    // Support request
    {
      url: `${DOMAIN}/support`,
      lastModified: releaseDateV3_3,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
    .concat(
      blogPostSitemapEntries,
      pluginSitemapEntries,
      pluginDocumentationSitemapEntries,
      featureSitemapEntries,
      demoPostSitemapEntries,
      docSitemapEntries,
    )
}