"use client";

import { getShopURL, getShopAnchorClassname } from "@/utils/shop/shop"
import { allExtensions, Extension } from "@/.contentlayer/generated"
import { sortByOrderAndTitle } from "@/utils/content/sort"

import { useState } from "react";
import PricingTier from "./pricing-tier";
import AppConfig from "@/app/app.config"
import clsx from "clsx";
import FullWidthDropdown from "@/components/standard/dropdown-full-width";
import Tooltip from "@/components/standard/tooltip";

export default function ExtensionDropdownPricing({
  fixedExtension,
  preselectBundle = false,
}: {
  fixedExtension?: Extension,
  preselectBundle?: boolean
}) {
  const extensions = allExtensions.sort(sortByOrderAndTitle)

  const [selectBundle, setSelectBundle] = useState<boolean>(preselectBundle);
  const [selectLTD, setLTD] = useState<boolean>(false);
  const [selectedExtensionIndex, setSelectedExtensionIndex] = useState<number>(fixedExtension === undefined ? 0 : extensions.findIndex((ext) => ext.slug === fixedExtension.slug))

  const extensionNames = extensions.map((extension) => extension.title)

  const allExtensionsBundlePriceTier1 = AppConfig.shop.prices.bundles.allExtensions.tier1.yearly
  const aggregatedExtensionsPriceTier1 = AppConfig.shop.prices.extensions._shared.tier1.yearly * extensions.length

  const aggregatedExtensionsPriceTier2 = AppConfig.shop.prices.extensions._shared.tier2.yearly * extensions.length
  const aggregatedExtensionsPriceTier3 = AppConfig.shop.prices.extensions._shared.tier3.yearly * extensions.length
  const aggregatedExtensionsPriceTier4 = AppConfig.shop.prices.extensions._shared.tier4.yearly * extensions.length

  const allExtensionsBundleDiscount = 100 * (1 - allExtensionsBundlePriceTier1 / aggregatedExtensionsPriceTier1)

  const allExtensionsBundleName = "“All Extensions” bundle"

  const selectedExtension = extensions[selectedExtensionIndex]

  const isProd = process.env.NODE_ENV === 'production'

  return (
    <div className="relative">
      <div className="mb-16 flex flex-col items-center justify-center gap-6">
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
                className="peer relative h-6 w-11 rounded-full bg-blue-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-blue-200 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus-visible:ring-4 peer-focus-visible:ring-cyan-200"
                aria-hidden="true"
              />
            </div>
          </label>
          <div className="flex-1 sm:w-96 flex flex-col items-center justify-center cursor-pointer" onClick={() => setSelectBundle(true)}>
            <span className="flex items-center justify-center">
              <span className={clsx("text-center", selectBundle && "text-cyan-300")} aria-hidden="true">
                Get bundle with <span className="font-bold">all { extensions.length } extensions</span>
              </span>
              <span className="m-1.5">
                <Tooltip size="lg" bg="dark">
                  <ul className="grow space-y-1 text-sm text-slate-400">
                    { extensionNames.map((extensionName, index) => (
                      <li className={clsx("flex items-center", fixedExtension !== undefined && fixedExtension.title === extensionName && "font-bold text-purple-400")} key={ index }>
                        <svg
                          className="mr-2 h-3 w-3 shrink-0 fill-current text-purple-500"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{ extensionName }</span>
                      </li>
                    ))}
                  </ul>
                </Tooltip>
              </span>
            </span>
            <span className="m-1.5"><span className="text font-medium text-red-100 px-1.5 bg-red-500/90 rounded-full"><span className="font-bold">{ Math.floor(allExtensionsBundleDiscount) }%</span> Off!</span></span>            
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-gray-300">
          <div className="flex items-center justify-center">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox bg-slate-300 cursor-pointer" checked={selectLTD} onChange={() => setLTD(!selectLTD)} />
              <span className={clsx("ml-2", selectLTD && "text-purple-300")} aria-hidden="true">
                Make it a <span className="font-bold">Life Time Deal</span>
              </span>
            </label>
            <span className="m-1.5">
              <Tooltip size="lg" bg="dark">
                Pay only once, and enjoy <span className="font-bold">Support</span> and <span className="font-bold">Product updates</span> forever
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-xs items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
        {/* Pricing table 1 */}
        <PricingTier
          tierName='Personal'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier1.yearly : AppConfig.shop.prices.extensions._shared.tier1.yearly}
          originalPrice={ selectBundle ? aggregatedExtensionsPriceTier1 : undefined }
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier1}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier1.yearly : ( isProd ? selectedExtension.shopURLs.tier1.yearly : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          extensionNameClassname={selectBundle ? "text-cyan-300" : "text-blue-300" }
        />
        {/* Pricing table 2 */}
        <PricingTier
          tierName='Organization'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier2.yearly : AppConfig.shop.prices.extensions._shared.tier2.yearly}
          originalPrice={ selectBundle ? aggregatedExtensionsPriceTier2 : undefined }
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier2}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier2.yearly : ( isProd ? selectedExtension.shopURLs.tier2.yearly : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          extensionNameClassname={selectBundle ? "text-cyan-300" : "text-blue-300" }
        />
        {/* Pricing table 3 */}
        <PricingTier
          tierName='Professional'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier3.yearly : AppConfig.shop.prices.extensions._shared.tier3.yearly}
          originalPrice={ selectBundle ? aggregatedExtensionsPriceTier3 : undefined }
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier3}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier3.yearly : ( isProd ? selectedExtension.shopURLs.tier3.yearly : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          extensionNameClassname={selectBundle ? "text-cyan-300" : "text-blue-300" }
          highlight={true}
        />
        {/* Pricing table 4 */}
        <PricingTier
          tierName='Agency'
          extensionName={ selectBundle ? allExtensionsBundleName : selectedExtension.title }
          price={ selectBundle ? AppConfig.shop.prices.bundles.allExtensions.tier4.yearly : AppConfig.shop.prices.extensions._shared.tier4.yearly}
          originalPrice={ selectBundle ? aggregatedExtensionsPriceTier4 : undefined }
          tierDomainNumber={AppConfig.shop.licenseDomainNumber.tier4}
          buttonURL={ getShopURL(selectBundle ? AppConfig.urls.shopProducts.bundles.allExtensions.tier4.yearly : ( isProd ? selectedExtension.shopURLs.tier4.yearly : selectedExtension.shopURLs.dev ) )}
          buttonClassname={getShopAnchorClassname()}
          extensionNameClassname={selectBundle ? "text-cyan-300" : "text-blue-300" }
        />
      </div>
      <p className="text-sm text-slate-500 pt-4 pb-4">
        <strong>The license is for 1 year (renewable every year). Prices are in USD.</strong>
      </p>
    </div>
  );
}