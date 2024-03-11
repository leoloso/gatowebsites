import { DOMAIN } from '@/data/env/domain'
import { MetadataRoute } from 'next'
import AppConfig from '@/app/app.config'
import {
  allPosts,
  // allUpdates,
  // allVideoPosts,
  allDocs,
  allExtensions,
  allFeatures,
} from '@/.contentlayer/generated'
import {
  getPostURL,
  getExtensionURL,
  getFeatureURL,
  getExtensionDocumentationURL,
  // getVideoPostURL,
  getDocURL,
} from '@/utils/application-urls'
import { RELEASE_VERSION_2_2, getReleaseData } from '@/data/release'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const postSitemapEntries = allPosts.map((post) => (
    {
      url: getPostURL(post),
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ))
  // const updatesSitemapEntries = allUpdates.map((update) => (
  //   {
  //     url: getUpdateURL(update),
  //     lastModified: new Date(update.publishedAt),
  //     changeFrequency: 'weekly',
  //     priority: 0.5,
  //   }
  // ))
  const extensionSitemapEntries = allExtensions.map((extension) => (
    {
      url: getExtensionURL(extension),
      lastModified: new Date(getReleaseData(RELEASE_VERSION_2_2)),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const extensionDocumentationSitemapEntries = allExtensions.map((extension) => (
    {
      url: getExtensionDocumentationURL(extension),
      lastModified: new Date(getReleaseData(RELEASE_VERSION_2_2)),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  const featureSitemapEntries = allFeatures.map((feature) => (
    {
      url: getFeatureURL(feature),
      lastModified: new Date(getReleaseData(RELEASE_VERSION_2_2)),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ))
  // const videoPostSitemapEntries = allVideoPosts.map((videoPost) => (
  //   {
  //     url: getVideoPostURL(videoPost),
  //     lastModified: new Date(videoPost.publishedAt),
  //     changeFrequency: 'weekly',
  //     priority: 0.5,
  //   }
  // ))
  const docSitemapEntries = allDocs.map((doc) => (
    {
      url: getDocURL(doc),
      lastModified: new Date(getReleaseData(RELEASE_VERSION_2_2)),
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ))
  // TS error: "Type 'string' is not assignable to type '"weekly" | "monthly" | "yearly" | "always" | "hourly" | "daily" | "never" | undefined'"
  // @ts-ignore
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Pricing
    {
      url: `${DOMAIN}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Features
    {
      url: `${DOMAIN}/${AppConfig.paths.features}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Extensions
    {
      url: `${DOMAIN}/${AppConfig.paths.extensions}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Videos
    // {
    //   url: `${DOMAIN}/${AppConfig.paths.videoPosts}`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
    // Guides
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.guides}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Extensions reference
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.extensionsReference}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Queries library
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.queryLibrary}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Schema tutorial
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.tutorial}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Changelog
    // {
    //   url: `${DOMAIN}/changelog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
    // Refund policy
    {
      url: `${DOMAIN}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    // Blog
    {
      url: `${DOMAIN}/${AppConfig.paths.blog}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    // Newsletter
    {
      url: `${DOMAIN}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Customers
    // {
    //   url: `${DOMAIN}/customers`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
    // Developer Partnership Program
    {
      url: `${DOMAIN}/developers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // About us
    {
      url: `${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    // Contact us
    {
      url: `${DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // WPBuilds series
    {
      url: `${DOMAIN}/specials/wpbuilds`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // My orders
    {
      url: `${DOMAIN}/shop/my-orders`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    // Support request
    {
      url: `${DOMAIN}/support`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
    .concat(
      postSitemapEntries,
      // updatesSitemapEntries,
      extensionSitemapEntries,
      extensionDocumentationSitemapEntries,
      featureSitemapEntries,
      // videoPostSitemapEntries,
      docSitemapEntries,
    )
}