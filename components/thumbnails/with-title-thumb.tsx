import Logo from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'
import Image from 'next/image'
import clsx from 'clsx';
import Thumb from './thumb';

export default function WithTitleThumb({
  title,
  paddingClassname,
  bgClassname,
  isLandscape = false,
  reverseItems = false,
  titleClassname = "mx-2 my-4",
  numberParticles,
}: {
  title: string,
  paddingClassname?: string,
  bgClassname?: string,
  isLandscape?: boolean,
  reverseItems?: boolean,
  titleClassname?: string,
  numberParticles?: number,
}) {
  return (
    <Thumb
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      numberParticles={numberParticles}
    >
      <div className={clsx("flex items-center justify-center", !isLandscape && "flex-col", isLandscape && reverseItems && "flex-row-reverse", !isLandscape && reverseItems && "flex-col-reverse", isLandscape && "aspect-video")}>
        <div className={clsx(!isLandscape && "mb-2 md:mb-4", isLandscape &&  'mx-2')}>
          <Image src={Logo} alt="Gato GraphQL logo" width={250} height={175} />
        </div>
        <h2 className={titleClassname}>
          {title}
        </h2>
      </div>
    </Thumb>
  )
}
