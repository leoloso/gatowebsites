import { Feature } from '@/.contentlayer/generated'
import ArtifactsList from './artifacts-list';
import { allFeatures } from 'contentlayer/generated'

export default function FeaturesList({
  features = allFeatures,
}: {
  features?: Array<Feature>,
}) {
  return (
    <ArtifactsList
      artifacts={features}
      showTopbar={false}
      showSearch={false}
    />
  )
}

