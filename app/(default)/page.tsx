export const metadata = {
  title: 'Gato GraphQL',
  description: 'The most powerful GraphQL server for WordPress',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features06 from '@/components/features-06'
import Features07 from '@/components/features-07'
import Features03 from '@/components/features-03'
import FeaturesCarousel from '@/components/features-carousel'
import Features04 from '@/components/features-04'
import Pricing from './pricing-section'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features06 />
      <Features02 />
      <Features />
      <FeaturesCarousel />
      <Features07 />
      <Features03 />
      <Features04 />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  )
}
