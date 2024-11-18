'use client'

import { useState, useRef, useEffect } from 'react'
import Search from './search'
import { usePathname } from 'next/navigation'
import { useAppComponentProvider } from 'gatoapp/app/appcomponent-provider'

export default function HeaderMobile() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const AppComponent = useAppComponentProvider()
  
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

  // Close the mobile menu when the page has loaded,
  // otherwise it hides the page on mobile
  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  return (
    <div className="md:hidden flex items-center ml-4">
      {/* Search button */}
      <Search
        showSearchInput={false}
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
        {AppComponent.header.mobileMenu}
      </nav>
    </div>
  )
}
