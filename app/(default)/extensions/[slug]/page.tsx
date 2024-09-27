import type { Metadata, ResolvingMetadata } from 'next'
import { allExtensions } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import StunningBackground from '@/components/stunning-background'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import Cta from '@/components/cta-02'
import SingleExtension from './single-extension'
import SingleExtensionPricing from './single-extension-pricing-section'
import ExtensionsSection, { svgEffect2 } from '../extensions-section'
import SectionHeader from '@/components/section-header'

export async function generateStaticParams() {
  return allExtensions.map((extension) => ({
    slug: extension.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) return

  const { title, seoTitle, description, seoDescription } = extension

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: extension.image ? [extension.image] : previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: extension.image ? [extension.image] : previousImages,
    },
  }
}

export default async function SingleExtensionPage({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const extensions = allExtensions.sort(sortByOrderAndTitle)
  const extensionIndex = extensions.findIndex((extension) => extension.slug === params.slug)

  if (extensionIndex === -1) notFound()

  const extension = extensions[extensionIndex]
  
  {/* Page navigation */}
  // const paginationArticles = getPrevNextArticles(extensions, extensionIndex)
  // const prevArticle = paginationArticles.prev as Extension
  // const nextArticle = paginationArticles.next as Extension

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <div className="pb-12 md:pb-20">  

          <SingleExtension
            extension={extension}
            printIntegrations={false}
          />

        </div>
        
        <div className="pb-12 md:pb-20">  

          <SingleExtensionPricing
            extension={extension}
          />
        </div>
        
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/*  Page header */}
          <SectionHeader
            // leading='Extensions'
            title='Keep browsing extensions'
            // description='Provide additional functionality to the GraphQL server, and expand the GraphQL schema'
          />

          <ExtensionsSection
            useThumbEffect={svgEffect2}
          />
        </div>
      </div>
    </>
  )
}