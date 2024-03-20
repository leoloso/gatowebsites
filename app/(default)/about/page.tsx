export const metadata = {
  title: 'About us',
  description: 'Meet the Gato GraphQL team, and learn about the history of Gato GraphQL',
}

import Hero from '@/components/hero-about'
import Story from '@/components/story'
// import Team from '@/components/team'
// import Recruitment from '@/components/recruitment'
// import Testimonials from '@/components/testimonials-02'
import Cta from '@/components/cta-03'
import AboutPageSchemaJsonLdScript from '@/components/schema/aboutpage-schema-json-ld'

export default function About() {
  return (
    <>
      <AboutPageSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />
      <Hero includeAnimation={true}/>
      <Story includeHeader={true} />
      {/* <Team />
      <Recruitment />
      <Testimonials /> */}
      <Cta />
    </>
  )
}
