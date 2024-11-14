import StunningBackground from '@gato/components/src/stunning-background'
import PageHeader from '@gato/components/src/page-header'
import Cta from '@gato/components/src/cta-02'
import ComparisonList from './comparison-list'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import CampaignBanner from '@gato/components/src/ui/campaigns/campaign-banner'

const pageTitle = 'Comparisons'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'How is Gato GraphQL different than other WordPress plugins?',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
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
      <Cta />
    </>
  )
}
