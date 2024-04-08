import HowdyHero from '@/components/howdy-hero'
import HowdyMain from '@/components/howdy-main'
import Cta from '@/components/cta-02'
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Howdy'),
  description: "Let's stay in touch",
}
export default function Howdy() {
  return (
    <>
      <HowdyHero />
      <HowdyMain />
      <Cta />
    </>
  )
}
