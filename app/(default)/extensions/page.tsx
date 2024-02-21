import { allExtensions } from 'contentlayer/generated'

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'
import { sortExtensions } from '@/components/utils/extension'

export const metadata = {
  title: 'Integrations - Stellar',
  description: 'Page description',
}

export default function Integrations() {
  // Sort extensions
  allExtensions.sort(sortExtensions)  

  return (
    <>
      <ExtensionsSection />
      <ExtensionsList />
    </>
  )
}
