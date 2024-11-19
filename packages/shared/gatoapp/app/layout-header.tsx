import PlausibleProvider from 'next-plausible'
import LemonSqueezyScriptProvider from 'gatoapp/components/scripts/lemonsqueezy'
import InitializeShop from 'gatoapp/components/shop/initialize-shop'
import React from 'react'

export default function RootLayoutHeader({
  analyticsDomain,
  shopAffiliateTrackingShopSlug,
}: {
  analyticsDomain: string
  shopAffiliateTrackingShopSlug: string,
}) {
  return (
    <head>
      {/* @see https://github.com/4lejandrito/next-plausible?tab=readme-ov-file#usage */}
      <PlausibleProvider domain={analyticsDomain} />

      <LemonSqueezyScriptProvider
        affiliateTrackingShopSlug={shopAffiliateTrackingShopSlug}
      />
      <InitializeShop />
    </head>
  )
}
