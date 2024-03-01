export const metadata = {
  title: 'Howdy - Stellar',
  description: 'Page description',
}

import HowdyHero from '@/components/howdy-hero'
import HowdyMain from '@/components/howdy-main'
import Cta from '@/components/cta-02'

export default function Howdy() {
  return (
    <>
      <HowdyHero />
      <HowdyMain />
      <Cta />
    </>
  )
}
