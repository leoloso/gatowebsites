import PageHeader from 'gatoapp/components/page-header'
import ExtensionDropdownPricing from '@/components/pricing/extension-dropdown/pricing'
import StunningBackground from 'gatoapp/components/stunning-background'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

export default function PricingSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          <CampaignBanner />

          {/* Section header */}
          <PageHeader
            leading='Extensions'
            title='Pricing'
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">
                Purchase the <span className='font-bold'>extension you need</span>, or get a <span className='font-bold'>bundle with all extensions</span>
              </p>
            </div>
          </PageHeader>

          <ExtensionDropdownPricing
            preselectBundle={true}
          />
        </div>
      </div>

    </section>
  )
}
