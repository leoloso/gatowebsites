'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import AppSettings from '@/app/app.settings'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div className={`flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip ${AppSettings.enableLightDarkThemeMode ? 'dark' : '' }`}>
      
      <main className="grow">

        {children}

      </main>

    </div>
  )
}