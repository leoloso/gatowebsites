import type { Metadata } from 'next'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { DocMdx } from '@/components/mdx/doc-mdx'
import TopicTitle from '@/components/ui/docs/topic-title'
import { topicTitleSVG1 } from '@/components/ui/docs/topic-title'
import Hamburger from '@/components/ui/docs/hamburger'
import Feedback from '@/components/ui/feedback'
import DocNavigation from '@/components/ui/doc-navigation'
import Footer from '@/components/ui/docs/footer'
import SecondaryNav from '@/components/ui/docs/secondary-nav'
import {
  calculateDocumentSlug,
  getDocumentDocumentTopicSlug,
  getDocumentTopicBySlug,
  sortDocuments,
} from '@/utils/document'

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const doc = allDocs.find((doc) => doc.slug === params.slug)

  if (!doc) return

  const { title, summary: description } = doc

  return {
    title,
    description,
  }
}

export default async function SingleDoc({ params }: {
  params: {
    topic: string,
    slug: string
  }
}) {
  // Sort docs. Needed to find the prev/next items below
  allDocs.sort(sortDocuments)
  const docIndex = allDocs.findIndex((doc) => doc.slug === calculateDocumentSlug(params.topic, params.slug))

  if (docIndex === -1) notFound()

  const doc = allDocs[docIndex]

  const docTopicSlug = getDocumentDocumentTopicSlug(doc)

  const docTopic = getDocumentTopicBySlug(docTopicSlug)

  if (!docTopic) notFound()

  // Calculate the prev/next items
  const prevDoc = docIndex === 0 ? undefined : allDocs[docIndex - 1]
  const nextDoc = docIndex === (allDocs.length - 1) ? undefined : allDocs[docIndex + 1]

  return (
    <>
      {/* Page header */}
      <div className="h-16 flex items-center mb-6">
        <TopicTitle name={docTopic.title} svgOption={topicTitleSVG1} />
      </div>

      <article className="flex xl:space-x-12">

        {/* Main area */}
        <div className="min-w-0">

          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden flex items-center mb-8">

            <Hamburger />

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">{docTopic.title}</span>
              <svg className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">{doc.title}</span>
            </div>

          </div>

          {/* Doc content */}
          <div>
            <header className="mb-6">
              <h1 className="h2 text-slate-800 mb-4 dark:text-slate-200">{doc.title}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {doc.summary}
              </p>
            </header>
            <DocMdx code={doc.body.code} />
          </div>

          {/* Feedback */}
          <Feedback />

          {/* Page navigation */}
          <DocNavigation docTopic={docTopic} prevArticle={prevDoc} nextArticle={nextDoc} />

          {/* Content footer */}
          <Footer />

        </div>

        {/* Secondary navigation */}
        <SecondaryNav />

      </article>
    </>
  )
}
