import FeaturesSection from '@/components/features-section'
import FeaturesList from '@/components/features-list'
import Cta from '@/components/cta-02'

export const metadata = {
  title: 'Features - Stellar',
  description: 'Page description',
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
