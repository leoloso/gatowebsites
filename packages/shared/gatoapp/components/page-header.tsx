import clsx from "clsx"

export default function PageHeader({
  leading,
  title,
  description,
  children,
  paddingClassname = "pb-12 md:pb-20",
  headerClassname
}: {
  leading?: string,
  title: string,
  description?: string,
  children?: React.ReactNode,
  paddingClassname?: string,
  headerClassname?: string,
}) {
  return (
    <div className={`max-w-3xl mx-auto text-center ${clsx(paddingClassname, headerClassname)}`}>
      {leading && (
        <div>
          <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-400 dark:from-purple-500 dark:to-purple-200 pb-3">{leading}</div>
        </div>
      )}
      <h1 className="h1 pb-4 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60">{title}</h1>
      {description && (
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-slate-400">{description}</p>
        </div>
      )}
      {children}
    </div>
  )
}
