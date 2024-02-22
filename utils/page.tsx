import type { Metadata } from 'next'
import { Page, allPages } from 'contentlayer/generated'

export function getPage(slug: string): Page | undefined {

  return allPages.find((page) => page.slug === slug)
}

export function getPageMetadata(slug: string): Metadata | null {

  const page = getPage(slug)

  if (!page) return null

  const { title, summary: description } = page

  return {
    title,
    description,
  }
}