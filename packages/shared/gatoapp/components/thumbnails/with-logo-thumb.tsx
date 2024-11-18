import Logo from 'gatoapp/public/assets/Gato-logo-suki-rectangular.png'
import PlusImage from 'gatoapp/public/assets/theme/plus.svg'
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
  skipGatoLogo=false,
  skipPlusImage=false,
  title,
  titleClassname="h1 lg:leading-[5rem] lg:text-[4.5rem] mb-8",
  leadingTitle,
  leadingTitleClassname="h2 lg:leading-[3rem] lg:text-[2.5rem] mb-4",
  extraTitleClassname,
  extraLeadingTitleClassname,
  logoClassname,
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
  skipGatoLogo?: boolean,
  skipPlusImage?: boolean,
  title?: string,
  titleClassname?: string,
  leadingTitle?: string,
  leadingTitleClassname?: string,
  extraTitleClassname?: string,
  extraLeadingTitleClassname?: string,
  logoClassname?: string,
}) {
  return (
    <Thumb
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      numberParticles={numberParticles}
    >
      <div className={clsx(title && "flex items-center justify-center flex-col")}>
        <div>
          { title && (
            <>
              { leadingTitle && (
                <h2 className={clsx("text-center max-w-5xl", leadingTitleClassname, extraLeadingTitleClassname)}>
                  {leadingTitle}
                </h2>
              )}
              <h1 className={clsx("text-center max-w-5xl", titleClassname, extraTitleClassname)}>
                {title}
              </h1>
            </>
          )}
        </div>
      <div className={clsx("flex items-center justify-center", !isLandscape && "flex-col", isLandscape && reverseItems && "flex-row-reverse", !isLandscape && reverseItems && "flex-col-reverse", isLandscape && "aspect-video", logoClassname)}>
        { !skipGatoLogo && (
          <>
            <div className={clsx(!isLandscape && "mb-2 md:mb-4", isLandscape &&  'mx-2')}>
              <Image src={logoImage || Logo} alt="Logo" width={250} height={175} />
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
              <Image src={targetImageSrc} alt="Target Image" width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </Thumb>
  )
}
