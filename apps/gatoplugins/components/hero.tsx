import Image from 'next/image'
import Particles from 'gatoapp/components/particles'
import LogoPic from 'gatoapp/public/assets/Gato-logo-suki-rectangular.png'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'
import Illustration from 'gatoapp/public/assets/theme/glow-top.svg'

export default function Hero({
  title,
  description,
}: {
  title: string,
  description: React.ReactNode
}) {
  return (
    <section
      className="bg-gradient-to-r from-purple-500/60 via-purple-500 to-purple-500/60"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

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