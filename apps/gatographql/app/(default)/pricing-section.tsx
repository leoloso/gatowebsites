import PricingMoneyBackGuarantee from '@gato/components/pricing-moneyback-guarantee'
import SectionHeader from '@gato/components/section-header'
import ExtensionDropdownPricing from '@gato/components/pricing/extension-dropdown/pricing'
import Particles from '@gato/components/particles'
import Testimonial from '@gato/components/testimonial'
import { getTestimonials } from '@/components/data/testimonials'

export default function PricingSection() {
  const testimonials = getTestimonials()
  return (
    <>
      <section className="relative">
        {/* Blurred shape */}
        <div className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
          </svg>
        </div>

        {/* Particles animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-64 h-64 -mt-24">
          <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Content */}
            <SectionHeader
              leading='Pricing plans'
              title='Pick your extension'
            >
              <p className="text-lg text-slate-400">
                Purchase the <span className='font-bold'>extension you need</span>, or get a <span className='font-bold'>bundle with all extensions</span>
              </p>
            </SectionHeader>
            <ExtensionDropdownPricing
              preselectBundle={true}
            />
          </div>
        </div>

      </section>

      <PricingMoneyBackGuarantee />

      <Testimonial
        testimonials={testimonials}
      />

    </>
  )
}
