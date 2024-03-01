export const metadata = {
  title: 'About - Stellar',
  description: 'Page description',
}

import Hero from '@/components/hero-howdy'
import HowdyBody from '@/components/howdy'
import Team from '@/components/team'
import Recruitment from '@/components/recruitment'
import Testimonials from '@/components/testimonials-02'
import Cta from '@/components/cta-02'

export default function Howdy() {
  return (
    <>
      <Hero />
      <HowdyBody />
      <Team />
      <Recruitment />
      <Testimonials />
      <Cta />
    </>
  )
}
