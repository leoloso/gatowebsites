import { allFeatures } from 'contentlayer/generated'

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
    <FeaturesList
      features={ features }
    />
  )
}
