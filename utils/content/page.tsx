import type { Metadata } from 'next'
import { Page, allPages } from 'contentlayer/generated'
import {
  createSEOPageTitle,
  createOpenGraphPageTitle,
  createSEOPageKeywords,
} from './metadata'

export function getPage(slug: string): Page | undefined {

  return allPages.find((page) => page.slug === slug)
}

export function getPageMetadata(slug: string): Metadata | null {

  const page = getPage(slug)

  if (!page) return null

  const { title, seoTitle, description, seoDescription, seoKeywords } = page

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