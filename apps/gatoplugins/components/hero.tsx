import Image from 'next/image'
import LogoPic from 'gatoapp/public/assets/Gato-logo-suki-rectangular.png'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'
import Illustration from '@/public/images/layout/hero-illustration.svg'

export default function Hero({
  title,
  description,
}: {
  title: string,
  description: React.ReactNode
}) {
  return (

    <section className="relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <object type="image/svg+xml" data={Illustration.src} width="1440" height="1214" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-16 md:pt-40 md:pb-20">

          <div className="mb-8">
            <CampaignBanner
              marginTopClassname="-mt-8 md:-mt-16"
            />
          </div>

          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="-mb-12">
              <div className="flex w-full items-center justify-center pb-1">
                <Image src={LogoPic} width={250} height={175} alt="Logo" />
              </div>
            </div>
            <h1 className="h1 font-cabinet-grotesk text-white mb-2" data-aos="fade-up">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white text-opacity-80 mb-8" data-aos="fade-up" data-aos-delay="100">
              {description}
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}