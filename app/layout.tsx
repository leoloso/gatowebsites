import './css/style.css'

import { Inter } from 'next/font/google'
import AppSettings from '@/app/app.settings'
import PlausibleProvider from 'next-plausible'
import LemonSqueezyScriptProvider from '@/components/scripts/lemonsqueezy'
import { DOMAIN } from '@/utils/domain'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Gato GraphQL',
  description: 'The most powerful GraphQL server for WordPress',
  
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

        <LemonSqueezyScriptProvider />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight ${AppSettings.enableLightDarkThemeMode ? '' : 'dark' }`}>
        {children}
      </body>
    </html>
  )
}
