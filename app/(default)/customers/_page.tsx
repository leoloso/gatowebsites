export const metadata = {
  title: 'Customers - Stellar',
  description: 'Page description',
}

import StunningBackground from '@/components/stunning-background'
import CustomersList from './customers-list'

export default function Customers() {
  return (
    <>
      <section className="relative">

      <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-20">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Leaders love Stellar</div>
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Trusted by leading companies</h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-400">Stellar powers thousands of high-impact product teams. From next-gen startups who reach for the stars to established greats who change the world.</p>
              </div>
            </div>

            <CustomersList />

          </div>
        </div>

      </section>
    </>
  )
}
