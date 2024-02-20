'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Link from 'next/link'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Dropdown from '@/components/utils/dropdown'

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
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header>
        <nav className="hidden md:flex md:grow">
          {/* Desktop menu links */}
          <ul className="flex grow justify-center flex-wrap items-center">
            <li>
              <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/features">Features</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
            </li>
            {/* 1st level: hover */}
            <Dropdown title="Documentation">
              {/* 2nd level: hover */}
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/guides">How to guides</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/docs">Reference docs</Link>
              </li>
            </Dropdown>
          </ul>
        </nav>
      </Header>
      
      <main className="grow">

        {children}

      </main>

      <Footer />
    </div>
  )
}
