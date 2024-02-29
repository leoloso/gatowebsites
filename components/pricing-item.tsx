
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
        <div className="px-6 flex flex-col justify-end" key={i}>
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            {ticks[i] && (
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
            )}
            {!ticks[i] && (
              <svg className="shrink-0 fill-red-400 mr-3" xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12">
                <g transform="matrix(0.75 0 0 0.75 0 0)">
                  <path d="M4,14.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L13.47,3.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L4.53,14.53c-.146,.146-.338,.22-.53,.22Z" data-color="color-2"></path>
                  <path d="M14,14.75c-.192,0-.384-.073-.53-.22L3.47,4.53c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0L14.53,13.47c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" data-color="color-2"></path>
                </g>
              </svg>
            )}
            {contents[i]}
          </div>
        </div>
      ))}
    </>
  )
}