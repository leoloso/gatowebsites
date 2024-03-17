import { Mdx } from './mdx'

export function PostMdx({
  code,
}: {
  code: string,
}) {
  return (
    <Mdx
      code={code}
    />
  )
}
