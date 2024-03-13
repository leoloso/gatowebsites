import {
  Post,
} from 'contentlayer/generated'
import { getPostURL } from '@/utils/content/application-urls'
import BlogPostingJsonLdProps from '@/components/schema/blogposting-schema-json-ld';

export default async function PostSchemaJsonLdScript({ post }: {
  post: Post,
}) {
  return (
    <BlogPostingJsonLdProps
      headline={post.title}
      url={getPostURL(post)}
      image={post.image}
      description={post.summary}
      datePublished={post.publishedAt}
    />
  )
}