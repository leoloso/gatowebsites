import { useMDXComponent } from 'next-contentlayer/hooks'
import PostLink from './link'
import PostImage from './image'
import PostBanner from './banner'
import PostModalVideo from './modal-video'
import PostAccordion from './accordion'
import PostTag from './tag'
import PostTable, { TableHead, TableBody, TableHeadRow, TableBodyRow, TableTh, TableTd } from './table'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
  ModalVideo: PostModalVideo,
  Accordion: PostAccordion,
  Tag: PostTag,
  Table: PostTable,
  THead: TableHead,
  TBody: TableBody,
  ThRow: TableHeadRow,
  TbRow: TableBodyRow,
  Th: TableTh,
  Td: TableTd,
}

interface MdxProps {
  code: string
}

export function DocMdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose dark:prose-invert text-slate-700 dark:text-slate-200 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:text-blue-600 dark:prose-a:text-slate-100 prose-a:underline hover:prose-a:text-blue-500 hover:dark:prose-a:text-blue-200 prose-a:font-normal prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-200 prose-blockquote:font-normal prose-blockquote:text-gray-500 dark:prose-blockquote:text-gray-300 prose-headings:scroll-mt-24">
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
