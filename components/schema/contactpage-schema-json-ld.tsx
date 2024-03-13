import { ContactPage, WithContext } from 'schema-dts';
import { DOMAIN } from '@/data/env/domain'
import SchemaJsonLdScript from './schema-json-ld';

interface ContactPageJsonLdProps {
  headline: string,
  // url: string,
  // image?: string,
  description: string,
}

export default async function ContactPageSchemaJsonLdScript({
  headline,
  // url,
  // image,
  description,
}: ContactPageJsonLdProps) {
  const structuredData: WithContext<ContactPage> = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
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