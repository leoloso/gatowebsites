import { Plugin } from '@/.contentlayer/generated'
import PluginPricing from '@/components/pricing/plugin-pricing'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import Testimonial from 'gatoapp/components/testimonial'
import { getTestimonials } from '@/components/data/testimonials'
import Image from 'next/image'
import Illustration from 'gatoapp/public/assets/theme/lightmode/features-illustration.svg'
export default function SinglePluginPricing({
  plugin,
}: {
  plugin: Plugin,
}) {
  const testimonials = getTestimonials()
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

        {/* Illustration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <Image className="max-w-none" src={Illustration} alt="Illsutration" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 md:pb-16 text-center">
              <h2 className="h2 text-white pb-2 md:pb-4">Get your plugin</h2>
              <p className="text-lg md:text-xl text-white text-opacity-80 mb-8">Purchase <span className='font-bold'>{ plugin.title }</span></p>
            </div>
          
            <PluginPricing
              plugin={ plugin }
            />

          </div>

        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <PricingMoneyBackGuarantee />

          <Testimonial
            testimonials={testimonials}
          />

        </div>
      </section>
    </>
  )
}