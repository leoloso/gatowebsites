import PageHeader from './page-header'
import StunningBackground from './stunning-background'
import AppSettings from '@/app/app.settings'
import BlackFridayBanner from '@/components/ui/campaigns/black-friday-banner'

export default function FeaturesSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          <div className="mb-16 -mt-16">
            { AppSettings.campaigns.enableBlackFriday && (
                <BlackFridayBanner />
            )}
          </div>

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
