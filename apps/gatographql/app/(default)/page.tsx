import Hero from 'gatoapp/components/hero'
import UseCases from '@/components/use-cases/use-cases'
import FeaturesCarousel from 'gatoapp/components/features-carousel'
import Pricing from './pricing-section'
import Cta from '@/components/cta'
import HomeExtensionsSection from '@/components/home-extensions-section'
import AppConfig from '@/app/app.config'

export const metadata = {
  title: 'Gato GraphQL',
  description: 'Powerful and flexible GraphQL server for WordPress',
}

export default function Home() {
  return (
    <>
      <Hero
        title="Powerful and flexible GraphQL server for WordPress"
        description={<span>Use <strong>Gato GraphQL</strong> to interact with all your data in your <strong>WordPress</strong> site.</span>}
      />
      <UseCases />
      <FeaturesCarousel
        linkURL={`/${AppConfig.paths.features}`}
      />
      <HomeExtensionsSection />
      <Pricing />
      <Cta />
    </>
  )
}
