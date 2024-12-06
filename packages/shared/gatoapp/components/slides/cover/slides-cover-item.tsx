'use client'

import { useSearchParams } from 'next/navigation';
import Thumb from 'gatoapp/components/thumbnails/thumb'
import React from 'react'
import clsx from 'clsx';
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'

export default function SlidesCoverItem({
  logo,
  thumbClassname,
  bgClassname,
}: {
  logo: React.ReactNode,
  thumbClassname?: string,
  bgClassname?: string,
}) {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '(Undefined title / Please pass param ?title=...)'
  const logoClassname = 'flex items-center justify-center h-full'
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <header
      className='aspect-video'
    >
      <Thumb
        bgClassname={bgClassname || clsx('bg-gradient-to-tr', isDarkColorThemeMode && 'from-slate-900 to-blue-900', !isDarkColorThemeMode && 'from-blue-600 to-cyan-300 text-white')}
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
