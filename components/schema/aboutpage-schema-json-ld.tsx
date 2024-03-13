import { AboutPage, WithContext } from 'schema-dts';
import { DOMAIN } from '@/data/env/domain'
import SchemaJsonLdScript from './schema-json-ld';

interface AboutPageJsonLdProps {
  headline: string,
  // url: string,
  // image?: string,
  description: string,
}

export default async function AboutPageSchemaJsonLdScript({
  headline,
  // url,
  // image,
  description,
}: AboutPageJsonLdProps) {
  const structuredData: WithContext<AboutPage> = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    headline: headline,
    // url: url,
    // ...(image ? {
    //   image: {
    //     '@type': 'ImageObject',
    //     url: maybeAddDomain(image),
    //   }
    // } : {}),
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