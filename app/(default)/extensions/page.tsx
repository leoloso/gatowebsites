import { allExtensions } from 'contentlayer/generated'

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'
import {
  sortExtensions,
  getFeaturedExtensions,
} from '@/utils/extension'

export const metadata = {
  title: 'Extensions - Stellar',
  description: 'Page description',
}

export default function Extensions() {
  // Sort extensions
  allExtensions.sort(sortExtensions)  
  const featuredExtensions = getFeaturedExtensions()
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
