import { Extension } from '@/.contentlayer/generated'
import ArtifactsList from './artifacts-list';
import { allExtensions } from '@/.contentlayer/generated'
import DefaultArtifactIcon from '@/public/assets/theme/default/artifact-icon-01.png'

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
      defaultArtifactIcon={DefaultArtifactIcon}
      bgClassname="bg-gradient-to-tr from-slate-800 to-violet-800/25"
    />
  )
}

