import AppComponentProvider from 'gatoapp/app/appcomponent-provider'
import LogoImg from '@/public/assets/GatoPlugins-logo-suki-text-rectangular.webp'
import FooterMenu from '@/components/menu/footer-menu'
import FooterMenuFirstColumn from 'gatoapp/components/menus/footer-menu-1st-column'
import HeaderMenu from '@/components/menu/header-menu'
import HeaderMobileMenu from '@/components/menu/header-mobile-menu'
import DefaultLayout from 'gatoapp/app/(default)/layout'
import Cta from '@/components/cta-newsletter'

export default function AppDefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <AppComponentProvider
      footer={{
        menu: (
          <FooterMenu>
            <FooterMenuFirstColumn />
          </FooterMenu>
        ),
      }}
      header={{
        logoImage: LogoImg,
        menu: <HeaderMenu />,
        mobileMenu: <HeaderMobileMenu />,
      }}
    >
      <DefaultLayout>
        
        {children}

        <Cta />

      </DefaultLayout>
    </AppComponentProvider>
  )
}
