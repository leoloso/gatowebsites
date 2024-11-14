import HowdyHero from '@gato/components/src/howdy-hero'
import HowdyMain from '@gato/components/src/howdy-main'
import Cta from '@gato/components/src/cta-02'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Howdy'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: "Let's stay in touch",
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
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
