import { Extension } from '@/.contentlayer/generated'
import ArtifactsList from 'gatoapp/components/artifacts-list';
import { allExtensions } from '@/.contentlayer/generated'
import DefaultFeatureIcon from 'gatoapp/public/assets/theme/default/feature-icon-01.png'

export default function ExtensionsList({
  extensions = allExtensions,
}: {
  extensions?: Array<Extension>,
}) {
  return (
    <ArtifactsList
      artifacts={extensions}
      showTopbar={true}
      showSearch={false}
      defaultFeatureIcon={DefaultFeatureIcon}
      bgClassname="bg-gradient-to-tr from-slate-800 to-violet-800/25"
    />
  )
}

