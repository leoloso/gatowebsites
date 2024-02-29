
export default function PricingGroup({
  columns,
  name,
}: {
  columns: number,
  name: string
}) {
  return (
    <>
      <div className="px-6 flex flex-col justify-end">
        <div className="py-2 text-slate-50 font-medium mt-4">{name}</div>
      </div>
      {Array.from(Array(columns), (e, i) => (
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">{name}</div>
        </div>
      ))}
    </>
  )
}