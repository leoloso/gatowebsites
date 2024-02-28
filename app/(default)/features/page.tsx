import FeaturesSection from '@/components/features-section'
import FeaturesList from '@/components/features-list'

export const metadata = {
  title: 'Features - Stellar',
  description: 'Page description',
}

export default function Features() {
  return (
    <>
      <FeaturesSection />
      <FeaturesList/>
    </>
  )
}
