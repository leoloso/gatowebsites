import { Mdx } from './mdx'

export function UpdateMdx({
  code,
}: {
  code: string,
}) {
  return (
    <Mdx
      code={code}
      mdxClassName="text-slate-400 prose-p:leading-relaxed prose-strong:text-slate-50 prose-strong:font-medium"
    />
  )
}
