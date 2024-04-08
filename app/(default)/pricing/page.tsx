import PricingSection from './pricing-section'
// import Features from '@/components/features-05'
import Customers from '@/components/customers'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta-02'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Pricing'),
  description: 'Pricing plans to unleash your capabilities with Gato GraphQL PRO',
}

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <PricingMoneyBackGuarantee />
      {/* <Features /> */}
      <Customers />
      <Faqs />
      <Cta />
    </>
  )
}
