import Cta from '@/components/cta'
import StunningBackground from '@/components/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import ExtensionsSection from './extensions-section'
import ExtensionsPricingSection from './extensions-pricing-section'
import PageHeader from '@/components/page-header'
import AppSettings from '@/app/app.settings'
import BlackFridayBanner1 from '@/components/ui/campaigns/black-friday-banner-1'

const pageTitle = 'Extensions'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Provide additional functionality to Gato GraphQL, and extend the GraphQL schema',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
}

export default function Extensions() {

  return (
    <>
      <section className="relative">

        <StunningBackground />
    
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <PageHeader
              leading='Satisfy your requirements'
              title='Extensions'
              description='Augment the server functionality, and extend the schema'
            />

            <div className="mb-16 -mt-8">
              { AppSettings.campaigns.enableBlackFriday && (
                  <BlackFridayBanner1 />
              )}
            </div>

            <ExtensionsSection />
          </div>

          <ExtensionsPricingSection />
          
        </div>

      </section>

      <Cta />
    </>
  )
}