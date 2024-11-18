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
      <Hero />
      <UseCases />
      <FeaturesCarousel />
      <HomeExtensionsSection />
      <Pricing />
      <Cta />
    </>
  )
}
