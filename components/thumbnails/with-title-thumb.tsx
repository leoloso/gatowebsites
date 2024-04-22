import Logo from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'
import Image from 'next/image'
import Thumb from './thumb';
import clsx from 'clsx';

export default function WithTitleThumb({
  title,
  paddingClassname,
  bgClassname,
  titleClassname = "h2",
  thumbClassname = "text-center aspect-video",
  extraThumbClassname = "text-center aspect-video",
  numberParticles,
}: {
  title: string,
  paddingClassname?: string,
  bgClassname?: string,
  titleClassname?: string,
  thumbClassname?: string,
  extraThumbClassname?: string,
  numberParticles?: number,
}) {
  return (
    <Thumb
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      numberParticles={numberParticles}
    >
      <div className={clsx(thumbClassname, extraThumbClassname)}>
        <div className='mx-2'>
          <Image src={Logo} alt="Gato GraphQL logo" width={250} height={175} />
        </div>
        <h2 className={titleClassname}>
          {title}
        </h2>
      </div>
    </Thumb>
  )
}
