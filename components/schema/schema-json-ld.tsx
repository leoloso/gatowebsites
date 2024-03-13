import { Graph } from 'schema-dts';

export default async function SchemaJsonLdScript({
  jsonLd,
}: {
  jsonLd: Graph,
}) {
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