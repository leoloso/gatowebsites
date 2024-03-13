import { Graph, WithContext } from 'schema-dts';

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