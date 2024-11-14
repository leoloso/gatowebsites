import Hero from '@gato/components/hero-about'
import Story from '@gato/components/story'
// import Team from '@gato/components/team'
// import Recruitment from '@gato/components/recruitment'
// import Testimonials from '@gato/components/testimonials-02'
import Cta from '@gato/components/cta-03'
import AboutPageSchemaJsonLdScript from '@gato/components/schema/aboutpage-schema-json-ld'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'About us'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Meet the Gato GraphQL team, and learn about the history of Gato GraphQL',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
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
      {/* <Team />
      <Recruitment />
      <Testimonials /> */}
      <Cta />
    </>
  )
}
