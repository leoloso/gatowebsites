import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  sortDocuments,
  getTutorialDocuments,
  getPrevNextDocs,
} from '@/utils/document'
import DocSection from '@/components/sections/doc'
import { topicTitleSVG2 } from '@/components/ui/docs/topic-title'

export async function generateStaticParams() {
  return getTutorialDocuments().map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const doc = getTutorialDocuments().find((doc) => doc.slug === params.slug)

  if (!doc) return

  const { title, description } = doc

  return {
    title,
    description,
  }
}

export default async function SingleDoc({ params }: {
  params: {
    slug: string
  }
}) {
  // Sort docs. Needed to find the prev/next items below
  const docs = getTutorialDocuments().sort(sortDocuments)
  const docIndex = docs.findIndex((doc) => doc.slug === params.slug)

  if (docIndex === -1) notFound()

  const doc = docs[docIndex]
  const paginationDocs = getPrevNextDocs(docs, docIndex)

  return (
    <DocSection
      doc={doc}
      prevDoc={paginationDocs.prev}
      nextDoc={paginationDocs.next}
      svgOption={topicTitleSVG2}
    />
  )
}
