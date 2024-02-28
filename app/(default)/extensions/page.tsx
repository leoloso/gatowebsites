import { allExtensions } from 'contentlayer/generated'

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'
import {
  getFeaturedExtensions,
} from '@/utils/extension'
import { sortByTitle } from '@/utils/sort'

export const metadata = {
  title: 'Extensions - Stellar',
  description: 'Page description',
}

export default function Extensions() {
  // Sort extensions
  const extensions = allExtensions.sort(sortByTitle)  
  const featuredExtensions = getFeaturedExtensions(extensions).sort(sortByTitle)
  return (
    <>
      <ExtensionsSection
        extensions={ featuredExtensions }
      />
      <ExtensionsList
        extensions={ extensions }
      />
    </>
  )
}
