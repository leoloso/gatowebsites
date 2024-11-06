'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import AppSettings from '@/app/app.settings'
import BlackFridayBanner1 from '@/components/ui/campaigns/black-friday-banner-1'
import BlackFridayBanner2 from '@/components/ui/campaigns/black-friday-banner-2'
import BlackFridayBanner3 from '@/components/ui/campaigns/black-friday-banner-3'
import BlackFridayBanner4 from '@/components/ui/campaigns/black-friday-banner-4'

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
      
      <BlackFridayBanner1 />
      <BlackFridayBanner2 />
      <BlackFridayBanner3 />
      <BlackFridayBanner4 />
      
      <main className="grow">

        {children}

      </main>

      <Footer />
    </div>
  )
}
