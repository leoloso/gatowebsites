'use client';

import AppCtaNewsletter from 'gatoapp/components/cta-newsletter'
import { useAppConfigProvider } from 'gatoapp/app/appconfig-provider'

export default function CtaNewsletter() {
  const { config: AppConfig } = useAppConfigProvider()
  return (
    <AppCtaNewsletter
      title="New plugins coming soon"
      description={`Subscribe to receive a notification when the next plugin by ${AppConfig.meta.name} is released.`}
    />
  )
}