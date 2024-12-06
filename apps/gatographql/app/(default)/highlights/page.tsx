import { allHighlights } from '@/.contentlayer/generated'
import HighlightItem from './highlight-item'
import { createSEOPageTitle } from '@/utils/content/metadata'
import { sortByOrder } from 'gatoapp/utils/content/sort'
import StunningBackground from 'gatoapp/components/stunning-background'
import PageHeader from 'gatoapp/components/page-header'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

const pageTitle = 'Highlights'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Distinctive features from Gato GraphQL to power your application',
}

export default function Highlights() {

  // Sort highlights by order
  allHighlights.sort(sortByOrder)

  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <CampaignBanner />

          {/* Page header */}
          <PageHeader
            leading='Experience the power'
            title='Highlights'
            description='Plenty of ways to benefit from Gato GraphQL'
          />

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.purple.500/.65)_25%,_theme(colors.purple.200)_50%,_theme(colors.purple.500/.65)_75%,_transparent)] after:animate-shine" aria-hidden="true"></div>
              {allHighlights.map((highlight, highlightIndex) => (
                <HighlightItem key={highlightIndex} {...highlight} />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
