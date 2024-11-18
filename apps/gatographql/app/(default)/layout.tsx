'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from 'gatoapp/components/ui/footer'
import Header from 'gatoapp/components/ui/header'
import AppComponentProvider from 'gatoapp/app/appcomponent-provider'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-text-rectangular.png'
import LayoutFooterMenu from './layout-footer-menu'
import HeaderMenu from '@/components/ui/header-menu'
import HeaderMobileMenu from '@/components/ui/header-mobile-menu'

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
    <AppComponentProvider
      footer={{
        menu: <LayoutFooterMenu />,
      }}
      header={{
        logoImage: LogoImg,
        menu: <HeaderMenu />,
        mobileMenu: <HeaderMobileMenu />,
      }}
    >
      {/* @todo Check this is really not needed */}
      {/* <div className={`flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip ${AppSettings.enableLightDarkThemeMode ? 'dark' : '' }`}> */}
      <div className={`flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip`}>
        <Header />
        
        <main className="grow">

            {children}

        </main>
        <Footer />
      </div>
    </AppComponentProvider>
  )
}
