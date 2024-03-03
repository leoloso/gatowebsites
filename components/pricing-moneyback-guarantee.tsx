import Image from 'next/image'
import Illustration from '@/public/assets/theme/pricing-illustration.svg'
import IllustrationTop from '@/public/assets/theme/pricing-illustration-top.svg'
import Particles from '@/components/particles'
import MoneyBackGuaranteePic from '@/public/assets/money-back-guarantee.svg'

export default function PricingMoneyBackGuarantee() {
  return (
    <section className="relative">

      {/* Particles animation */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-64 h-64 -mt-24">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">30-day money back guarantee</h2>
            <p className="text-lg text-slate-400">Purchase Gato GraphQL PRO with the confidence that it is the product you need.</p>
          </div>

          {/* Rings illustration */}
          <div className="text-center pb-8">
            <div className="inline-flex items-center justify-center relative">
              {/* Particles animation */}
              <Particles className="absolute inset-0 -z-10" quantity={10} />
              <div className="inline-flex">
                <Image src={Illustration} width="334" height="334" alt="Features illustration" />
              </div>
              {/* <Image className="absolute -mt-[40%]" src={IllustrationTop} width="396" height="328" alt="Features illustration top" aria-hidden="true" /> */}
              {/* <div className="absolute w-[200%] flex items-center justify-center space-x-5"> */}
              <div className="absolute w-[200%] flex items-center justify-center space-x-5">
                <Image src={MoneyBackGuaranteePic} width={175} height={129} alt="Money back guarantee" />
                {/* <div className="-rotate-[4deg]">
                  <Image className="w-11 h-11 drop-shadow-lg animate-[float_2.6s_ease-in-out_infinite] opacity-10" src={Icon01} width={80} height={80} alt="Pricing icon 01" />
                </div>
                <div className="rotate-[4deg]">
                  <Image className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25" src={Icon02} width={80} height={80} alt="Pricing icon 02" />
                </div>
                <div className="-rotate-[4deg]">
                  <Image className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60" src={Icon03} width={80} height={80} alt="Pricing icon 03" />
                </div>
                <Image className="drop-shadow-lg animate-float" src={Icon04} width={80} height={80} alt="Pricing icon 04" />
                <div className="rotate-[4deg]">
                  <Image className="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60" src={Icon05} width={80} height={80} alt="Pricing icon 05" />
                </div>
                <div className="-rotate-[4deg]">
                  <Image className="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25" src={Icon06} width={80} height={80} alt="Pricing icon 06" />
                </div>
                <div className="rotate-[4deg]">
                  <Image className="w-11 h-11 drop-shadow-lg animate-[float_2.6ås_ease-in-out_infinite] opacity-10" src={Icon07} width={80} height={80} alt="Pricing icon 07" />
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}