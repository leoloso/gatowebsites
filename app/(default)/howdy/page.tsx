import HowdyHero from '@/components/howdy-hero'
import HowdyMain from '@/components/howdy-main'
import Cta from '@/components/cta-02'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Howdy'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: "Let's stay in touch",
  openGraph: {
    title: pageTitle,
  },
  twitter: {
    title: pageTitle,
  },
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
