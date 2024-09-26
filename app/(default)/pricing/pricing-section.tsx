import PageHeader from '@/components/page-header'
import Pricing from '@/components/pricing/comparison-table/pricing'
import StunningBackground from '@/components/stunning-background'

export default function PricingSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          {/* Section header */}
          <PageHeader
            leading='Pricing plans'
            title='Simple plans for everyone'
            description='Unleash your capabilities with Gato GraphQL PRO.'
          />
          <Pricing />
        </div>
      </div>

    </section>
  )
}
