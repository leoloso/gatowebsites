import { Mdx } from './mdx'

export function HighlightMdx({
  code,
}: {
  code: string,
}) {
  return (
    <Mdx
      code={code}
      mdxClassName="text-gray-600 dark:text-slate-400 prose-p:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-slate-50 prose-strong:font-medium"
    />
  )
}
