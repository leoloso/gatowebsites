
export default function PricingItem({
  columns,
  name,
  ticks,
  contents,
}: {
  columns: number,
  name: string,
  ticks: Array<boolean>
  contents: Array<React.ReactNode>
}) {
  return (
    <>
      <div className="px-6 flex flex-col justify-end">
        <div className="py-2 text-slate-400 border-b border-slate-800">{name}</div>
      </div>
      {Array.from(Array(columns), (e, i) => (
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            {ticks[i] && (
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
            )}
            {contents[i]}
          </div>
        </div>
      ))}
    </>
  )
}