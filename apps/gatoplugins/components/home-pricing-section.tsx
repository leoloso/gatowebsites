import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import Testimonial from 'gatoapp/components/testimonial'
import { getTestimonials } from '@/components/data/testimonials'

export default function HomePricingSection() {
  const testimonials = getTestimonials()
  return (
    <>
      <PricingMoneyBackGuarantee />

      <Testimonial
        testimonials={testimonials}
      />

    </>
  )
}
