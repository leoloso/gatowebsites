import { allFeatures } from 'contentlayer/generated'

import FeaturesSection from '@/components/features-section'
import FeaturesList from '@/components/features-list'
import { sortByTitle } from '@/utils/sort'

export const metadata = {
  title: 'Features - Stellar',
  description: 'Page description',
}

export default function Features() {
  // Sort features
  const features = allFeatures.sort(sortByTitle)  
  return (
    <>
      <FeaturesSection />
      <FeaturesList
        features={ features }
      />
    </>
  )
}
