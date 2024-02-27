'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import Theme from '../(docs)/theme-provider'
import AppProvider from '../(docs)/app-provider'

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
    <div className={`text-slate-800 bg-white dark:bg-transparent dark:text-slate-200`}>
      <Theme>
        <AppProvider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header enableLightDarkVersionToggleMode={true} />
            
            <main className="grow">

              {children}

            </main>

            <Footer />
          </div>
        </AppProvider>
      </Theme>
    </div>
  )
}
