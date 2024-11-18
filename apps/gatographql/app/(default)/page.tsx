import Hero from 'gatoapp/components/hero'
import UseCases from '@/components/use-cases/use-cases'
import FeaturesCarousel from '@/components/features-carousel'
import Pricing from './pricing-section'
import Cta from 'gatoapp/components/cta'
import HomeExtensionsSection from '@/components/home-extensions-section'

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
      <FeaturesCarousel />
      <HomeExtensionsSection />
      <Pricing />
      <Cta
        tryoutProduct='Gato GraphQL + all extensions'
      />
    </>
  )
}
