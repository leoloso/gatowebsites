import clsx from "clsx"

export default function PricingTier({
  tierName,
  productName,
  price,
  originalPrice,
  tierDomainNumber,
  highlight,
  isLTD = false,
  buttonLabel="Purchase",
  buttonURL,
  buttonTarget,
  buttonClassname,
  productNameClassname="text-slate-200",
  printProductName=false,
}: {
  tierName: string,
  productName: string,
  price: number,
  originalPrice?: number,
  tierDomainNumber: number,
  highlight?: boolean,
  isLTD?: boolean,
  buttonLabel?: string,
  buttonURL: string,
  buttonTarget?: string,
  buttonClassname?: string,
  productNameClassname?: string,
  printProductName?: boolean,
}) {
  const isFree = price === 0
  return (
    <div className={clsx("relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/65 to-gray-900/80 dark:from-gray-900/50 dark:via-gray-800/25 dark:to-gray-900/50 p-5 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]", !highlight && "before:[background:linear-gradient(to_right,theme(colors.sky.800),theme(colors.sky.700),theme(colors.sky.800))_border-box] dark:before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box]", highlight && "before:[background:linear-gradient(to_right,theme(colors.yellow.500/.7),theme(colors.yellow.500),theme(colors.yellow.500/.7))_border-box] dark:before:[background:linear-gradient(to_right,theme(colors.purple.500/.7),theme(colors.purple.500),theme(colors.purple.500/.7))_border-box]")}>
      <div className="relative mb-4 border-b pb-5 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1]">
        {/* { highlight && (
          <div className="absolute right-0 top-0 inline-flex items-center rounded-full bg-slate-500/[.5] px-2 py-0.5 text-xs font-medium text-slate-100 shadow-sm">
            Popular
          </div>
        )} */}
        <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200 dark:from-purple-500 dark:to-purple-200 pb-0.5">
          {tierName}
        </div>
        <div className="flex items-baseline gap-2">
          <div className="mb-1.5 flex items-baseline font-nacelle">
            <span className="text-2xl text-slate-400">$</span>
            <span className="text-4xl font-semibold tabular-nums text-gray-200">
              {price}
            </span>
          </div>
          { originalPrice && (
            <div className="mb-1.5 flex items-baseline font-nacelle text-gray-400 line-through">
              <span className="text-gray-400">$</span>
              <span className="text-xl font-semibold tabular-nums">
                { originalPrice.toFixed(2) }
              </span>
            </div>
          )}
        </div>
        { printProductName && (
          <div className={clsx("grow text-sm font-bold", productNameClassname)}>
            { productName }
          </div>
        )}
        <div className="mb-4 grow text-sm text-slate-400">
          License for <span className="text-slate-200 font-bold">{tierDomainNumber} domains</span>
        </div>
        <a className={`btn-sm w-full transition duration-150 ease-in-out group ${highlight ? 'text-white bg-purple-700 hover:bg-purple-800' : (isFree ? 'text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white' : 'text-white bg-purple-500 hover:bg-purple-600')} ${buttonClassname}`} href={buttonURL} target={buttonTarget}>
          {buttonLabel} <span className={`tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 ${highlight ? 'text-purple-500' : (isFree ? 'text-purple-500' : 'text-purple-300')}`}>-&gt;</span>
        </a>
      </div>
      <ul className="grow space-y-2 text-sm text-slate-400">
        <li className="flex items-center">
          <svg
            className="mr-2 h-3 w-3 shrink-0 fill-current text-purple-500"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>{tierDomainNumber} domains</span>
        </li>
        <li className="flex items-center">
          <svg
            className="mr-2 h-3 w-3 shrink-0 fill-current text-purple-500"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>
            Support
            { isLTD && (
              <span className="text-purple-400"> (forever)</span>
            )}
          </span>
        </li>
        <li className="flex items-center">
          <svg
            className="mr-2 h-3 w-3 shrink-0 fill-current text-purple-500"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Product updates
            { isLTD && (
              <span className="text-purple-400"> (forever)</span>
            )}
          </span>
        </li>
      </ul>
    </div>
  )
}