import type { Metadata } from 'next'
import { allDocs } from 'contentlayer/generated'
import { allDocTopics } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'
import TopicTitle from '@/components/ui/docs/topic-title'
import Hamburger from '@/components/ui/docs/hamburger'
import Feedback from '@/components/ui/feedback'
import PageNavigation from '@/components/ui/page-navigation'
import Footer from '@/components/ui/docs/footer'
import SecondaryNav from '@/components/ui/docs/secondary-nav'
import {
  getDocumentTopicSlug,
  getDocumentTopicBySlug,
  sortDocumentTopics,
} from '@/components/utils/document'

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

export default async function SinglePost({ params }: {
  params: {
    topic: string,
    slug: string
  }
}) {
  // Sort docs and doc topics by order. Needed to find the prev/next items below
  allDocTopics.sort((a, b) => {
    return sortDocumentTopics(a, b);
  })
  allDocs.sort((a, b) => {
    // Make sure that all documents respect the order of their topics (to find the next/prev below)
    const aDocTopicSlug = getDocumentTopicSlug(a)
    const bDocTopicSlug = getDocumentTopicSlug(b)
    const aDocTopic = getDocumentTopicBySlug(aDocTopicSlug)
    const bDocTopic = getDocumentTopicBySlug(bDocTopicSlug)
    if (!aDocTopic || !bDocTopic) {
      return 1;
    }
    if (aDocTopicSlug !== bDocTopicSlug) {
      return sortDocumentTopics(aDocTopic, bDocTopic);
    }
    return (a.order > b.order) ? -1 : 1
  })

  const docIndex = allDocs.findIndex((doc) => doc.slug === `${params.topic}/${params.slug}`)

  if (!docIndex) notFound()

  const doc = allDocs[docIndex]

  const docTopicSlug = getDocumentTopicSlug(doc)

  const docTopic = getDocumentTopicBySlug(docTopicSlug)

  if (!docTopic) notFound()

  // Calculate the prev/next items

  return (
    <>
      {/* Page header */}
      <div className="h-16 flex items-center mb-6">
        <TopicTitle name={docTopic.title} segment={docTopicSlug} />
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

          {/* Article content */}
          <div>
            <header className="mb-6">
              <h1 className="h2 text-slate-800 mb-4 dark:text-slate-200">{doc.title}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {doc.summary}
              </p>
            </header>
            <Mdx code={doc.body.code} />
          </div>

          {/* Feedback */}
          <Feedback />

          {/* Page navigation */}
          <PageNavigation prevArticle={doc.prev} nextArticle={doc.next} />

          {/* Content footer */}
          <Footer />

        </div>

        {/* Secondary navigation */}
        <SecondaryNav />

      </article>
    </>
  )
}
