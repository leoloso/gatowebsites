import 'gatoapp/app/css/style.css'

import { Inter } from 'next/font/google'
import { DOMAIN } from 'gatoapp/data/env/domain'
import RootLayoutHeader from 'gatoapp/app/layout-header'
import AppConfig from '@/app/app.config'
import AppConfigProvider from 'gatoapp/app/appconfig-provider'
import AppSettings from '@/app/app.settings'
import AppSettingsProvider from 'gatoapp/app/appsettings-provider'
import AppStyleProvider from 'gatoapp/app/appstyle-provider'
import AppContentProvider from 'gatoapp/app/appcontent-provider'
import { allBlogPosts, allDemoPosts, allDocs, allDocTopics, allFeatures, allPages, allSnippets } from '@/.contentlayer/generated'
import { LightDarkColorTheme } from 'gatoapp/utils/style/light-dark-theme-mode'
import { getBackgroundColorStyle } from 'gatoapp/utils/style/light-dark-theme-mode'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Gato Plugins',
  description: 'A collection of super useful plugins for WordPress',
  
  // metadataBase: first check if env var from Netlify is defined. If not, from Vercel.
  // If not, fallback to default (explicit so that there's no warning in console)
  metadataBase: new URL(DOMAIN)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const appConfig = {
    meta: {
      name: AppConfig.meta.name,
    },
    emails: {
      info: AppConfig.emails.info,
    },
    domains: {
      cdn: AppConfig.domains.cdn,
    },
    urls: {
      instawpSandboxDemo: AppConfig.urls.instawpSandboxDemo
    },
    services: {
      newsletter: {
        formActionURL: AppConfig.services.newsletter.formActionURL,
        emailFieldName: AppConfig.services.newsletter.emailFieldName,
      }
    },
  }
  const appSettings = {
    campaigns: {
      enableBlackFriday: AppSettings.campaigns.enableBlackFriday,
    }
  }
  const appStyle = {
    lightDarkColorTheme: LightDarkColorTheme.Light
  }
  return (
    <AppConfigProvider config={appConfig}>
      <AppSettingsProvider settings={appSettings}>
        <AppStyleProvider style={appStyle}>
          <AppContentProvider
            allBlogPosts={allBlogPosts}
            allDemoPosts={allDemoPosts}
            allDocs={allDocs}
            allDocTopics={allDocTopics}
            allFeatures={allFeatures}
            allPages={allPages}
            allSnippets={allSnippets}
          >
            <html lang="en" className="scroll-smooth" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}{/* Comment: Added for the Docs template */}
              <RootLayoutHeader
                analyticsDomain={AppConfig.services.analytics.domain}
                shopAffiliateTrackingShopSlug={AppConfig.services.shop.affiliateTrackingShopSlug}
              />
              <body className={`${inter.variable} font-inter antialiased bg-slate-200 text-slate-800 tracking-tight ${getBackgroundColorStyle(appStyle.lightDarkColorTheme)}`}>
                {children}
              </body>
            </html>
          </AppContentProvider>
        </AppStyleProvider>
      </AppSettingsProvider>
    </AppConfigProvider>
  )
}
