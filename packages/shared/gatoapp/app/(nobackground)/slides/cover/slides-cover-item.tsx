'use client'

import { useSearchParams } from 'next/navigation';
import Thumb from 'gatoapp/components/thumbnails/thumb'
import React from 'react'

export default function SlidesCoverItem({
  logo,
  thumbClassname,
}: {
  logo: React.ReactNode,
  thumbClassname?: string,
}) {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '(Undefined title / Please pass param ?title=...)'
  const logoClassname = 'flex items-center justify-center h-full'
  return (
    <header
      className='aspect-video'
    >
      <Thumb
        bgClassname='bg-gradient-to-tr from-slate-900 to-blue-900'
        numberParticles={20}
      >
        <div className={thumbClassname}>
          <h1 className='h1 text-center leading-[5rem] text-[4.5rem] mb-16 max-w-5xl'>
            {title}
          </h1>
          <div className={logoClassname}>
            {logo}
          </div>
        </div>
      </Thumb>
    </header>
  )
}
