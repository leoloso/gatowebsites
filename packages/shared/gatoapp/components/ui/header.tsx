'use client'

import Logo from './logo'
import HeaderMobile from './header-mobile'
import Search from './search'
import ThemeToggle from 'gatoapp/components/ui/theme-toggle'
import AppSettings from 'gatoapp/app/app.settings'
import { useAppComponentProvider } from 'gatoapp/app/appcomponent-provider'

export default function Header({
  enableLightDarkThemeModeToggle = false,
}: {
  enableLightDarkThemeModeToggle?: boolean
}) {
  const AppComponent = useAppComponentProvider()
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
            {AppComponent.header.menu}
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
          </ul>

          <HeaderMobile
            enableLightDarkThemeModeToggle={enableLightDarkThemeModeToggle}
          />

        </div>
      </div>
    </header>
  )
}
