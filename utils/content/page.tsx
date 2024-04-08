import type { Metadata } from 'next'
import { Page, allPages } from 'contentlayer/generated'
import { getPageTitle, createPageTitle } from './metadata'

export function getPage(slug: string): Page | undefined {

  return allPages.find((page) => page.slug === slug)
}

export function getPageMetadata(slug: string): Metadata | null {

  const page = getPage(slug)

  if (!page) return null

  const { title, seoTitle, description, seoDescription } = page

  return {
    title: createPageTitle(getPageTitle(seoTitle) || title),
    description: seoDescription || description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  }
}