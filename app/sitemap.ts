import { DOMAIN } from '@/utils/domain'
import { MetadataRoute } from 'next'


 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}