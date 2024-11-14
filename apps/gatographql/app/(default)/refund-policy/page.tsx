import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageSection from '@gato/components/src/sections/page'
import { getPage, getPageMetadata } from '@/utils/content/page'
import { getPageSlugFromPageScriptFile } from '@/utils/content/path'
import RefundForm from '@gato/components/src/forms/refund'

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
    <PageSection
      page={page}
    >
      <RefundForm />
    </PageSection>
  )
}