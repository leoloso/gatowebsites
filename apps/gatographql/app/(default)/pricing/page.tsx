import PricingSection from './pricing-section'
import Customers from 'gatoapp/components/customers'
import Faqs from '@/components/faqs'
import CtaTryout01 from '@/components/cta-tryout-01'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
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
        title="Meet our customers"
        description='Developers, plugin business owners, and agency owners say this about our product...'
      />
      <Faqs
        faqItems={faqItems}
      />
      <CtaTryout01 />
    </>
  )
}
