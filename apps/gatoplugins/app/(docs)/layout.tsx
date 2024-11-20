import AppProvider from 'gatoapp/app/(docs)/app-provider'
import RootLayout from 'gatoapp/app/(docs)/layout'
import { createSEOPageTitle } from '@/utils/content/metadata'
import LayoutFooterMenu from './layout-footer-menu'
import HeaderMenu from '@/components/menu/header-menu'
import HeaderMobileMenu from '@/components/menu/header-mobile-menu'
import AppComponentProvider from 'gatoapp/app/appcomponent-provider'
import LogoImg from '@/public/assets/GatoPlugins-logo-suki-text-rectangular.webp'

const pageTitle = 'Documentation'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Docs to learn how to use all the plugins from Gato Plugins',
}

export default function AppRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <AppComponentProvider
        footer={{
          menu: <LayoutFooterMenu />,
        }}
        header={{
          logoImage: LogoImg,
          menu: <HeaderMenu />,
          mobileMenu: <HeaderMobileMenu />,
        }}
      >
        <RootLayout>
          {children}
        </RootLayout>
      </AppComponentProvider>
    </AppProvider>
  )
}
