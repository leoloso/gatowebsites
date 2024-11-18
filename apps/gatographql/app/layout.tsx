import './css/style.css'

import { Inter } from 'next/font/google'
import AppSettings from '@gato/app/app.settings'
import PlausibleProvider from 'next-plausible'
import LemonSqueezyScriptProvider from '@gato/components/scripts/lemonsqueezy'
import { DOMAIN } from '@gato/data/env/domain'
import InitializeShop from '@gato/components/shop/initialize-shop'
import AppConfig from '@/app/app.config'
import AppConfigProvider from '@gato/app/appconfig-provider'
import AppSettingsProvider from '@gato/app/appsettings-provider'
import AppContentProvider from '@gato/app/appcontent-provider'
import { allBlogPosts, allDemoPosts, allDocs, allDocTopics, allPages, allSnippets } from '@/.contentlayer/generated'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Gato GraphQL',
  description: 'Powerful and flexible GraphQL server for WordPress',
  
  // metadataBase: first check if env var from Netlify is defined. If not, from Vercel.
  // If not, fallback to default (explicit so that there's no warning in console)
  metadataBase: new URL(DOMAIN)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}{/* Comment: Added for the Docs template */}
      <head>
        {/* @see https://github.com/4lejandrito/next-plausible?tab=readme-ov-file#usage */}
        <PlausibleProvider domain="gatographql.com" />

        <LemonSqueezyScriptProvider
          affiliateTrackingShopSlug={AppConfig.services.shop.affiliateTrackingShopSlug}
        />
        <InitializeShop />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight ${AppSettings.enableLightDarkThemeMode ? '' : 'dark' }`}>
        <AppConfigProvider
          meta={{
            name: AppConfig.meta.name,
          }}
          emails={{
            info: AppConfig.emails.info,
          }}
          domains={{
            cdn: AppConfig.domains.cdn,
          }}
          urls={{
            instawpSandboxDemo: AppConfig.urls.instawpSandboxDemo
          }}
        >
          <AppSettingsProvider
            campaigns={{
              enableBlackFriday: true,
            }}
          >
            <AppContentProvider
              allBlogPosts={allBlogPosts}
              allDemoPosts={allDemoPosts}
              allDocs={allDocs}
              allDocTopics={allDocTopics}
              allPages={allPages}
              allSnippets={allSnippets}
            >
              {children}
            </AppContentProvider>
          </AppSettingsProvider>
        </AppConfigProvider>
      </body>
    </html>
  )
}
