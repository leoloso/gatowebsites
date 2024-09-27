import ExtensionDropdownPricing from '@/components/pricing/extension-dropdown/pricing'
import Particles from '@/components/particles'
import PricingMoneyBackGuarantee from '@/components/pricing-moneyback-guarantee'
import RadiantGradient from '@/components/radial-gradient'

export default function ExtensionsPricingSection() {

  return (
    <div className="relative">
      <div className="relative pb-12 md:pb-20 pt-16 md:pt-32">

        {/* Particles animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
          <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
        </div>

        {/* Radial gradient */}
        <RadiantGradient />
        
        <div className="mb-8 text-center">
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-2 md:pb-4">
            Pick your extension
          </h2>
          <p className="text-lg text-slate-400">Purchase the <span className='font-bold'>extension you need</span>, or get a <span className='font-bold'>bundle with all extensions</span> (with a big discount)</p>
        </div>
        <ExtensionDropdownPricing />
      </div>

      <PricingMoneyBackGuarantee />
    </div>
  )
}