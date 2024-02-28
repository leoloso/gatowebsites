import { sortByOrderAndTitle } from '@/utils/sort';
import ArtifactsList from './artifacts-list';
import { allFeatures } from 'contentlayer/generated'

export default function FeaturesList() {
  // Sort features
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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Pricing plans</div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Meet our customers</h2>
            <p className="text-lg text-slate-400">There are many variations available, but the majority have suffered, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        </div>
      </ArtifactsList>
    </>
  )
}

