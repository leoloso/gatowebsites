'use client'

import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort';
import UnstyledFeaturesList from 'gatoapp/components/features-list-unstyled';
import DefaultFeatureIcon02 from 'gatoapp/public/assets/theme/default/feature-icon-02.png'
import { useAppContentProvider } from 'gatoapp/app/appcontent-provider'

export default function FeaturesList() {
  const { allFeatures } = useAppContentProvider()
  const features = allFeatures.sort(sortByOrderAndTitle)
  
  return (
    <UnstyledFeaturesList
      features={features}
      showTopbar={false}
      showSearch={false}
      showHeading={false}
      defaultFeatureIcon={DefaultFeatureIcon02}
      bgClassname="bg-gradient-to-tr from-slate-800 to-purple-800/25"
    />
  )
}

