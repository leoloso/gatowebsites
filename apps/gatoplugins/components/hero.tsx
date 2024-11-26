import Image from 'next/image'
import Particles from 'gatoapp/components/particles'
import Illustration from 'gatoapp/public/assets/theme/glow-bottom.svg'
import LogoPic from 'gatoapp/public/assets/Gato-logo-suki-rectangular.png'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

export default function Hero({
  title,
  description,
}: {
  title: string,
  description: React.ReactNode
}) {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-32 md:pb-24">

          <CampaignBanner
            marginTopClassname="-mt-8"
          />

          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="-mb-12">
              <div className="flex w-full items-center justify-center pb-1">
                <Image src={LogoPic} width={250} height={175} alt="Logo" />
              </div>
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">{title}</h1>
            <p className="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">{description}</p>

          </div>

        </div>
      </div>
    </section>
  )
}