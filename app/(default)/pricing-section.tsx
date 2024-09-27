import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import RadiantGradient from '@/components/radial-gradient'
import SectionHeader from '@/components/section-header'
import ExtensionDropdownPricing from '@/components/pricing/extension-dropdown/pricing'

export default function PricingSection() {
  return (
    <>
      <section className="relative">
        {/* Radial gradient */}
        <RadiantGradient />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Content */}
            <SectionHeader
              leading='Pricing plans'
              title='Simple plans for everyone'
              description='Unleash your capabilities with Gato GraphQL PRO.'
            />
            <ExtensionDropdownPricing
              preselectBundle={true}
            />
          </div>
        </div>

      </section>

      <PricingMoneyBackGuarantee />
    </>
  )
}
