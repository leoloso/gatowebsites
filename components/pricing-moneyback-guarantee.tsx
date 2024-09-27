import Image from 'next/image'
import Illustration from '@/public/assets/theme/pricing-illustration.svg'
import IllustrationTop from '@/public/assets/theme/pricing-illustration-top.svg'
import Particles from '@/components/particles'
import MoneyBackGuaranteePic from '@/public/assets/money-back-guarantee.svg'
import SectionHeader from './section-header'

export default function PricingMoneyBackGuarantee() {
  return (
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

          {/* Section header */}
          <SectionHeader
            title='30-day money back guarantee'
            description='Purchase any extensions with the confidence that you can request a refund'
            paddingClassname="pb-8"
          />

          {/* Rings illustration */}
          <div className="text-center pb-8">
            <div className="inline-flex items-center justify-center relative">
              {/* Particles animation */}
              <Particles className="absolute inset-0 -z-10" quantity={10} />
              <div className="inline-flex">
                <Image src={Illustration} width="334" height="334" alt="Features illustration" />
              </div>
              <Image className="absolute -mt-[40%]" src={IllustrationTop} width="396" height="328" alt="Features illustration top" aria-hidden="true" />
              <div className="absolute w-[200%] flex items-center justify-center space-x-5">
                <Image src={MoneyBackGuaranteePic} width={175} height={129} alt="Money back guarantee" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}