'use client'

import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort';
import ArtifactsList from 'gatoapp/components/artifacts-list';
import DefaultFeatureIcon02 from 'gatoapp/public/assets/theme/default/feature-icon-02.png'
import { useAppContentProvider } from 'gatoapp/app/appcontent-provider'

export default function FeaturesList() {
  const { allFeatures } = useAppContentProvider()
  const features = allFeatures.sort(sortByOrderAndTitle)
  
  return (
    <ArtifactsList
      artifacts={features}
      showTopbar={false}
      showSearch={false}
      showHeading={false}
      defaultFeatureIcon={DefaultFeatureIcon02}
      bgClassname="bg-gradient-to-tr from-slate-800 to-purple-800/25"
    />
  )
}

