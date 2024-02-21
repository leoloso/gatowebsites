export const metadata = {
  title: 'Integrations - Stellar',
  description: 'Page description',
}

import ExtensionsSection from '@/components/extensions-section'
import ExtensionsList from '@/components/extensions-list'

export default function Integrations() {
  return (
    <>
      <ExtensionsSection />
      <ExtensionsList />
    </>
  )
}
