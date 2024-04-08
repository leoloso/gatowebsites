import FeaturesSection from '@/components/features-section'
import FeaturesList from '@/components/features-list'
import Cta from '@/components/cta-02'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Features'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'All the standard GraphQL features, plus custom ones for speed, performance and functionality',
  openGraph: {
    title: pageTitle,
  },
  twitter: {
    title: pageTitle,
  },
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
