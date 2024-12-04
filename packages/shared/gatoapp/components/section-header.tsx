import slugify from "@sindresorhus/slugify";
import clsx from "clsx";

export default function SectionHeader({
  leading,
  title,
  description,
  children,
  paddingClassname = "pb-12 md:pb-20",
  id,
  leadingColorClassname = "bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-amber-400 dark:from-purple-500 dark:to-purple-200",
  titleColorClassname = "text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60",
  descriptionColorClassname = "text-gray-900 dark:text-slate-400",
}: {
  leading?: string,
  title: string,
  description?: string,
  children?: React.ReactNode,
  paddingClassname?: string,
  id?: string,
  leadingColorClassname?: string,
  titleColorClassname?: string,
  descriptionColorClassname?: string,
}) {
  return (
    <div
      id={id || slugify(title)}
      className={`scroll-mt-20 max-w-3xl mx-auto text-center ${paddingClassname}`}
    >
      {leading && (
        <div>
          <div className={clsx("inline-flex font-medium pb-3", leadingColorClassname)}>{leading}</div>
        </div>
      )}
      <h2 className={clsx("h2 pb-4", titleColorClassname)}>
        {title}
      </h2>
      {description && (
        <p className={clsx("text-lg", descriptionColorClassname)}>{description}</p>
      )}
      {children}
    </div>
  )
}
