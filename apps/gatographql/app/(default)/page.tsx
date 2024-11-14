import Hero from '@gato/components/hero'
import UseCases from '@gato/components/use-cases/use-cases'
import Clients from '@gato/components/clients'
import Features from '@gato/components/features'
import Features02 from '@gato/components/features-02'
import Features06 from '@gato/components/features-06'
import Features07 from '@gato/components/features-07'
import Features03 from '@gato/components/features-03'
import FeaturesCarousel from '@gato/components/features-carousel'
import Features04 from '@gato/components/features-04'
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
      {/* <Clients />
      <Features06 />
      <Features02 />
      <Features /> */}
      <FeaturesCarousel />
      {/* <Features03 />
      <Features07 />
      <Features04 /> */}
      <HomeExtensionsSection />
      <Pricing />
      <Cta />
    </>
  )
}
