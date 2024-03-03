import Image from 'next/image'
import Illustration from '@/public/assets/theme/pricing-illustration.svg'
import IllustrationTop from '@/public/assets/theme/pricing-illustration-top.svg'
import Particles from '@/components/particles'
import MoneyBackGuaranteePic from '@/public/assets/money-back-guarantee.svg'

export default function PricingMoneyBackGuarantee() {
  return (
    <section className="relative">

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-64 h-64 -mt-24">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          {/* Radial gradient */}
          <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
            <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">30-day money back guarantee</h2>
            <p className="text-lg text-slate-400">If Gato GraphQL PRO does not satisfy you needs, you can request a refund.</p>
          </div>

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