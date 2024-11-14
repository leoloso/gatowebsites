import PricingSection from './pricing-section'
// import Features from '@gato/components/src/features-05'
import Customers from '@gato/components/src/customers'
import Faqs from '@gato/components/src/faqs'
import Cta from '@gato/components/src/cta'
import PricingMoneyBackGuarantee from '@gato/components/src/pricing-moneyback-guarantee'
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
