import Hero from '@gato/components/hero'
import UseCases from '@gato/components/use-cases/use-cases'
import FeaturesCarousel from '@gato/components/features-carousel'
import Pricing from './pricing-section'
import Cta from '@gato/components/cta'
import HomeExtensionsSection from '@gato/components/home-extensions-section'

export const metadata = {
  title: 'Gato GraphQL',
  description: 'Powerful and flexible GraphQL server for WordPress',
}

export default function Home() {
  return (
    <>
      <Hero />
      <UseCases />
      <FeaturesCarousel />
      <HomeExtensionsSection />
      <Pricing />
      <Cta />
    </>
  )
}
