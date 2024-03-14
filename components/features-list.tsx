import { sortByOrderAndTitle } from '@/utils/content/sort';
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
            leading='Truly unleash your capabilities with Gato GraphQL PRO'
            title='Manage your WordPress site using advanced GraphQL'
            description='The Gato GraphQL PRO plugin provides features to retrieve, manipulate and store any piece of data, from WordPress and the wider web. Automate your tasks and content workflows.'
            id='pro-features'
          />
        </div>
      </ArtifactsList>
    </>
  )
}

