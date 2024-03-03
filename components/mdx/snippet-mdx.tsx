import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLink from './link'
import PostImage from './image'
import PostBanner from './banner'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
}

interface StoryMdxProps {
  code: string
}

export function SnippetMdx({ code }: StoryMdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose dark:prose-invert text-slate-400 space-y-6 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:font-medium prose-a:text-purple-600 dark:prose-a:text-purple-300 prose-a:no-underline hover:prose-a:no-underline hover:prose-a:text-purple-500 hover:dark:prose-a:text-purple-400 prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-20">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
