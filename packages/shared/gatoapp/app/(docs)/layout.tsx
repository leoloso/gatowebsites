import 'gatoapp/app/(docs)/css/style.css'

import { Nothing_You_Could_Do } from 'next/font/google'
import Sidebar from 'gatoapp/components/ui/docs/sidebar'
import Header from 'gatoapp/components/ui/header'
import StunningBackground from 'gatoapp/components/stunning-background'
import React from 'react'

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${nycd.variable} text-slate-800 font-[350] bg-white dark:bg-transparent dark:text-slate-200`}>
      <div className="flex flex-col min-h-screen overflow-hidden">

        <Header />

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
                  <div className="pt-24 md:pt-28 md:pl-6 lg:pl-12">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  )
}
