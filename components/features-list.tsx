import { sortByOrderAndTitle } from '@/utils/sort';
import ArtifactsList from './artifacts-list';
import { allFeatures } from 'contentlayer/generated'
import SectionHeader from './section-header';
import DefaultArtifactIcon02 from '@/public/assets/theme/default/artifact-icon-02.png'
import DefaultArtifactIcon04 from '@/public/assets/theme/default/artifact-icon-04.png'

export default function FeaturesList() {
  const features = allFeatures.sort(sortByOrderAndTitle)
  const freePluginFeatures = features.filter((feature) => feature.category === 'Free plugin')
  const proPluginFeatures = features.filter((feature) => feature.category === 'PRO plugin')
  
  return (
    <>
      {/* Free plugin features */}
      <ArtifactsList
        artifacts={freePluginFeatures}
        showTopbar={false}
        showSearch={false}
        showHeading={false}
        defaultArtifactIcon={DefaultArtifactIcon02}
      />
      {/* PRO plugin features */}
      <ArtifactsList
        artifacts={proPluginFeatures}
        showTopbar={false}
        showSearch={false}
        showHeading={false}
        addRadialGradient={true}
        defaultArtifactIcon={DefaultArtifactIcon04}
      >
        <div className="pt-12 md:pt-20">
          <SectionHeader
            leading='Gato GraphQL PRO'
            title='Truly unleash your capabilities'
            description='Manage your WordPress site using advanced GraphQL features, included in Gato GraphQL PRO. Retrieve, manipulate and store again any piece of data, in any desired way.'
          />
        </div>
      </ArtifactsList>
    </>
  )
}

