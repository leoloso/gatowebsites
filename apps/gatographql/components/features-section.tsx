import PageHeader from 'gatoapp/components/page-header'
import StunningBackground from 'gatoapp/components/stunning-background'
import CampaignBanner from 'gatoapp/components/ui/campaigns/campaign-banner'

export default function FeaturesSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          <CampaignBanner />

          {/* Section header */}
          <PageHeader
            leading='Flexibility, versatility, and power'
            title='Features'
            description='Gato GraphQL offers ways to augment, protect, and speed up your application'
          />

        </div>
      </div>
    </section>
  )
}
