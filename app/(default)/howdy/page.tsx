export const metadata = {
  title: 'Howdy - Stellar',
  description: 'Page description',
}

import Hero from '@/components/howdy-hero'
import HowdyMain from '@/components/howdy-main'
import HowdyFooter from '@/components/howdy-footer'

export default function Howdy() {
  return (
    <>
      <Hero />
      <HowdyMain />
      <HowdyFooter />
    </>
  )
}
