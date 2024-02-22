import type { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import PageSection from '@/components/sections/page'
import { getPage, getPageMetadata } from '@/utils/page'

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug,
  }))
}

const pageSlug = 'refund-policy'

export async function generateMetadata(): Promise<Metadata | undefined> {

  const pageMetadata = getPageMetadata(pageSlug)

  if (!pageMetadata) return

  return pageMetadata
}

export default async function SinglePage() {

  const page = getPage(pageSlug)

  if (!page) notFound()

  return (
    <PageSection page={page} />
  )
}