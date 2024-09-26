"use client";

import { getShopURL, getShopAnchorClassname } from "@/utils/shop/shop"
import { allExtensions } from "@/.contentlayer/generated"
import { sortByOrderAndTitle } from "@/utils/content/sort"

import { useState } from "react";
import PricingTier from "./pricing-tier";
import AppConfig from "@/app/app.config"
import clsx from "clsx";
import FullWidthDropdown from "@/components/standard/dropdown-full-width";

export default function ExtensionDropdownPricing() {
  const [selectBundle, setSelectBundle] = useState<boolean>(true);
  const [selectedExtensionIndex, setSelectedExtensionIndex] = useState<number>(0)

  const extensions = allExtensions.sort(sortByOrderAndTitle)
  const extensionNames = extensions.map((extension) => extension.title)

  const allExtensionsBundlePrice = AppConfig.shop.prices.bundles.allExtensions.tier1
  const aggregatedExtensionsPrice = AppConfig.shop.prices.extensions._shared.tier1 * extensions.length
  const allExtensionsBundleDiscount = 100 * (1 - allExtensionsBundlePrice / aggregatedExtensionsPrice)

  const allExtensionsBundleName = "“All Extensions” Bundle"

  const selectedExtension = extensions[selectedExtensionIndex]

  const isProd = process.env.NODE_ENV === 'production'

  return (
    <div className="relative">
      <div className="mb-16 flex items-center justify-center gap-2">
        {/* Pricing toggle */}
        <label className="flex cursor-pointer items-center justify-center gap-4 text-gray-300">
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className={clsx("text-center", selectBundle && "text-gray-100")} aria-hidden="true">
              Get bundle with <span className="font-bold">all { extensions.length } extensions</span>
            </span>
            <span className="m-1.5"><span className="text font-medium text-red-100 px-1.5 bg-red-500/90 rounded-full"><span className="font-bold">{ Math.floor(allExtensionsBundleDiscount) }%</span> discount!</span></span>            
          </div>
          <div className="flex-none">
            <input
              role="switch"
              type="checkbox"
              className="peer sr-only"
              checked={!selectBundle}
              onChange={() => setSelectBundle(!selectBundle)}
            />
            <div
              className="peer relative h-6 w-11 rounded-full bg-teal-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-teal-200 after:transition-all peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus-visible:ring-4 peer-focus-visible:ring-blue-200"
              aria-hidden="true"
            />
          </div>
          <div className="flex-1">
            <span className={clsx(!selectBundle && "text-gray-100")} aria-hidden="true">
              Pick extension:
            </span>
            <span className="sr-only">Pick extension</span>
            <FullWidthDropdown
              values={extensionNames}
              state={[selectedExtensionIndex, setSelectedExtensionIndex]}
              isDisabled={selectBundle}
            />
          </div>
        </label>
      </div>
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
        {/* Pricing table 1 */}
        <PricingTier
          tierName='Personal'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier1 : AppConfig.shop.prices.extensions._shared.tier1}
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier1}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier1 : ( isProd ? selectedExtension.shopURLs.tier1 : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier2 : AppConfig.shop.prices.extensions._shared.tier2}
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier2}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier2 : ( isProd ? selectedExtension.shopURLs.tier2 : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier3 : AppConfig.shop.prices.extensions._shared.tier3}
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier3}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier3 : ( isProd ? selectedExtension.shopURLs.tier3 : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          highlight={true}
        />
        {/* Pricing table 4 */}
        <PricingTier
          tierName='Agency'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier4 : AppConfig.shop.prices.extensions._shared.tier4}
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier4}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier4 : ( isProd ? selectedExtension.shopURLs.tier4 : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
        />
      </div>
    </div>
  );
}