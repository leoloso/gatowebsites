import HowdyHero from '@gato/components/howdy-hero'
import HowdyMain from '@gato/components/howdy-main'
import Cta from '@gato/components/cta-02'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Howdy'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
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
