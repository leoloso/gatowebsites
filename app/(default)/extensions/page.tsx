import { allExtensions } from 'contentlayer/generated'

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'
import {
  getFeaturedExtensions,
} from '@/utils/content/extension'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import Cta from '@/components/cta-02'
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Extensions'),
  description: 'Provide additional functionality to Gato GraphQL, and expand the GraphQL schema',
}

export default function Extensions() {
  // Sort extensions
  const extensions = allExtensions.sort(sortByOrderAndTitle)  
  const featuredExtensions = getFeaturedExtensions(extensions).sort(sortByOrderAndTitle)
  return (
    <>
      <ExtensionsSection
        extensions={ featuredExtensions }
      />
      <ExtensionsList
        extensions={ extensions }
      />
      <Cta />
    </>
  )
}
