import { Blog, WithContext } from 'schema-dts';
import { maybeAddDomain } from '@/utils/domain'
import { DOMAIN } from '@/data/env/domain'
import SchemaJsonLdScript from './schema-json-ld';

interface BlogJsonLdProps {
  headline: string,
  // url: string,
  image?: string,
  description: string,
}

export default async function BlogSchemaJsonLdScript({
  headline,
  // url,
  image,
  description,
}: BlogJsonLdProps) {
  const structuredData: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: headline,
    // url: url,
    ...(image ? {
      image: {
        '@type': 'ImageObject',
        url: maybeAddDomain(image),
      }
    } : {}),
    description: description,
    author: {
      '@type': 'Person',
      name: 'Leonardo Losoviz',
      url: 'https://leoloso.com',
      image: `${DOMAIN}/assets/team/Leo-square.jpg`
    },
  };

  return (
    <SchemaJsonLdScript structuredData={structuredData} />
  )
}