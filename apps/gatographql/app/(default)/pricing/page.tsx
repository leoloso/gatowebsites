import PricingSection from './pricing-section'
// import Features from '@/components/features-05'
import Customers from '@/components/customers'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Pricing'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Pricing plans for Gato GraphQL',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
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
