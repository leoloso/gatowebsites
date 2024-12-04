import { useAppComponentProvider } from 'gatoapp/app/appcomponent-provider'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'
import Image from 'next/image'
import Illustration from 'gatoapp/public/images/layout/lightmode/footer-illustration.svg'
import clsx from 'clsx'

export default function Footer() {
  const AppComponent = useAppComponentProvider()
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <footer className='relative'>
      { !isDarkColorThemeMode && (
        <>
          {/* Bg */}
          <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

          {/* Illustration */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <Image className="max-w-none" src={Illustration} alt="Illustration" />
          </div>
        </>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Blocks */}
        <div className={clsx("grid sm:grid-cols-12 gap-8 py-8 md:py-12", !isDarkColorThemeMode && "border-t border-blue-500")}>
          {AppComponent.footer.menu}
        </div>

      </div>
    </footer>
  )
}
