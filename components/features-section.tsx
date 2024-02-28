import PageHeader from './page-header'
import StunningBackground from './stunning-background'

export default function FeaturesSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <PageHeader
            leading='Integrations & Add-ons'
            title='Make Stellar uniquely yours'
            description='Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.'
          />

        </div>
      </div>
    </section>
  )
}
