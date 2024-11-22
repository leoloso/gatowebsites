import Script from 'next/script'

export default function LemonSqueezyScriptProvider({
  affiliateTrackingShopSlug
}: {
  affiliateTrackingShopSlug: string
}) {
  return (
    <>
      {/* @see https://docs.lemonsqueezy.com/help/lemonjs/what-is-lemonjs#loading-lemon-js-in-next-js */}
      <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
      {/* <Script
        id="lemonsqueezy-lemon"
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="afterInteractive"
      /> */}

      {/* LemonSqueezy affiliate tracking script */}
      {/* @see: https://docs.lemonsqueezy.com/guides/tutorials/affiliate-landing-pages */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            id="lemonsqueezy-affiliates-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{__html: `
              window.lemonSqueezyAffiliateConfig = {
                store: "${affiliateTrackingShopSlug}"
              };
            `}}
          />
          <Script
            id="lemonsqueezy-affiliates"
            src="https://lmsqueezy.com/affiliate.js"
            strategy="afterInteractive"
          />
        </>
      )}

    </>
  )
}
