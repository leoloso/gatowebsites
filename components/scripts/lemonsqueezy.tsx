import AppConfig from '@/app/app.config'

export default function LemonSqueezyScriptProvider() {
  return (
    <>
      {/* @see https://docs.lemonsqueezy.com/help/lemonjs/what-is-lemonjs#loading-lemon-js-in-next-js */}
      <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
      {/* <Script
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="afterInteractive"
      ></Script> */}

      {/* LemonSqueezy affiliate tracking script */}
      {/* @see: https://docs.lemonsqueezy.com/guides/tutorials/affiliate-landing-pages */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <script dangerouslySetInnerHTML={{__html: `
            window.lemonSqueezyAffiliateConfig = {
              store: "${AppConfig.services.shop.affiliateTrackingShopSlug}",
              trackOnLoad: false
            };
          `}} />
          <script src="https://lmsqueezy.com/affiliate.js" defer></script>
        </>
      )}

    </>
  )
}
