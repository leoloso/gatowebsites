import { Graph, WithContext } from 'schema-dts';

// @see https://www.kozhuhds.com/blog/how-to-build-a-static-mdx-blog-with-nextjs-and-contentlayer#structured-data
export default async function SchemaJsonLdScript({
  structuredData,
}: {
  structuredData: WithContext<any>,
}) {
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