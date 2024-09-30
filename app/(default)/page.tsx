import Hero from '@/components/hero'
import UseCases from '@/components/use-cases/use-cases'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features06 from '@/components/features-06'
import Features07 from '@/components/features-07'
import Features03 from '@/components/features-03'
import FeaturesCarousel from '@/components/features-carousel'
import Features04 from '@/components/features-04'
import Pricing from './pricing-section'
import Cta from '@/components/cta'
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
