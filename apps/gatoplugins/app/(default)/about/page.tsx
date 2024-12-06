import Hero from 'gatoapp/components/hero-about'
import Story from 'gatoapp/components/story'
import AboutPageSchemaJsonLdScript from 'gatoapp/components/schema/aboutpage-schema-json-ld'
import { createSEOPageTitle } from '@/utils/content/metadata'
import WordPressLogo from '@/public/assets/external-logos/wordpress-logo.svg'
import Logo from '@/public/assets/GatoPlugins-logo-suki-text-square.webp'

const pageTitle = 'About us'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Meet the Gato Plugins team, and learn about the history of Gato Plugins',
}

export default function About() {
  return (
    <>
      <AboutPageSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />

      <Hero
        title="Building a collection of super useful plugins for WordPress"
        includeAnimation={false}
        includeThumbnail={true}
        targetImageSources={[WordPressLogo]}
        logoImage={Logo}
      />

      <Story includeHeader={true} />
    </>
  )
}
