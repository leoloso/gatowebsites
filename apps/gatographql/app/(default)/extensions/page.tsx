import Cta from '@gato/components/src/cta'
import StunningBackground from '@gato/components/src/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import ExtensionsSection from './extensions-section'
import ExtensionsPricingSection from './extensions-pricing-section'
import PageHeader from '@gato/components/src/page-header'
import CampaignBanner from '@gato/components/src/ui/campaigns/campaign-banner'

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

            <CampaignBanner />

            {/*  Page header */}
            <PageHeader
              leading='Satisfy your requirements'
              title='Extensions'
              description='Augment the server functionality, and extend the schema'
            />

            <ExtensionsSection />
          </div>

          <ExtensionsPricingSection />
          
        </div>

      </section>

      <Cta />
    </>
  )
}