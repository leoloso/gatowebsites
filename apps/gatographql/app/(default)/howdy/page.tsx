import HowdyHero from 'gatoapp/components/howdy-hero'
import HowdyMain from 'gatoapp/components/howdy-main'
import CtaTryout02 from '@/components/cta-tryout-02'
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
      <CtaTryout02 />
    </>
  )
}
