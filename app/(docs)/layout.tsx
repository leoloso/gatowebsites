import './css/style.css'

import { Nothing_You_Could_Do } from 'next/font/google'
import Theme from './theme-provider'
import AppProvider from './app-provider'
// import Image from 'next/image'
// import Illustration from '@/public/assets/theme/hero-illustration.svg'
import Sidebar from '@/components/ui/docs/sidebar'
import Header from '@/components/ui/header'
import StunningBackground from '@/components/stunning-background'

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Documentation - Gato GraphQL',
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
          <div className="flex flex-col min-h-screen overflow-hidden">

            <Header enableLightDarkThemeModeToggle={true} />

            {/*  Page content */}
            <main className="grow">
              <section className="relative">
                
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
                  <Image className="max-w-none" src={Illustration} priority alt="Page illustration" aria-hidden="true" />
                </div> */}

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
        </AppProvider>
      </Theme>
    </div>
  )
}
