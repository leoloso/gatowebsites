import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Search from './search'
import ThemeToggle from './theme-toggle'
import Dropdown from './../utils/dropdown'
import PurchaseButton from '../purchase-button'

interface HeaderProps {
  documentation?: boolean
}

export default function Header({
  documentation = false,
}: HeaderProps) {
  return (
    <header className="fixed w-full z-30">
      <div
        className="absolute inset-0 bg-white bg-opacity-70 border-b border-slate-200 backdrop-blur -z-10 dark:bg-transparent dark:border-slate-800"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              { ! documentation && (
                <>
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
                </>
              )}
              { documentation && (
                <>
                  <li>
                    <Search />
                  </li>
                  {/* Lights switch */}
                  <li>
                    <ThemeToggle />
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <li className="ml-6">
              <PurchaseButton />
            </li>
          </ul>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
