import type { Metadata, ResolvingMetadata } from 'next'
import { allExtensions } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'
import { getPrevNextArticles } from '@/utils/content/document'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import ExtensionThumb from '@/components/extension-thumb'
import PageHeader from '@/components/page-header'
import PostItemIntegration from '@/components/post-item-integration'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import Cta from '@/components/cta-02'
import ModalVideo from '@/components/mdx/components/modal-video'
import VideoThumb from '@/public/assets/GatoGraphQL-intro-video-background.png'

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

export default async function SingleExtension({ params }: {
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto">

              <article>

                {/* Title and excerpt */}
                <PageHeader
                  {...extension}
                  // headerClassname="md:text-left"
                  leading='Extension'
                />

                <div className="mb-8 lg:-ml-32 lg:-mr-32">
                  <ExtensionThumb
                    extension={extension}
                    isLandscape={true}
                  />
                </div>

                {!! extension.integrations && (
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold font-inter mb-8">Integrations</h4>
                    {/* List container */}
                    <div className="flex flex-col border-t border-gray-200">
                      {extension.integrations.map((integration, index) => (
                        <PostItemIntegration key={index} {...integration} />
                      ))}
                    </div>
                  </div>
                )}

                {!! extension.video && (
                  <div className="mb-8">
                    <ModalVideo
                      title={`Click Play to watch a demo of the ${extension.title} extension`}
                      thumb={extension.image}
                      thumbWidth={1024}
                      thumbHeight={576}
                      thumbAlt={`Demo of the ${extension.title} extension`}
                      video={extension.video}
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>
                )}

                {/* Article content */}
                <PostMdx code={extension.body.code} />

                {/* <hr className="w-full h-px pt-px mt-16 bg-gray-200 border-0" /> */}

                {/* Page navigation */}
                {/* <div className="py-8 space-y-6 sm:space-y-0 sm:space-x-4">
                  <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
                </div> */}
              </article>

            </div>

          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}