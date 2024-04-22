import Logo from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'
import Image from 'next/image'
import Thumb from './thumb';

export default function WithTitleThumb({
  title,
  paddingClassname,
  bgClassname,
  titleClassname = "h2",
  logoClassname,
  thumbClassname = "text-center",
  extraThumbClassname,
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
        <h2 className={titleClassname}>
          {title}
        </h2>
      </div>
    </Thumb>
  )
}
