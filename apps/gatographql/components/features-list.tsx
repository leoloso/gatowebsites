import { sortByOrderAndTitle } from '@gato/utils/content/sort';
import ArtifactsList from '@gato/components/artifacts-list';
import { allFeatures } from '@/.contentlayer/generated'
import DefaultArtifactIcon02 from '@/public/assets/theme/default/artifact-icon-02.png'
import DefaultArtifactIcon04 from '@/public/assets/theme/default/artifact-icon-04.png'

export default function FeaturesList() {
  const features = allFeatures.sort(sortByOrderAndTitle)
  
  return (
    <ArtifactsList
      artifacts={features}
      showTopbar={false}
      showSearch={false}
      showHeading={false}
      defaultArtifactIcon={DefaultArtifactIcon02}
      bgClassname="bg-gradient-to-tr from-slate-800 to-purple-800/25"
    />
  )
}

