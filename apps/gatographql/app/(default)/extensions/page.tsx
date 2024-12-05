import CtaTryout01 from '@/components/cta-tryout-01'
import StunningBackground from 'gatoapp/components/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import ExtensionsSection from './extensions-section'
import ExtensionsPricingSection from './extensions-pricing-section'
import PageHeader from 'gatoapp/components/page-header'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

const pageTitle = 'Extensions'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Provide additional functionality to Gato GraphQL, and extend the GraphQL schema',
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

      <CtaTryout01 />
    </>
  )
}