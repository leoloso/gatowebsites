import Pricing from '@/components/pricing'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import RadiantGradient from '@/components/radial-gradient'
import SectionHeader from '@/components/section-header'

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
              title='Flexible plans and features'
              description='All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
            />
            <Pricing />
          </div>
        </div>

      </section>

      <PricingMoneyBackGuarantee />
    </>
  )
}
