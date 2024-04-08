import type { Metadata, ResolvingMetadata } from 'next'
import { allDemoPosts, DemoPost } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from '@/components/post-tags'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'
import ArticleNavigation from '@/components/ui/article-navigation'
import { getPrevNextArticles } from '@/utils/content/document'
import { sortByPublishedAt } from '@/utils/content/sort'
import DemoPostThumb from '@/components/demo-post-thumb'
import PageHeader from '@/components/page-header'
import DemoPostItemIntegration from '@/components/demo-post-item-integration'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

export async function generateStaticParams() {
  return allDemoPosts.map((demoPost) => ({
    slug: demoPost.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const demoPost = allDemoPosts.find((demoPost) => demoPost.slug === params.slug)

  if (!demoPost) return

  const { title, seoTitle, description, seoDescription } = demoPost

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: demoPost.image ? [demoPost.image] : previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: demoPost.image ? [demoPost.image] : previousImages,
    },
  }
}

export default async function SingleDemoPost({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const demoPosts = allDemoPosts.sort(sortByPublishedAt)
  const demoPostIndex = demoPosts.findIndex((demoPost) => demoPost.slug === params.slug)

  if (demoPostIndex === -1) notFound()

  const demoPost = demoPosts[demoPostIndex]
  
  {/* Page navigation */}
  const paginationArticles = getPrevNextArticles(demoPosts, demoPostIndex)
  const prevArticle = paginationArticles.prev as DemoPost
  const nextArticle = paginationArticles.next as DemoPost

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto">

              <article>

                <header className="mb-8">
                  {/* Title and excerpt */}
                  <PageHeader
                    {...demoPost}
                    headerClassname="md:text-left"
                  />

                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                      <Image className="rounded-full shrink-0 mr-4" src={demoPost.authorImg} width={40} height={40} alt={demoPost.author} />
                      <div>
                        <span className="font-medium text-gray-200">{demoPost.author}</span>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500"><PostDate dateString={demoPost.publishedAt} /></span>
                      </div>
                    </div>
                    {/* Article tags */}
                    {demoPost.tags &&
                      <div className="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                        <PostTags tags={demoPost.tags} />
                      </div>
                    }
                  </div>
                </header>

                {/* Article image */}
                {/* {demoPost.image &&
                  <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                    <Image className="w-full" src={demoPost.image} width={1024} height={576} alt={demoPost.title} priority />
                  </figure>
                } */}

                <div className="mb-8 lg:-ml-32 lg:-mr-32">
                  <DemoPostThumb demoPost={demoPost} />
                </div>

                {!! demoPost.integrations && (
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold font-inter mb-8">Integrations</h4>
                    {/* List container */}
                    <div className="flex flex-col border-t border-gray-200">
                      {demoPost.integrations.map((integration, index) => (
                        <DemoPostItemIntegration key={index} {...integration} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Article content */}
                <PostMdx code={demoPost.body.code} />

                <hr className="w-full h-px pt-px mt-16 bg-gray-200 border-0" />

                {/* Page navigation */}
                <div className="py-8 space-y-6 sm:space-y-0 sm:space-x-4">
                  <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
      <Newsletter label="Want more demo videos?" />
    </>
  )
}