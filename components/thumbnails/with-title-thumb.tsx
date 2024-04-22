import Logo from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'
import Image from 'next/image'
import Thumb from './thumb';
import clsx from 'clsx';

export default function WithTitleThumb({
  title,
  paddingClassname,
  bgClassname,
  titleClassname = "h2",
  logoClassname,
  thumbClassname = "flex flex-col items-center justify-center",
  extraThumbClassname = 'aspect-video',
  numberParticles,
}: {
  title: string,
  paddingClassname?: string,
  bgClassname?: string,
  titleClassname?: string,
  logoClassname?: string,
  thumbClassname?: string,
  extraThumbClassname?: string,
  numberParticles?: number,
}) {
  return (
    <Thumb
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      numberParticles={numberParticles}
    >
      <div className={thumbClassname}>
        <div className={logoClassname}>
          <Image src={Logo} alt="Gato GraphQL logo" width={250} height={175} />
        </div>
        <h2 className={clsx('text-center', titleClassname)}>
          {title}
        </h2>
      </div>
    </Thumb>
  )
}
