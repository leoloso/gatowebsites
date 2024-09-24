import Logo from './logo'
import MobileMenu from './mobile-menu'
import PurchasePROPluginButton from '../purchase-pro-plugin-button'
import Search from './search'
import ThemeToggle from '@/components/ui/theme-toggle'
import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import AppConfig from '@/app/app.config'
import AppSettings from '@/app/app.settings'
import TryPROPluginButton from '../try-pro-plugin-button'
// import DownloadFreePluginButton from '../download-free-button'

export default function Header({
  enableLightDarkThemeModeToggle = false,
}: {
  enableLightDarkThemeModeToggle?: boolean
}) {
  return (
    <header className="fixed w-full z-50">
      <div
        className={`absolute inset-0 bg-opacity-70 backdrop-blur -z-10 ${AppSettings.enableLightDarkThemeMode && enableLightDarkThemeModeToggle ? 'bg-white border-slate-200 border-b dark:bg-transparent dark:border-slate-800' : 'bg-transparent border-slate-800'}`}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              {/* <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.features}`}>Features</Link>
              </li> */}
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.extensions}`}>Extensions</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.demoPosts}`}>Demos</Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Docs">
                {/* 2nd level: hover */}
                <li>
                  <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.guides}`}>Guides</Link>
                </li>
                <li>
                  <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</Link>
                </li>
                <li>
                  <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.queryLibrary}`}>Queries library</Link>
                </li>
                <li>
                  <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.tutorial}`}>Schema tutorial</Link>
                </li>
              </Dropdown>
              {/* <li>
                <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-3 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.blog}`}>Blog</Link>
              </li> */}
            </ul>
          </nav>

          <ul className="hidden md:flex md:grow flex-1 flex justify-end items-center">
            {/* Lights switch */}
            {AppSettings.enableLightDarkThemeMode && enableLightDarkThemeModeToggle && (
              <li className="ml-2">
                <ThemeToggle />
              </li>
            )}
            <li className="ml-1">
              <Search
                showSearchInput={false}
                enableLightDarkThemeModeToggle={enableLightDarkThemeModeToggle}
              />
            </li>
            <li className="ml-2 hidden lg:block">
              <TryPROPluginButton />
            </li>
            <li className="ml-2 hidden lg:block">
              <PurchasePROPluginButton />
            </li>
          </ul>

          <MobileMenu
            enableLightDarkThemeModeToggle={enableLightDarkThemeModeToggle}
          />

        </div>
      </div>
    </header>
  )
}
