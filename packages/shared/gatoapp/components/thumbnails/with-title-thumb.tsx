import Logo from 'gatoapp/public/assets/Gato-logo-suki-rectangular.png'
import Image from 'next/image'
import Thumb from './thumb';
import clsx from 'clsx';

export default function WithTitleThumb({
  leading,
  title,
  paddingClassname,
  bgClassname,
  titleClassname = "h2",
  leadingClassname = "h4",
  titleAOS="zoom-out",
  logoClassname,
  thumbClassname = "flex flex-col items-center justify-center",
  extraThumbClassname,
  numberParticles,
}: {
  leading?: string,
  title: string,
  paddingClassname?: string,
  bgClassname?: string,
  titleClassname?: string,
  leadingClassname?: string,
  titleAOS?: string,
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
        {leading && (
          <h4 className={clsx('text-center', leadingClassname)} data-aos={titleAOS}>
            {leading}
          </h4>
        )}
        <h2 className={clsx('text-center', titleClassname)} data-aos={titleAOS}>
          {title}
        </h2>
      </div>
    </Thumb>
  )
}
