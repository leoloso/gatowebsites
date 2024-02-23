'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import PurchaseButton from '../purchase-button'
import AppConfig from '@/app/app.config'
import Search from './search'
import ThemeToggle from './theme-toggle'

export default function MobileMenu({
  enableLightDarkVersionToggleMode = false,
}: {
  enableLightDarkVersionToggleMode?: boolean
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden flex items-center ml-4">
      {/* Lights switch */}
      {enableLightDarkVersionToggleMode && (
        <ThemeToggle />
      )}

      {/* Search button */}
      <Search
        showSearchInput={false}
        enableLightDarkVersionToggleMode={enableLightDarkVersionToggleMode}
      />

      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`btn hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-5 h-5 fill-current text-slate-400 hover:text-slate-600 dark:text-slate-300 dark:hover:text-white transition duration-150 ease-in-out" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect y="2" width="20" height="2" rx="1" />
          <rect y="9" width="20" height="2" rx="1" />
          <rect y="16" width="20" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="border border-transparent [background:linear-gradient(theme(colors.blue.200),_theme(colors.blue.200))_padding-box,_conic-gradient(theme(colors.blue.100),_theme(colors.blue.400)_25%,_theme(colors.blue.400)_75%,_theme(colors.blue.100)_100%)_border-box] dark:[background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5">
          <li>
            <Link className="flex font-medium text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="flex font-medium text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.extensions}`}>Extensions</Link>
          </li>
          <li>
            <Link className="flex font-medium text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.videoPosts}`}>Videos</Link>
          </li>
          <li className="py-2 my-2 border-t border-b border-gray-500 dark:border-gray-700">
            <span className="flex font-medium text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5">Documentation</span>
            <ul className="pl-4">
              <li>
                <Link className="flex font-medium text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.docs.guides}`}>Guides</Link>
              </li>
              <li>
                <Link className="flex font-medium text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</Link>
              </li>
            </ul>
          </li>
          <li>
            <PurchaseButton />
          </li>
        </ul>
      </nav>
    </div>
  )
}
