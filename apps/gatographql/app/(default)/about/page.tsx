import Hero from 'gatoapp/components/hero-about'
import Story from 'gatoapp/components/story'
import AboutPageSchemaJsonLdScript from 'gatoapp/components/schema/aboutpage-schema-json-ld'
import { createSEOPageTitle } from '@/utils/content/metadata'
import WordPressLogo from '@/public/assets/external-logos/wordpress-logo.svg'
import GraphQLLogo from '@/public/assets/external-logos/graphql-logo.svg'
import CircledEqualsSvgImage from 'gatoapp/public/assets/theme/equals-circled.svg'
import Logo from '@/public/assets/GatoGraphQL-logo-suki-text-square.png'

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

      <Hero
        title="Building the most powerful GraphQL server for WordPress"
        includeAnimation={false}
        includeThumbnail={true}
        targetImageSources={[WordPressLogo, GraphQLLogo]}
        svgImage={CircledEqualsSvgImage}
        logoImage={Logo}
      />

      <Story includeHeader={true} />
      
    </>
  )
}
