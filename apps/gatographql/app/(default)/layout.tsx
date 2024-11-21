import AppComponentProvider from 'gatoapp/app/appcomponent-provider'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-text-rectangular.png'
import LayoutFooterMenu from './layout-footer-menu'
import HeaderMenu from '@/components/menu/header-menu'
import HeaderMobileMenu from '@/components/menu/header-mobile-menu'
import DefaultLayout from 'gatoapp/app/(default)/layout'

export default function AppDefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
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
      <DefaultLayout>
        {children}
      </DefaultLayout>
    </AppComponentProvider>
  )
}
