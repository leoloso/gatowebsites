import Logo from './logo'
import MobileMenu from './mobile-menu'
import PurchaseButton from '../purchase-button'

interface HeaderProps {
  children: React.ReactNode,
  useLightDarkMode?: boolean
}

export default function Header({
  children,
  useLightDarkMode = false,
}: HeaderProps) {
  return (
    <header className="fixed w-full z-30">
      <div
        className={`absolute inset-0 bg-opacity-70 backdrop-blur -z-10 ${useLightDarkMode ? 'bg-white border-slate-200 border-b dark:bg-transparent dark:border-slate-800' : 'bg-transparent border-slate-800'}`}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {children}

          <ul className="hidden md:flex md:grow flex-1 flex justify-end items-center">
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
