import Pricing from '@/components/pricing'
import StunningBackground from '@/components/stunning-background'

export default function PricingSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Simple plans for everyone</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">Cut down overhead costs and ditch clunky software. Get a flexible, purpose-built tool to simplify your security with authentication services.</p>
            </div>
          </div>
          <Pricing />
        </div>
      </div>

    </section>
  )
}
