import {
  Post,
} from 'contentlayer/generated'
import { Article, Graph, WithContext } from 'schema-dts';
import { getPostURL } from '@/utils/content/application-urls'
import { maybeAddDomain } from '@/utils/domain'
import { DOMAIN } from '@/data/env/domain'
import FounderPic from '@/public/assets/team/Leo-square.jpg'

// @see https://www.kozhuhds.com/blog/how-to-build-a-static-mdx-blog-with-nextjs-and-contentlayer#structured-data
async function getJsonLd(post: Post) {
  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    url: getPostURL(post),
    ...(post.image ? {
      image: {
        '@type': 'ImageObject',
        url: maybeAddDomain(post.image),
      }
    } : {}),
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Leonardo Losoviz',
      url: DOMAIN,
      image: maybeAddDomain(FounderPic.src),
    },
  };
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [structuredData],
  };
  return jsonLd
}

export default async function PostSchemaJsonLdScript({ post }: {
  post: Post,
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          getJsonLd(post)
        )
      }}
    />
  )
}