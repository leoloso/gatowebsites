import { Article, WithContext } from 'schema-dts';
import { maybeAddDomain } from '@/utils/domain'
import { DOMAIN } from '@/data/env/domain'
import SchemaJsonLdScript from './schema-json-ld';

interface ArticleJsonLdProps {
  headline: string,
  url: string,
  image?: string,
  description: string,
  datePublished?: string,
}

export default async function ArticleSchemaJsonLdScript({
  headline,
  url,
  image,
  description,
  datePublished,
}: ArticleJsonLdProps) {
  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    url: url,
    ...(image ? {
      image: {
        '@type': 'ImageObject',
        url: maybeAddDomain(image),
      }
    } : {}),
    description: description,
    ...(datePublished ? {datePublished: datePublished} : {}),
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