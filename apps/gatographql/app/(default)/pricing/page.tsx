import PricingSection from './pricing-section'
import Customers from '@gato/components/customers'
import Faqs from '@gato/components/faqs'
import Cta from '@gato/components/cta'
import PricingMoneyBackGuarantee from '@gato/components/pricing-moneyback-guarantee'
import { createSEOPageTitle } from '@/utils/content/metadata'
import { getTestimonials } from '@/components/data/testimonials'
import { getFAQs } from '@/components/data/faqs'

const pageTitle = 'Pricing'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Pricing plans for Gato GraphQL',
}

export default function Pricing() {
  const testimonials = getTestimonials()
  const faqItems = getFAQs()
  return (
    <>
      <PricingSection />
      <PricingMoneyBackGuarantee />
      <Customers
        testimonials={testimonials}
      />
      <Faqs
        faqItems={faqItems}
      />
      <Cta />
    </>
  )
}
