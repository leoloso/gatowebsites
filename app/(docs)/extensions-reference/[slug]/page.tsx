import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  sortDocuments,
  getExtensionReferenceDocuments,
} from '@/utils/document'
import DocSection from '@/components/sections/doc'
import { topicTitleSVG2 } from '@/components/ui/docs/topic-title'

export async function generateStaticParams() {
  return getExtensionReferenceDocuments().map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const doc = getExtensionReferenceDocuments().find((doc) => doc.slug === params.slug)

  if (!doc) return

  const { title, summary: description } = doc

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
  const docs = getExtensionReferenceDocuments().sort(sortDocuments)
  const docIndex = docs.findIndex((doc) => doc.slug === params.slug)

  if (docIndex === -1) notFound()

  const doc = docs[docIndex]

  // Calculate the prev/next items
  const prevDoc = docIndex === 0 ? undefined : docs[docIndex - 1]
  const nextDoc = docIndex === (docs.length - 1) ? undefined : docs[docIndex + 1]

  return (
    <DocSection
      doc={doc}
      prevDoc={prevDoc}
      nextDoc={nextDoc}
      svgOption={topicTitleSVG2}
    />
  )
}
