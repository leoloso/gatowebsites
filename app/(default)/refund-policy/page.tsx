import type { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import PageSection from '@/components/sections/page'

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug,
  }))
}

const pageSlug = 'refund-policy'

export async function generateMetadata(): Promise<Metadata | undefined> {

  const page = allPages.find((page) => page.slug === pageSlug)

  if (!page) return

  const { title, summary: description } = page

  return {
    title,
    description,
  }
}

export default async function SinglePage() {

  const page = allPages.find((page) => page.slug === pageSlug)

  if (!page) notFound()

  return (
    <PageSection page={page} />
  )
}