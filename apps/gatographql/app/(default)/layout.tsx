'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@gato/components/ui/footer'
import Header from '@gato/components/ui/header'
import AppSettings from '@gato/app/app.settings'
import FooterMenu from '@/components/ui/footer-menu'
import FooterLogo from '@gato/components/ui/footer-logo'
import AppComponentProvider from '@gato/app/appcomponent-provider'
import { useAppConfigProvider } from '@gato/app/appconfig-provider'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-text-rectangular.png'

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

  const AppConfig = useAppConfigProvider()

  const footerMenu = (
    <FooterMenu>
      {/* 1st block */}
      <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
        <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
          <div className="mb-4 sm:mb-0">
            {/* <div className="mb-4"> */}
              <FooterLogo />
            {/* </div> */}
            <div className="text-sm text-slate-500">© {AppConfig.meta.name} <span className="text-slate-600">-</span> All rights reserved.</div>
          </div>
          {/* Social links */}
          {/* <ul className="flex">
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                href={AppConfig.urls.githubRepo}
                aria-label="GitHub"
                target="_blank"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </FooterMenu>
  );

  return (
    <div className={`flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip ${AppSettings.enableLightDarkThemeMode ? 'dark' : '' }`}>
      <Header />
      
      <main className="grow">

          {children}

      </main>

      <AppComponentProvider
        footerMenu={footerMenu}
        logoImage={LogoImg}
      >
        <Footer />
      </AppComponentProvider>
    </div>
  )
}
