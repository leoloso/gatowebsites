import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  sortDocuments,
  getQueryLibraryDocuments,
  getPrevNextArticles,
} from '@/utils/content/document'
import DocSection from '@/components/sections/doc'
import { topicTitleSVG2 } from '@/components/ui/docs/topic-title'
import { Doc } from '@/.contentlayer/generated'

export async function generateStaticParams() {
  return getQueryLibraryDocuments().map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const doc = getQueryLibraryDocuments().find((doc) => doc.slug === params.slug)

  if (!doc) return

  const { title, seoTitle, description, seoDescription } = doc

  return {
    title: `${seoTitle || title} | Gato GraphQL for WordPress`,
    description: seoDescription || description,
  }
}

export default async function SingleDoc({ params }: {
  params: {
    slug: string
  }
}) {
  // Sort docs. Needed to find the prev/next items below
  const docs = getQueryLibraryDocuments().sort(sortDocuments)
  const docIndex = docs.findIndex((doc) => doc.slug === params.slug)

  if (docIndex === -1) notFound()

  const doc = docs[docIndex]
  const paginationArticles = getPrevNextArticles(docs, docIndex)

  const prevDoc = paginationArticles.prev as Doc
  const nextDoc = paginationArticles.next as Doc

  return (
    <DocSection
      doc={doc}
      prevDoc={prevDoc}
      nextDoc={nextDoc}
      svgOption={topicTitleSVG2}
    />
  )
}
