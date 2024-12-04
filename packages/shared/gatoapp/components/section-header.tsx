import slugify from "@sindresorhus/slugify";

export default function SectionHeader({
  leading,
  title,
  description,
  children,
  paddingClassname = "pb-12 md:pb-20",
  id,
}: {
  leading?: string,
  title: string,
  description?: string,
  children?: React.ReactNode,
  paddingClassname?: string,
  id?: string,
}) {
  return (
    <div
      id={id || slugify(title)}
      className={`scroll-mt-20 max-w-3xl mx-auto text-center ${paddingClassname}`}
    >
      {leading && (
        <div>
          <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-amber-400 dark:from-purple-500 dark:to-purple-200 pb-3">{leading}</div>
        </div>
      )}
      <h2 className="h2 text-white dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60 pb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-white dark:text-slate-400">{description}</p>
      )}
      {children}
    </div>
  )
}
