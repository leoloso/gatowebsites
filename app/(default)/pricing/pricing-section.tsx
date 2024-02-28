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
            leading='The security first platform'
            title='Simple plans for everyone'
            description='Cut down overhead costs and ditch clunky software. Get a flexible, purpose-built tool to simplify your security with authentication services.'
          />
          <Pricing />
        </div>
      </div>

    </section>
  )
}
