import { allExtensions } from '@/.contentlayer/generated'
import ExtensionCoverItem from './extension-cover-item'
import { createSEOPageTitle } from '@/utils/content/metadata'
import { notFound } from 'next/navigation'

const pageTitle = 'Extension Cover'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Extension Cover',
}

export default function ExtensionCover({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) notFound()

  return (
    <>

      {/* Content */}
      <section className="relative">

        <ExtensionCoverItem extension={extension} />

      </section>

    </>
  )
}