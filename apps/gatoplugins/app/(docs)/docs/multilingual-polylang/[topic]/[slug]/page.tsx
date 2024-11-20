import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import {
  sortDocuments,
  getGuideDocuments,
  getPrevNextArticles,
} from '@/utils/content/document'
import DocSection from 'gatoapp/components/sections/doc'
import { topicTitleSVG1 } from 'gatoapp/components/ui/docs/topic-title'
import { Doc } from '@/.contentlayer/generated'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

export async function generateStaticParams() {
  return getGuideDocuments().map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const doc = getGuideDocuments().find((doc) => doc.slug === params.slug)

  if (!doc) return

  const { title, seoTitle, description, seoDescription } = doc

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: previousImages,
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
