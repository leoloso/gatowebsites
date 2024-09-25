// import { Suspense } from 'react'
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

  const { title } = extension

  return (
    <>

      {/* Content */}
      <section className="relative">

        <div
          // className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="relative">
            {/* <Suspense> */}
              <ExtensionCoverItem title={title} />
            {/* </Suspense> */}
          </div>

        </div>

      </section>

    </>
  )
}
