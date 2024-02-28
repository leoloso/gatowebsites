import Pricing from '@/components/pricing'
import RadiantGradient from '@/components/radial-gradient'

export default function PricingSection() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <RadiantGradient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Pricing plans</div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Flexible plans and features</h2>
            <p className="text-lg text-slate-400">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          </div>
          <Pricing />
        </div>
      </div>

    </section>
  )
}
