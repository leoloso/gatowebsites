'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@gato/components/src/ui/footer'
import Header from '@gato/components/src/ui/header'
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
      <Header />
      
      <main className="grow">

        {children}

      </main>

      <Footer />
    </div>
  )
}
