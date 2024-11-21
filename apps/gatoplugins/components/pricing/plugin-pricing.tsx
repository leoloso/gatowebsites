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
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier1 }
          buttonURL={ getShopURL(isProd ? selectedPlugin.shopURLs.tier1.yearly : selectedPlugin.shopURLs.dev) }
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ selectBundle ? "text-cyan-300" : "text-blue-300" }
          isLTD={ selectLTD }
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          productName={ selectedPlugin.title }
          price={ selectedPlugin.prices.tier2.yearly }
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier2 }
          buttonURL={ getShopURL(isProd ? selectedPlugin.shopURLs.tier2.yearly : selectedPlugin.shopURLs.dev) }
          buttonClassname={ getShopAnchorClassname() }
          productNameClassname={ selectBundle ? "text-cyan-300" : "text-blue-300" }
          isLTD={ selectLTD }
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          productName={ selectedPlugin.title }
          price={ selectedPlugin.prices.tier3.yearly }
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier3 }
          buttonURL={ getShopURL(isProd ? selectedPlugin.shopURLs.tier3.yearly : selectedPlugin.shopURLs.dev) }
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
          originalPrice={  undefined }
          tierDomainNumber={ AppConfig.shop.licenseDomainNumber.tier4 }
          buttonURL={ getShopURL(isProd ? selectedPlugin.shopURLs.tier4.yearly : selectedPlugin.shopURLs.dev) }
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