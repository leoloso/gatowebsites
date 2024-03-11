import { DOMAIN } from '@/utils/domain'
import { MetadataRoute } from 'next'
import AppConfig from '@/app/app.config'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Pricing
    {
      url: `${DOMAIN}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Features
    {
      url: `${DOMAIN}/${AppConfig.paths.features}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Extensions
    {
      url: `${DOMAIN}/${AppConfig.paths.extensions}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Videos
    // {
    //   url: `${DOMAIN}/${AppConfig.paths.videoPosts}`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 1,
    // },
    // Guides
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.guides}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Extensions reference
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.extensionsReference}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Queries library
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.queryLibrary}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Schema tutorial
    {
      url: `${DOMAIN}/${AppConfig.paths.docs.tutorial}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Changelog
    {
      url: `${DOMAIN}/changelog`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Refund policy
    {
      url: `${DOMAIN}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Blog
    {
      url: `${DOMAIN}/${AppConfig.paths.blog}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Newsletter
    {
      url: `${DOMAIN}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Customers
    {
      url: `${DOMAIN}/customers`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Developer Partnership Program
    {
      url: `${DOMAIN}/developers`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // About us
    {
      url: `${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Contact us
    {
      url: `${DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // WPBuilds series
    {
      url: `${DOMAIN}/specials/wpbuilds`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // My orders
    {
      url: `${DOMAIN}/shop/my-orders`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Support request
    {
      url: `${DOMAIN}/support`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}