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
      addRadialGradient={true}
    >
      <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Meet our customers</h2>
          <p className="text-lg text-slate-400">There are many variations available, but the majority have suffered, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
      </div>
    </ArtifactsList>
  )
}

