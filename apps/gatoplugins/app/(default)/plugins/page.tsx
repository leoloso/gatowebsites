import StunningBackground from 'gatoapp/components/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import PluginsSection from './plugins-section'
import PageHeader from 'gatoapp/components/page-header'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

const pageTitle = 'Plugins'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'All the plugins by Gato Plugins',
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
              title='Plugins'
              description='Browse all the plugins by Gato Plugins'
            />

            <PluginsSection />
          </div>

        </div>

      </section>

    </>
  )
}