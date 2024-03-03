export const metadata = {
  title: 'Pricing - Stellar',
  description: 'Page description',
}

import PricingSection from './pricing-section'
import Features from '@/components/features-05'
import Customers from '@/components/customers'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta-02'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <PricingMoneyBackGuarantee />
      <Features />
      <Customers />
      <Faqs />
      <Cta />
    </>
  )
}
