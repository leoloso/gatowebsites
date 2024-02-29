import { sortByOrderAndTitle } from '@/utils/sort';
import ArtifactsList from './artifacts-list';
import { allFeatures } from 'contentlayer/generated'
import SectionHeader from './section-header';

export default function FeaturesList() {
  const features = allFeatures.sort(sortByOrderAndTitle)
  const freePluginFeatures = features.filter((feature) => feature.category === 'Free plugin')
  const proPluginFeatures = features.filter((feature) => feature.category === 'PRO plugin')
  
  return (
    <>
      <ArtifactsList
        artifacts={freePluginFeatures}
        showTopbar={false}
        showSearch={false}
        showHeading={false}
      />
      <ArtifactsList
        artifacts={proPluginFeatures}
        showTopbar={false}
        showSearch={false}
        showHeading={false}
        addRadialGradient={true}
      >
        <div className="pt-12 md:pt-20">
          <SectionHeader
            leading='Pricing plans'
            title='Meet our customers'
            description="There are many variations available, but the majority have suffered, by injected humour, or randomised words which don't look even slightly believable."
          />
        </div>
      </ArtifactsList>
    </>
  )
}

