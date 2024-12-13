import StunningBackground from 'gatoapp/components/stunning-background'
import PageHeader from 'gatoapp/components/page-header'
import CtaTryout02 from '@/components/cta-tryout-02'
import ComparisonList from './comparison-list'
import { createSEOPageTitle } from '@/utils/content/metadata'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

const pageTitle = 'Comparisons'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'How is Gato GraphQL different than other WordPress plugins?',
}

export default function ComparisonsPage() {

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">

            <CampaignBanner />

            {/* Section header */}
            <PageHeader
              leading='Comparing against plugins for WordPress'
              title='Gato GraphQL vs [...]'
              description='How is Gato GraphQL different than other WordPress plugins?'
            />

            <ComparisonList />

          </div>
        </div>

      </section>
      <CtaTryout02 />
    </>
  )
}
