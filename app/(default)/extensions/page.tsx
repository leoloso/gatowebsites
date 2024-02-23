import { allExtensions } from 'contentlayer/generated'

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'
import {
  getFeaturedExtensions,
} from '@/utils/extension'
import { sortByName } from '@/utils/sort'

export const metadata = {
  title: 'Extensions - Stellar',
  description: 'Page description',
}

export default function Extensions() {
  // Sort extensions
  allExtensions.sort(sortByName)  
  const featuredExtensions = getFeaturedExtensions().sort(sortByName)
  return (
    <>
      <ExtensionsSection
        extensions={ featuredExtensions }
      />
      <ExtensionsList
        extensions={ allExtensions }
      />
    </>
  )
}
