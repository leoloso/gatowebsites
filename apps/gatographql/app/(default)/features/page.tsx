import FeaturesSection from '@gato/components/src/features-section'
import FeaturesList from '@gato/components/src/features-list'
import Cta from '@gato/components/src/cta-02'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Features'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'All the standard GraphQL features, plus custom ones for speed, performance and functionality',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
}

export default function Features() {
  return (
    <>
      <FeaturesSection />
      <FeaturesList/>
      <Cta />
    </>
  )
}