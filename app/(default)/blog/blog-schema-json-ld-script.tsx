import BlogSchemaJsonLdScript from '@/components/schema/blog-schema-json-ld';

export default async function BlogPageSchemaJsonLdScript() {
  return (
    <BlogSchemaJsonLdScript
      headline="Blog - Gato GraphQL"
      description='Stay up to date on the latest from Gato GraphQL and our engineering practices'
    />
  )
}