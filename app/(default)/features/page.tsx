import FeaturesSection from '@/components/features-section'
import FeaturesList from '@/components/features-list'
import Cta from '@/components/cta-02'

export const metadata = {
  title: 'Features - Gato GraphQL',
  description: 'All the standard GraphQL features, plus custom ones for speed, performance and functionality',
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
