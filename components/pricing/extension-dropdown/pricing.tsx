"use client";

// import AppConfig from "@/app/app.config"
// import PricingTier from "./pricing-tier"
// import PricingGroup from "./pricing-group"
// import PricingItem from "./pricing-item"
import { getShopURL, getShopAnchorClassname } from "@/utils/shop/shop"
import { allExtensions } from "@/.contentlayer/generated"
import { sortByOrderAndTitle } from "@/utils/content/sort"

import { useState } from "react";
import ExtensionDropdown from "./extension-dropdown";
import PricingTier from "./pricing-tier";
import AppConfig from "@/app/app.config"

export default function ExtensionDropdownPricing() {
  const extensions = allExtensions.sort(sortByOrderAndTitle)
  const [annual, setAnnual] = useState<boolean>(true);

  return (
    <div className="relative">
      <div className="mb-16 flex items-center justify-center gap-2">
        <div className="flex-none">
          <ExtensionDropdown extensions={extensions} />
        </div>
        {/* Pricing toggle */}
        <label className="flex cursor-pointer items-center justify-center gap-4 text-gray-300">
          {/* <span className="flex-1 text-right" aria-hidden="true"> */}
          <span className="text-right" aria-hidden="true">
            Pick extension
          </span>
          <span className="sr-only">Pick extension</span>
          <input
            role="switch"
            type="checkbox"
            className="peer sr-only"
            checked={annual}
            onChange={() => setAnnual(!annual)}
          />
          <div
            className="peer relative h-6 w-11 rounded-full bg-gray-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-gray-200 after:transition-all peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus-visible:ring-4 peer-focus-visible:ring-blue-200"
            aria-hidden="true"
          />
          {/* <span className="flex-1 text-left" aria-hidden="true"> */}
          <span className="text-left" aria-hidden="true">
            Get bundle (all { extensions.length } extensions)
            <span className="m-1.5"><span className="text-sm font-medium text-red-100 px-1.5 bg-red-500/90 rounded-full">-55%</span></span>
          </span>
        </label>
      </div>
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
        {/* Pricing table 1 */}
        <PricingTier
          tierName='Personal'
          extensionName="“All Extensions” Bundle"
          price={AppConfig.shop.prices.allExtensionsBundle.tier1}
          tierDomainNumber={5}
          buttonURL={getShopURL(AppConfig.urls.shopProducts.allExtensionsBundleTier1)}
          buttonClassname={getShopAnchorClassname()}
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          extensionName="“All Extensions” Bundle"
          price={AppConfig.shop.prices.allExtensionsBundle.tier2}
          tierDomainNumber={25}
          buttonURL={getShopURL(AppConfig.urls.shopProducts.allExtensionsBundleTier2)}
          buttonClassname={getShopAnchorClassname()}
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          extensionName="“All Extensions” Bundle"
          price={AppConfig.shop.prices.allExtensionsBundle.tier3}
          tierDomainNumber={100}
          buttonURL={getShopURL(AppConfig.urls.shopProducts.allExtensionsBundleTier3)}
          buttonClassname={getShopAnchorClassname()}
          highlight={true}
        />
        {/* Pricing table 4 */}
        <PricingTier
          tierName='Agency'
          extensionName="“All Extensions” Bundle"
          price={AppConfig.shop.prices.allExtensionsBundle.tier4}
          tierDomainNumber={500}
          buttonURL={getShopURL(AppConfig.urls.shopProducts.allExtensionsBundleTier4)}
          buttonClassname={getShopAnchorClassname()}
        />
      </div>
    </div>
  );
}