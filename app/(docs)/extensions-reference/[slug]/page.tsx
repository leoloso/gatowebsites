import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  sortDocuments,
  getExtensionReferenceDocuments,
  getPrevNextArticles,
} from '@/utils/content/document'
import DocSection from '@/components/sections/doc'
import { topicTitleSVG2 } from '@/components/ui/docs/topic-title'
import { Doc } from '@/.contentlayer/generated'
import { getPageTitle } from '@/utils/content/metadata'

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

  const { title, seoTitle, description, seoDescription } = doc

  return {
    title: `${getPageTitle(seoTitle) || title} | Gato GraphQL for WordPress`,
    description: seoDescription || description,
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
