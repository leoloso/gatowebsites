import {
  Post,
} from 'contentlayer/generated'
import { getPostURL } from '@/utils/content/application-urls'
import SchemaJsonLdScript from '@/components/scripts/schema-json-ld';

export default async function PostSchemaJsonLdScript({ post }: {
  post: Post,
}) {
  return (
    <SchemaJsonLdScript
      headline={post.title}
      url={getPostURL(post)}
      image={post.image}
      description={post.summary}
      datePublished={post.publishedAt}
    />
  )
}