export const metadata = {
  title: 'Integrations - Stellar',
  description: 'Page description',
}

import ExtensionsSection from './extensions-section'
import ExtensionsList from './extensions-list'

export default function Integrations() {
  return (
    <>
      <ExtensionsSection />
      <ExtensionsList />
    </>
  )
}
