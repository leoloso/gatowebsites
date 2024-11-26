'use client'

import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from 'gatoapp/components/ui/footer'
import Header from 'gatoapp/components/ui/header'

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
    <div className={`flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip`}>
      <Header />
      
      <main className="grow">

          {children}

      </main>
      <div className="bg-purple-500 dark:bg-transparent">
        <Footer />
      </div>
    </div>
  )
}
