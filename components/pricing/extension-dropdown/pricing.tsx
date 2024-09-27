"use client";

import { getShopURL, getShopAnchorClassname } from "@/utils/shop/shop"
import { allExtensions, Extension } from "@/.contentlayer/generated"
import { sortByOrderAndTitle } from "@/utils/content/sort"

import { useState } from "react";
import PricingTier from "./pricing-tier";
import AppConfig from "@/app/app.config"
import clsx from "clsx";
import FullWidthDropdown from "@/components/standard/dropdown-full-width";

export default function ExtensionDropdownPricing({
  fixedExtension,
}: {
  fixedExtension?: Extension
}) {
  const extensions = allExtensions.sort(sortByOrderAndTitle)

  const [selectBundle, setSelectBundle] = useState<boolean>(false);
  const [selectedExtensionIndex, setSelectedExtensionIndex] = useState<number>(fixedExtension === undefined ? 0 : extensions.findIndex((ext) => ext.slug === fixedExtension.slug))

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
        <div className="flex items-center justify-center gap-4 text-gray-300">
          <div className="flex-1">
            { fixedExtension === undefined && (
              <div className="flex flex-col items-center justify-center">
                <div className={clsx("cursor-pointer text-center w-full", !selectBundle && "text-blue-300")} aria-hidden="true" onClick={() => setSelectBundle(false)}>
                  Pick extension:
                </div>
                <div className="sr-only">Pick extension</div>
                <FullWidthDropdown
                  values={extensionNames}
                  state={[selectedExtensionIndex, setSelectedExtensionIndex]}
                  isDisabled={selectBundle}
                />
              </div>
            )}
            { fixedExtension !== undefined && (
              <div className={clsx("cursor-pointer text-center w-full", !selectBundle && "text-blue-300")} aria-hidden="true" onClick={() => setSelectBundle(false)}>
                Get the <span className="font-bold">{ fixedExtension.title }</span> extension
              </div>
            )}
          </div>
          <label className="cursor-pointer">
            <div className="flex-none">
              <input
                role="switch"
                type="checkbox"
                className="peer sr-only"
                checked={selectBundle}
                onChange={() => setSelectBundle(!selectBundle)}
              />
              <div
                className="peer relative h-6 w-11 rounded-full bg-blue-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-blue-200 after:transition-all peer-checked:bg-teal-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus-visible:ring-4 peer-focus-visible:ring-teal-200"
                aria-hidden="true"
              />
            </div>
          </label>
          <div className="flex-1 sm:w-80 flex flex-col items-center justify-center cursor-pointer" onClick={() => setSelectBundle(true)}>
            <span className={clsx("text-center", selectBundle && "text-teal-300")} aria-hidden="true">
              Get bundle with <span className="font-bold">all { extensions.length } extensions</span>
            </span>
            <span className="m-1.5"><span className="text font-medium text-red-100 px-1.5 bg-red-500/90 rounded-full"><span className="font-bold">{ Math.floor(allExtensionsBundleDiscount) }%</span> discount!</span></span>            
          </div>
        </div>
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
          extensionNameClassname={selectBundle ? "text-teal-300" : "text-blue-300" }
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier2 : AppConfig.shop.prices.extensions._shared.tier2}
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier2}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier2 : ( isProd ? selectedExtension.shopURLs.tier2 : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          extensionNameClassname={selectBundle ? "text-teal-300" : "text-blue-300" }
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier3 : AppConfig.shop.prices.extensions._shared.tier3}
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier3}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier3 : ( isProd ? selectedExtension.shopURLs.tier3 : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          extensionNameClassname={selectBundle ? "text-teal-300" : "text-blue-300" }
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
          extensionNameClassname={selectBundle ? "text-teal-300" : "text-blue-300" }
        />
      </div>
    </div>
  );
}