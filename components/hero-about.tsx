import Image from 'next/image'
import AboutIllustration from '@/public/assets/theme/about-illustration.svg'
import Icon from '@/public/assets/theme/about-icon.png'
import StunningBackground from './stunning-background'
import Thumb from '@/components/thumb'
import CircledEqualsSvgImage from '@/public/assets/theme/equals-circled.svg'
import Logo from '@/public/assets/GatoGraphQL-logo-suki-text-square.png'
import WordPressLogo from '@/public/assets/external-logos/wordpress-logo.svg'
import GatoGraphQLLogo from '@/public/assets/external-logos/graphql-logo.svg'

export default function HeroAbout({
  includeAnimation = true,
  includeThumbnail = false
}: {
  includeAnimation?: boolean,
  includeThumbnail?: boolean,
}) {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">

          {/* Hero content */}
          <div className="text-center">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">The folks behind the product</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Building the most powerful GraphQL server for WordPress</h1>
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
                <Thumb
                  bgClassname="h-full bg-gradient-to-tr from-slate-900 to-blue-900 rounded border-transparent rounded-2xl shadow-2xl"
                  title="Gato GraphQL"
                  targetImageSources={[WordPressLogo, GatoGraphQLLogo]}
                  reverseItems={true}
                  logoImage={Logo}
                  svgImage={CircledEqualsSvgImage}
                  svgClassname="px-8 opacity-70"
                  isLandscape={true}
                />
              </div>
            )}

          </div>

        </div>
      </div>

    </section>
  )
}