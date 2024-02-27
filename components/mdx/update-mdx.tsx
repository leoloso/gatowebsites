import { useMDXComponent } from 'next-contentlayer/hooks'

const mdxComponents = {}

interface MdxProps {
  code: string
}

export function UpdateMdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="prose dark:prose-invert text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24">
      <Component components={{ ...mdxComponents }} />
    </div>
  )
}
