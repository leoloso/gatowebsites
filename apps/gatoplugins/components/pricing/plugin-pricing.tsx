"use client";

import { getShopURL, getShopAnchorClassname } from "gatoapp/utils/shop/shop"
import { allPlugins, Plugin } from "@/.contentlayer/generated"
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'

import { useState } from "react";
import PricingTier from "gatoapp/components/pricing/product-dropdown/pricing-tier";
import AppConfig from "@/app/app.config"

export default function PluginDropdownPricing({
  fixedPlugin,
  preselectBundle = false,
}: {
  fixedPlugin?: Plugin,
  preselectBundle?: boolean
}) {
  const plugins = allPlugins.sort(sortByOrderAndTitle)

  const [selectBundle, setSelectBundle] = useState<boolean>(preselectBundle);
  const [selectLTD, setLTD] = useState<boolean>(false);
  const [selectedPluginIndex, setSelectedPluginIndex] = useState<number>(fixedPlugin === undefined ? 0 : plugins.findIndex((ext) => ext.slug === fixedPlugin.slug))

  const aggregatedPluginsPriceTier1Yearly = AppConfig.shop.prices.plugins._shared.tier1.yearly * plugins.length
  const aggregatedPluginsPriceTier2Yearly = AppConfig.shop.prices.plugins._shared.tier2.yearly * plugins.length
  const aggregatedPluginsPriceTier3Yearly = AppConfig.shop.prices.plugins._shared.tier3.yearly * plugins.length
  const aggregatedPluginsPriceTier4Yearly = AppConfig.shop.prices.plugins._shared.tier4.yearly * plugins.length

  const aggregatedPluginsPriceTier1LTD = AppConfig.shop.prices.plugins._shared.tier1.ltd * plugins.length
  const aggregatedPluginsPriceTier2LTD = AppConfig.shop.prices.plugins._shared.tier2.ltd * plugins.length
  const aggregatedPluginsPriceTier3LTD = AppConfig.shop.prices.plugins._shared.tier3.ltd * plugins.length
  const aggregatedPluginsPriceTier4LTD = AppConfig.shop.prices.plugins._shared.tier4.ltd * plugins.length

  const allPluginsBundleName = "“All Plugins” bundle"

  const selectedPlugin = plugins[selectedPluginIndex]

  const isProd = process.env.NODE_ENV === 'production'

  return (
    <div className="relative">
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
        {/* Pricing table 1 */}
        <PricingTier
          tierName='Personal'
          productName={ selectedPlugin.title }
          price={ selectedPlugin.prices.tier1.yearly }
          originalPrice={ selectBundle ? ( selectLTD ? aggregatedPluginsPriceTier1LTD : aggregatedPluginsPriceTier1Yearly ) : undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier1 }
          buttonURL={ getShopURL(selectBundle ? ( selectLTD ? AppConfig.urls.shopProducts.bundles.allPlugins.tier1.ltd : AppConfig.urls.shopProducts.bundles.allPlugins.tier1.yearly ) : ( isProd ? ( selectLTD ? selectedPlugin.shopURLs.tier1.ltd : selectedPlugin.shopURLs.tier1.yearly ) : selectedPlugin.shopURLs.dev ) )}
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ selectBundle ? "text-cyan-300" : "text-blue-300" }
          isLTD={ selectLTD }
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          productName={ selectedPlugin.title }
          price={ selectedPlugin.prices.tier2.yearly }
          originalPrice={ selectBundle ? ( selectLTD ? aggregatedPluginsPriceTier2LTD : aggregatedPluginsPriceTier2Yearly ) : undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier2 }
          buttonURL={ getShopURL(selectBundle ? ( selectLTD ? AppConfig.urls.shopProducts.bundles.allPlugins.tier2.ltd : AppConfig.urls.shopProducts.bundles.allPlugins.tier2.yearly ) : ( isProd ? ( selectLTD ? selectedPlugin.shopURLs.tier2.ltd : selectedPlugin.shopURLs.tier2.yearly ) : selectedPlugin.shopURLs.dev ) )}
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ selectBundle ? "text-cyan-300" : "text-blue-300" }
          isLTD={ selectLTD }
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          productName={ selectedPlugin.title }
          price={ selectedPlugin.prices.tier3.yearly }
          originalPrice={ selectBundle ? ( selectLTD ? aggregatedPluginsPriceTier3LTD : aggregatedPluginsPriceTier3Yearly ) : undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier3 }
          buttonURL={ getShopURL(selectBundle ? ( selectLTD ? AppConfig.urls.shopProducts.bundles.allPlugins.tier3.ltd : AppConfig.urls.shopProducts.bundles.allPlugins.tier3.yearly ) : ( isProd ? ( selectLTD ? selectedPlugin.shopURLs.tier3.ltd : selectedPlugin.shopURLs.tier3.yearly ) : selectedPlugin.shopURLs.dev ) )}
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ selectBundle ? "text-cyan-300" : "text-blue-300" }
          isLTD={ selectLTD }
          highlight={true}
        />
        {/* Pricing table 4 */}
        <PricingTier
          tierName='Agency'
          productName={ selectedPlugin.title }
          price={ selectedPlugin.prices.tier4.yearly }
          originalPrice={ selectBundle ? ( selectLTD ? aggregatedPluginsPriceTier4LTD : aggregatedPluginsPriceTier4Yearly ) : undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier4 }
          buttonURL={ getShopURL(selectBundle ? ( selectLTD ? AppConfig.urls.shopProducts.bundles.allPlugins.tier4.ltd : AppConfig.urls.shopProducts.bundles.allPlugins.tier4.yearly ) : ( isProd ? ( selectLTD ? selectedPlugin.shopURLs.tier4.ltd : selectedPlugin.shopURLs.tier4.yearly ) : selectedPlugin.shopURLs.dev ) )}
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ selectBundle ? "text-cyan-300" : "text-blue-300" }
          isLTD={ selectLTD }
        />
      </div>
      <p className="text-sm text-slate-500 pt-4 pb-4 font-bold text-center">
        { selectLTD && (
          <span>
            The license never expires. Prices are in USD.
          </span>
        )}
        { !selectLTD && (
          <span>
            The license is for 1 year (renewable every year). Prices are in USD.
          </span>
        )}
      </p>
    </div>
  );
}