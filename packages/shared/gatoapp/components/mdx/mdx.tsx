import { useMDXComponent } from 'next-contentlayer2/hooks'
import PostLink from './components/link'
import PostImage from './components/image'
import PostBanner from './components/banner'
import ThumbModalVideo from './components/modal-video-thumb'
import PostAccordion from './components/accordion'
import PostTag from './components/tag'
import PostTable, { TableHead, TableBody, TableHeadRow, TableBodyRow, TableTh, TableTd } from './components/table'
import { Pre } from './components/pre'
import { H1, H2, H3, H4, H5, H6 } from './components/headings'
import Alert from './components/alert'

const mdxComponents = {
  Link: PostLink,
  Image: PostImage,
  Banner: PostBanner,
  Alert: Alert,
  ModalVideo: ThumbModalVideo,
  Accordion: PostAccordion,
  Tag: PostTag,
  Table: PostTable,
  THead: TableHead,
  TBody: TableBody,
  ThRow: TableHeadRow,
  TbRow: TableBodyRow,
  Th: TableTh,
  Td: TableTd,
  Pre: Pre,
}

interface MdxProps {
  code: string,
  mdxClassName?: string,
  preAddCopyButton?: boolean,
}

export function Mdx({
  code,
  mdxClassName = "text-gray-700 dark:text-slate-200 max-w-none prose-p:leading-normal prose-headings:text-gray-800 dark:prose-headings:text-slate-200 prose-strong:text-gray-800 dark:prose-strong:text-slate-100 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-200 prose-blockquote:font-normal prose-blockquote:text-gray-500 dark:prose-blockquote:text-gray-300 prose-figcaption:text-gray-500 dark:prose-figcaption:text-slate-300",
  preAddCopyButton,
}: MdxProps) {
  const Component = useMDXComponent(code)

  const custom = {
    pre: ({ ...props }) => <Pre addCopyButton={preAddCopyButton}>{ props.children }</Pre>,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  }

  return (
    <article className={`prose dark:prose-invert prose-a:font-medium prose-a:text-blue-600 dark:prose-a:text-purple-300 prose-a:no-underline hover:prose-a:no-underline hover:prose-a:text-blue-500 dark:hover:prose-a:text-purple-400 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-li:marker:text-slate-400 prose-li:marker:dark:text-slate-400 prose-headings:scroll-mt-20 prose-a:prose-headings:text-slate-600 dark:prose-a:prose-headings:text-slate-200 ${mdxClassName}`}>
      <Component components={{ ...mdxComponents, ...custom }} />
    </article>
  )
}
