'use client'

import Image, { StaticImageData } from 'next/image'
import AboutIllustration from 'gatoapp/public/assets/theme/darkmode/about-illustration.svg'
import Icon from 'gatoapp/public/assets/theme/about-icon.png'
import StunningBackground from 'gatoapp/components/stunning-background'
import WithLogoThumb from 'gatoapp/components/thumbnails/with-logo-thumb'
import PageHeader from './page-header'
import { style1, style2 } from './thumbnails/thumb'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'

export default function HeroAbout({
  title,
  includeAnimation = true,
  includeThumbnail = false,
  targetImageSources,
  svgImage,
  logoImage,
}: {
  title: string,
  includeAnimation?: boolean,
  includeThumbnail?: boolean,
  targetImageSources: Array<string>,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
}) {
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">

          <PageHeader
            leading="The folks behind the product"
            title={title}
            paddingClassname='pb-6'
          />            

          {/* Hero content */}
          <div className="text-center">
            {/* Rings illustration */}
            {includeAnimation && (
              <div className="inline-flex items-center justify-center relative">
                {/* Particles animation */}
                <div className="absolute inset-0 -z-10" aria-hidden="true">
                  <canvas data-particle-animation data-particle-quantity="10"></canvas>
                </div>
                <div className="inline-flex [mask-image:_radial-gradient(circle_at_bottom,transparent_15%,black_70%)]">
                  <Image src={AboutIllustration} width={446} height={446} alt="About illustration" />
                </div>
                <Image className="absolute mt-[30%] drop-shadow-lg animate-float" src={Icon} width={72} height={72} alt="About icon" />
              </div>
            )}

            {includeThumbnail && (
              <div className="mb-8 aspect-video">
                <WithLogoThumb
                  bgClassname="h-full dark:bg-gradient-to-tr dark:from-slate-900 dark:to-blue-900 rounded border-transparent rounded-2xl shadow-2xl"
                  targetImageSources={targetImageSources}
                  reverseItems={true}
                  logoImage={logoImage}
                  svgImage={svgImage}
                  svgClassname="px-8 opacity-70"
                  isLandscape={true}
                  applyStyle={isDarkColorThemeMode ? style1 : style2}
                />
              </div>
            )}

          </div>

        </div>
      </div>

    </section>
  )
}