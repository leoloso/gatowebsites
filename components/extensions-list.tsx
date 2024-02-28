import { Extension } from '@/.contentlayer/generated'
import ArtifactsList from './artifacts-list';
import { allExtensions } from 'contentlayer/generated'

export default function ExtensionsList({
  extensions = allExtensions,
  showTopbar = true,
  showSearch = false,
}: {
  extensions?: Array<Extension>,
  showTopbar?: boolean
  showSearch?: boolean
}) {
  return (
    <ArtifactsList
      artifacts={extensions}
      showTopbar={showTopbar}
      showSearch={showSearch}
    />
  )
}

