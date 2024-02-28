import { allExtensions } from 'contentlayer/generated'

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'
import {
  getFeaturedExtensions,
} from '@/utils/extension'
import { sortByOrderAndTitle } from '@/utils/sort'

export const metadata = {
  title: 'Extensions - Stellar',
  description: 'Page description',
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
    </>
  )
}
