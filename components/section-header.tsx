export default function SectionHeader({
  leading,
  title,
  description,
  children,
  paddingClassname = "pb-12 md:pb-20",
}: {
  leading?: string,
  title: string,
  description?: string,
  children?: React.ReactNode,
  paddingClassname?: string,
}) {
  return (
    <div className={`max-w-3xl mx-auto text-center ${paddingClassname}`}>
      {leading && (
        <div>
          <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">{leading}</div>
        </div>
      )}
      <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{title}</h2>
      {description && (
        <p className="text-lg text-slate-400">{description}</p>
      )}
      {children}
    </div>
  )
}
