// 'use client'

// import { useSearchParams } from 'next/navigation';
import Thumb from '@/components/thumbnails/thumb'
import Logo from '@/public/assets/GatoGraphQL-logo-suki-text-square.png'
import Image from 'next/image'

export default function ExtensionCoverItem({
  title,
  thumbClassname,
}: {
  thumbClassname?: string,
  title: string,
}) {
  // const searchParams = useSearchParams();
  // const title = searchParams.get('title') || '(Undefined title / Please pass param ?title=...)'
  const logoClassname = 'flex items-center justify-center h-full'
  return (
    <header
      className='aspect-video'
    >
      <Thumb
        // paddingClassname={paddingClassname}
        bgClassname='bg-gradient-to-tr from-slate-900 to-blue-900'
        // extraThumbClassname={extraThumbClassname}
        numberParticles={20}
      >
        <div className={thumbClassname}>
          <h1 className='h1 text-center leading-[5rem] text-[4.5rem] mb-16 max-w-5xl'>
            {title}
          </h1>
          <div className={logoClassname}>
            <Image src={Logo} alt="Gato GraphQL logo" width={375} height={375} />
          </div>
        </div>
      </Thumb>
    </header>
  )
}
