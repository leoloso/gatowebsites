import { Article, Graph, WithContext } from 'schema-dts';
import { maybeAddDomain } from '@/utils/domain'
import { DOMAIN } from '@/data/env/domain'

interface JsonLdProps {
  headline: string,
  url: string,
  image?: string,
  description: string,
  datePublished: string,
}

// @see https://www.kozhuhds.com/blog/how-to-build-a-static-mdx-blog-with-nextjs-and-contentlayer#structured-data
export default async function SchemaJsonLdScript({
  headline,
  url,
  image,
  description,
  datePublished,
}: JsonLdProps) {
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
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: 'Leonardo Losoviz',
      url: DOMAIN,
      image: `${DOMAIN}/assets/team/Leo-square.jpg`
    },
  };
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [structuredData],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={
        {
          __html: JSON.stringify(jsonLd)
        }
      }
    />
  )
}