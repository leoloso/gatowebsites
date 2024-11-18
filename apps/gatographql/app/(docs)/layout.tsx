import './css/style.css'

import { Nothing_You_Could_Do } from 'next/font/google'
import Theme from '@gato/app/(docs)/theme-provider'
import AppProvider from '@gato/app/(docs)/app-provider'
import Sidebar from '@gato/components/ui/docs/sidebar'
import Header from '@gato/components/ui/header'
import StunningBackground from '@gato/components/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import LayoutFooterMenu from './layout-footer-menu'
import HeaderMenu from '@/components/ui/header-menu'
import HeaderMobileMenu from '@/components/ui/header-mobile-menu'
import AppComponentProvider from '@gato/app/appcomponent-provider'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-text-rectangular.png'

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

const pageTitle = 'Documentation'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Guides, tutorials, GraphQL queries, and reference docs, to learn how to use Gato GraphQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${nycd.variable} text-slate-800 font-[350] bg-white dark:bg-transparent dark:text-slate-200`}>
      <Theme>
        <AppProvider>
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
            <div className="flex flex-col min-h-screen overflow-hidden">

              <Header enableLightDarkThemeModeToggle={true} />

              {/*  Page content */}
              <main className="grow">
                <section className="relative">
                  
                  <StunningBackground />

                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Main content */}
                    <div>
                      {/* Sidebar */}
                      <Sidebar />

                      {/* Page container */}
                      <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                        <div className="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

            </div>
          </AppComponentProvider>
        </AppProvider>
      </Theme>
    </div>
  )
}
