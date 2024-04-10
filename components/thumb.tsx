
import Logo from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'
import Particles from '@/components/particles'
// import Illustration from '@/public/assets/theme/cta-illustration.svg'
import PlusImage from '@/public/assets/theme/plus.svg'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx';

export default function Thumb({
  title,
  targetImageSources,
  paddingClassname = "py-10 px-8 md:py-16 md:px-12",
  bgClassname = "bg-gradient-to-tr from-slate-900 to-violet-900",
  isLandscape = false,
  svgImage,
  logoImage,
  reverseItems = false,
  svgClassname = "mx-2 my-4",
  numberParticles = 10,
}: {
  title: string,
  targetImageSources: Array<string>,
  paddingClassname?: string,
  bgClassname?: string,
  isLandscape?: boolean,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
  reverseItems?: boolean,
  svgClassname?: string,
  numberParticles?: number,
}) {
  return (
    <div
      className={clsx("relative h-full z-20 overflow-hidden", bgClassname, paddingClassname)}
      // data-aos="zoom-out"
    >
      <Particles className="absolute inset-0 -z-10" quantity={numberParticles} />
      <div className="flex items-center justify-center h-full">
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10" aria-hidden="true">
          <Image src={Illustration} className="max-w-none" alt="Illustration" />
        </div> */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none -z-10 blur-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
            <defs>
              <filter id="hi-a" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
              <filter id="hi-b" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
              <filter id="hi-c" width="159.9%" height="145%" x="-29.9%" y="-22.5%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                fill="#6D28D9"
                fillOpacity=".72"
                d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                filter="url(#hi-a)"
                transform="translate(0 -605)"
              />
              <path
                fill="#67E8F9"
                fillOpacity=".64"
                d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                filter="url(#hi-b)"
                transform="translate(0 -605)"
              />
              <path
                fill="#F472B6"
                fillOpacity=".8"
                d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
                filter="url(#hi-c)"
                transform="translate(0 -605)"
              />
            </g>
          </svg>
        </div>
        <div className={clsx("flex items-center justify-center", !isLandscape && "flex-col", isLandscape && reverseItems && "flex-row-reverse", !isLandscape && reverseItems && "flex-col-reverse", isLandscape && "aspect-video")}>
          <div className={clsx(!isLandscape && "mb-2 md:mb-4", isLandscape &&  'mx-2')}>
            <Image src={logoImage || Logo} alt={title} width={250} height={175} />
          </div>
          <div className={svgClassname}>
            <Image src={svgImage || PlusImage} width={30} height={30} alt="plus image" />
          </div>
          <div className={clsx("flex items-center justify-center", !isLandscape &&  "gap-6 sm:gap-12 mt-2 md:mt-4", isLandscape &&  "gap-3 sm:gap-6  flex-col mx-2")}>
            {targetImageSources.map((targetImageSrc, index) => (
              <div key={index}>
                <Image src={targetImageSrc} alt="Target Image" width={175} height={175} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
