import { getShopURL, getShopAnchorClassname } from "gatoapp/utils/shop/shop"
import { Plugin } from "@/.contentlayer/generated"
import PricingTier from "gatoapp/components/pricing/product-dropdown/pricing-tier";
import AppConfig from "@/app/app.config"

export default function PluginPricing({
  plugin,
}: {
  plugin: Plugin,
}) {
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <div className="relative">
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
        {/* Pricing table 1 */}
        <PricingTier
          tierName='Personal'
          productName={ plugin.title }
          price={ plugin.prices.tier1.yearly }
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier1 }
          buttonURL={ getShopURL(isProd ? plugin.shopURLs.tier1.yearly : plugin.shopURLs.dev) }
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ "text-blue-300" }
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          productName={ plugin.title }
          price={ plugin.prices.tier2.yearly }
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier2 }
          buttonURL={ getShopURL(isProd ? plugin.shopURLs.tier2.yearly : plugin.shopURLs.dev) }
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ "text-blue-300" }
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          productName={ plugin.title }
          price={ plugin.prices.tier3.yearly }
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier3 }
          buttonURL={ getShopURL(isProd ? plugin.shopURLs.tier3.yearly : plugin.shopURLs.dev) }
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ "text-blue-300" }
          highlight={true}
        />
        {/* Pricing table 4 */}
        <PricingTier
          tierName='Agency'
          productName={ plugin.title }
          price={ plugin.prices.tier4.yearly }
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier4 }
          buttonURL={ getShopURL(isProd ? plugin.shopURLs.tier4.yearly : plugin.shopURLs.dev) }
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ "text-blue-300" }
        />
      </div>
      <p className="text-sm text-gray-300 pt-4 pb-4 font-bold text-center">
        The license is for 1 year (renewable every year). Prices are in USD.
      </p>
    </div>
  );
}