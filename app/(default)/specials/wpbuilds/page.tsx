import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageSection from '@/components/sections/page'
import { getPage, getPageMetadata } from '@/utils/page'
import { getPageSlugFromPageScriptFile } from '@/utils/path'
import Cta from '@/components/cta-02'

// Get the page slug from the folder name
const pageSlug = getPageSlugFromPageScriptFile(__filename)

export async function generateMetadata(): Promise<Metadata | undefined> {

  const pageMetadata = getPageMetadata(pageSlug)

  if (!pageMetadata) return

  return pageMetadata
}

export default async function SinglePage() {

  const page = getPage(pageSlug)

  if (!page) notFound()

  return (
    <>
      <PageSection
        page={page}
      />
      <Cta />
    </>
  )
}