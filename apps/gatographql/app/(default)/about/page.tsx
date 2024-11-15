import Hero from '@gato/components/hero-about'
import Story from '@gato/components/story'
import Cta from '@gato/components/cta-03'
import AboutPageSchemaJsonLdScript from '@gato/components/schema/aboutpage-schema-json-ld'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'About us'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Meet the Gato GraphQL team, and learn about the history of Gato GraphQL',
}

export default function About() {
  return (
    <>
      <AboutPageSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />

      <Hero includeAnimation={false} includeThumbnail={true}/>

      <Story includeHeader={true} />
      
      <Cta />
    </>
  )
}
