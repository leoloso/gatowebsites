export default function PricingTier({
  name,
  price,
  description,
  highlight,
  buttonLabel,
  buttonURL,
}: {
  name: string,
  price: number,
  description: string,
  highlight?: boolean,
  buttonLabel: string,
  buttonURL: string,
}) {
  const isPRO = price !== 0
  return (
    <div className="px-6 flex flex-col justify-end sticky top-16">
      <div className="grow pb-4 mb-4 border-b border-slate-800">
        <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">{name}</div>
        <div className="mb-1">
          <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{price}</span><span className="text-sm text-slate-600 font-medium">/y</span>
        </div>
        <div className="text-slate-500">{description}</div>
      </div>
      <div className="pb-4 border-b border-slate-800">
        <a className={`btn-sm w-full transition duration-150 ease-in-out group ${highlight ? 'text-white bg-purple-700 hover:bg-purple-800' : (isPRO ? 'text-white bg-purple-500 hover:bg-purple-600' : 'text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white')}`} href={buttonURL}>
          {buttonLabel} <span className={`tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 ${highlight ? 'text-purple-500' : (isPRO ? 'text-purple-300' : 'text-purple-500')}`}>-&gt;</span>
        </a>
      </div>
    </div>
  )
}