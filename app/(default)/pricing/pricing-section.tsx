import PageHeader from '@/components/page-header'
import Pricing from '@/components/pricing'
import StunningBackground from '@/components/stunning-background'

export default function PricingSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          {/* Section header */}
          <PageHeader
            leading='Get the most powerful GraphQL server for WordPress'
            title='Simple plans for everyone'
            description='Unleash your capabilities with Gato GraphQL PRO. Execute updates in bulk, interact with external services, automate tasks, translate content, and much more.'
          />
          <Pricing />
        </div>
      </div>

    </section>
  )
}
