import { Mdx } from './mdx'

export function FeatureMdx({
  code,
}: {
  code: string,
}) {
  return (
    <Mdx
      code={code}
      mdxClassName="text-gray-600 dark:text-slate-400 prose-headings:text-gray-900 dark:prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-blue-500 dark:prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-gray-500 dark:prose-blockquote:text-slate-300 prose-blockquote:italic"
    />
  )
}
