import Logo from './logo'
import MobileMenu from './mobile-menu'
import PurchaseButton from '../purchase-button'
import Search from './search'
import ThemeToggle from '@/components/ui/theme-toggle'
import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import AppConfig from '@/app/app.config'

export default function Header({
  enableLightDarkVersionToggleMode = false,
}: {
  enableLightDarkVersionToggleMode?: boolean
}) {
  return (
    <header className="fixed w-full z-30">
      <div
        className={`absolute inset-0 bg-opacity-70 backdrop-blur -z-10 ${enableLightDarkVersionToggleMode ? 'bg-white border-slate-200 border-b dark:bg-transparent dark:border-slate-800' : 'bg-transparent border-slate-800'}`}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.extensions}`}>Extensions</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.videoPosts}`}>Videos</Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Documentation">
                {/* 2nd level: hover */}
                <li>
                  <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.guides}`}>Guides</Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          <ul className="hidden md:flex md:grow flex-1 flex justify-end items-center">
            {/* Lights switch */}
            {enableLightDarkVersionToggleMode && (
              <li>
                <ThemeToggle />
              </li>
            )}
            <li className="ml-2">
              <Search
                showSearchInput={false}
                enableLightDarkVersionToggleMode={enableLightDarkVersionToggleMode}
              />
            </li>
            <li className="ml-2">
              <PurchaseButton />
            </li>
          </ul>

          <MobileMenu
            enableLightDarkVersionToggleMode={enableLightDarkVersionToggleMode}
          />

        </div>
      </div>
    </header>
  )
}
