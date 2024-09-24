import Logo from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'
import PlusImage from '@/public/assets/theme/plus.svg'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx';
import Thumb from './thumb';

export default function WithLogoThumb({
  targetImageSources,
  paddingClassname,
  bgClassname,
  extraThumbClassname,
  isLandscape = false,
  svgImage,
  logoImage,
  reverseItems = false,
  svgClassname = "mx-2 my-4",
  numberParticles,
  skipGatoGraphQLLogo=false,
  skipPlusImage=false,
}: {
  targetImageSources: Array<string>,
  paddingClassname?: string,
  bgClassname?: string,
  extraThumbClassname?: string,
  isLandscape?: boolean,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
  reverseItems?: boolean,
  svgClassname?: string,
  numberParticles?: number,
  skipGatoGraphQLLogo?: boolean,
  skipPlusImage?: boolean,
}) {
  return (
    <Thumb
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      numberParticles={numberParticles}
    >
      <div className={clsx("flex items-center justify-center", !isLandscape && "flex-col", isLandscape && reverseItems && "flex-row-reverse", !isLandscape && reverseItems && "flex-col-reverse", isLandscape && "aspect-video")}>
        { !skipGatoGraphQLLogo && (
          <>
            <div className={clsx(!isLandscape && "mb-2 md:mb-4", isLandscape &&  'mx-2')}>
              <Image src={logoImage || Logo} alt="Gato GraphQL logo" width={250} height={175} />
            </div>
            { !skipPlusImage && (
              <div className={svgClassname}>
                <Image src={svgImage || PlusImage} width={30} height={30} alt="Image" />
              </div>
            )}
          </>
        )}
        <div className={clsx("flex items-center justify-center", !isLandscape &&  "gap-6 sm:gap-12 mt-2 md:mt-4", isLandscape &&  "gap-3 sm:gap-6 flex-col mx-2")}>
          {targetImageSources.map((targetImageSrc, index) => (
            <div key={index}>
              <Image src={targetImageSrc} alt="Target Image" width={175} height={175} />
            </div>
          ))}
        </div>
      </div>
    </Thumb>
  )
}
