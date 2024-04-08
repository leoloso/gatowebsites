import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  sortDocuments,
  getGuideDocuments,
  getPrevNextArticles,
} from '@/utils/content/document'
import DocSection from '@/components/sections/doc'
import { topicTitleSVG1 } from '@/components/ui/docs/topic-title'
import { Doc } from '@/.contentlayer/generated'
import {
  createSEOPageTitle,
  createOpenGraphPageTitle,
  createSEOPageKeywords,
} from '@/utils/content/metadata'

export async function generateStaticParams() {
  return getGuideDocuments().map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const doc = getGuideDocuments().find((doc) => doc.slug === params.slug)

  if (!doc) return

  const { title, seoTitle, description, seoDescription, seoKeywords } = doc

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    keywords: createSEOPageKeywords(seoKeywords),
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
    },
  }
}

export default async function SingleDoc({ params }: {
  params: {
    topic: string,
    slug: string
  }
}) {
  // Sort docs. Needed to find the prev/next items below
  const docs = getGuideDocuments().sort(sortDocuments)
  const docIndex = docs.findIndex((doc) => doc.topicSlug === params.topic && doc.slug === params.slug)

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
      svgOption={topicTitleSVG1}
    />
  )
}
