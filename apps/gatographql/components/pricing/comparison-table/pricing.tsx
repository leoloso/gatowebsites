import AppConfig from "@/app/app.config"
import PricingTier from "./pricing-tier"
import PricingGroup from "./pricing-group"
import PricingItem from "./pricing-item"
import { getShopURL, getShopAnchorClassname } from "gatoapp/utils/shop/shop"
import { allExtensions } from "@/.contentlayer/generated"
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'

export default function ComparisonTablePricing() {
  const extensions = allExtensions.sort(sortByOrderAndTitle)

  return (
    <div className="relative">
      {/* Blurred shape */}
      <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-5 xl:-mx-6 text-sm [&>div:nth-of-type(-n+5)]:py-6 [&>div:nth-last-of-type(-n+5)]:pb-6 max-md:[&>div:nth-last-of-type(-n+5)]:mb-8 max-md:[&>div:nth-of-type(-n+5):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+5)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(5)]:rounded-tr-3xl md:[&>div:nth-last-of-type(4)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(5n+1)]:bg-transparent [&>div:nth-of-type(-n+5)]:bg-slate-900/95 [&>div]:-z-100 [&>div:nth-of-type(-n+5):nth-of-type(5n+4)]:-z40 max-md:[&>div:nth-of-type(5n+6)]:hidden max-md:[&>div:nth-of-type(5n+2)]:order-1 max-md:[&>div:nth-of-type(5n+3)]:order-2 max-md:[&>div:nth-of-type(5n+4)]:order-3 max-md:[&>div:nth-of-type(5n+5)]:order-4 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(5n+4)]:sticky [&>div:nth-of-type(5n+4)]:-z-40 before:[&>div:nth-of-type(5n+4)]:absolute before:[&>div:nth-of-type(5n+4)]:-inset-px before:[&>div:nth-of-type(5n+4)]:rounded-[inherit] before:[&>div:nth-of-type(5n+4)]:border-x-2 [&>div:nth-of-type(5n+3)]:sticky [&>div:nth-of-type(5n+3)]:-z-50 before:[&>div:nth-of-type(5n+3)]:absolute before:[&>div:nth-of-type(5n+3)]:-inset-px before:[&>div:nth-of-type(5n+3)]:rounded-[inherit] before:[&>div:nth-of-type(5n+3)]:border-x-2 [&>div:nth-of-type(5n+5)]:sticky [&>div:nth-of-type(5n+5)]:-z-50 before:[&>div:nth-of-type(5n+5)]:absolute before:[&>div:nth-of-type(5n+5)]:-inset-px before:[&>div:nth-of-type(5n+5)]:rounded-[inherit] before:[&>div:nth-of-type(5n+5)]:border-x-2 before:[&>div:nth-of-type(4)]:border-t-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-of-type(5)]:border-t-2 before:[&>div:nth-last-of-type(1)]:border-b-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-last-of-type(3)]:border-b-2 before:[&>div:nth-of-type(5n+3)]:border-slate-700 before:[&>div:nth-of-type(5n+3)]:-z-50 before:[&>div:nth-of-type(5n+3)]:pointer-events-none before:[&>div:nth-of-type(5n+5)]:border-slate-700 before:[&>div:nth-of-type(5n+5)]:-z-50 before:[&>div:nth-of-type(5n+5)]:pointer-events-none before:[&>div:nth-of-type(5n+4)]:border-purple-500 before:[&>div:nth-of-type(5n+4)]:-z-40 before:[&>div:nth-of-type(5n+4)]:pointer-events-none [&>div:nth-of-type(-n+5):nth-of-type(5n+1)]:bg-slate-900/95 [&>div:nth-of-type(-n+5):nth-of-type(5n+1)]:z-0 [&>div:nth-of-type(-n+5):nth-of-type(5n+2)]:z-10 [&>div:nth-of-type(-n+5):nth-of-type(5n+3)]:z-10 [&>div:nth-of-type(-n+5):nth-of-type(5n+4)]:z-10 md:[&>div:nth-of-type(-n+5):nth-of-type(5n+4)]:z-20 [&>div:nth-of-type(-n+5):nth-of-type(5n+5)]:z-10">
        {/* Pricing toggle */}
        <div className="px-6 flex flex-col justify-end sticky top-16 hidden md:block">
          &nbsp;
        </div>
        {/* Personal price */}
        <PricingTier
          name='Personal'
          price={AppConfig.shop.prices.bundles.allExtensions.tier1.yearly}
          description='5 domains'
          buttonLabel="Purchase"
          buttonURL={getShopURL(AppConfig.urls.shopProducts.bundles.allExtensions.tier1.yearly)}
          buttonClassname={getShopAnchorClassname()}
        />
        {/* Organization price */}
        <PricingTier
          name='Organization'
          price={AppConfig.shop.prices.bundles.allExtensions.tier2.yearly}
          description='25 domains'
          buttonLabel="Purchase"
          buttonURL={getShopURL(AppConfig.urls.shopProducts.bundles.allExtensions.tier2.yearly)}
          buttonClassname={getShopAnchorClassname()}
        />
        {/* Professional price */}
        <PricingTier
          name='Professional'
          price={AppConfig.shop.prices.bundles.allExtensions.tier3.yearly}
          description='100 domains'
          buttonLabel="Purchase"
          buttonURL={getShopURL(AppConfig.urls.shopProducts.bundles.allExtensions.tier3.yearly)}
          buttonClassname={getShopAnchorClassname()}
          highlight={true}
        />
        {/* Agency price */}
        <PricingTier
          name='Agency'
          price={AppConfig.shop.prices.bundles.allExtensions.tier4.yearly}
          description='500 domains'
          buttonLabel="Purchase"
          buttonURL={getShopURL(AppConfig.urls.shopProducts.bundles.allExtensions.tier4.yearly)}
          buttonClassname={getShopAnchorClassname()}
        />
        
        {/* # Usage */}
        <PricingGroup columns={4} name="Usage" />
        {/* Domains */}
        <PricingItem
          columns={4}
          name="Domains"
          ticks={[true, true, true, true]}
          contents={[
            <span>5 <span className="md:hidden">Domains</span></span>,
            <span>25 <span className="md:hidden">Domain</span></span>,
            <span>100 <span className="md:hidden">Domains</span></span>,
            <span>500 <span className="md:hidden">Domains</span></span>,
          ]}
        />
        
        {/* # Extensions */}
        <PricingGroup columns={4} name="Extensions" />
        {/* Extensions */}
        {extensions.map((extension, index) => (
          <PricingItem
            columns={4}
            name={extension.title}
            ticks={[true, true, true, true]}
            contents={[
              <span><span className="md:hidden">{extension.title}</span></span>,
              <span><span className="md:hidden">{extension.title}</span></span>,
              <span><span className="md:hidden">{extension.title}</span></span>,
              <span><span className="md:hidden">{extension.title}</span></span>,
            ]}
            key={index}
          />
        ))}
        
        {/* # Support */}
        <PricingGroup columns={4} name="Support" />
        {/* Premium Support */}
        <PricingItem
          columns={4}
          name="Premium Support"
          ticks={[true, true, true, true]}
          contents={[
            <span><span className="md:hidden">Premium Support</span></span>,
            <span><span className="md:hidden">Premium Support</span></span>,
            <span><span className="md:hidden">Premium Support</span></span>,
            <span><span className="md:hidden">Premium Support</span></span>,
          ]}
        />
      </div>
      <p className="text-sm text-slate-500 pt-4 pb-4">
        <strong>The license is for 1 year (renewable every year), that includes support and access to all product updates. Prices are in USD.</strong>
      </p>
    </div>
  )
}