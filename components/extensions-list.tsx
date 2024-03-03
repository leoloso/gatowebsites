import { Extension } from '@/.contentlayer/generated'
import ArtifactsList from './artifacts-list';
import { allExtensions } from 'contentlayer/generated'
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
    />
  )
}

