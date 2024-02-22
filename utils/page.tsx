import { Page, allPages } from 'contentlayer/generated'

export function getPage(slug: string): Page | undefined {

  return allPages.find((page) => page.slug === slug)
}