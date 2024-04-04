import type { Metadata } from 'next'
import { allDemoPosts, DemoPost } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from '@/components/post-tags'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'
import ArticleNavigation from '@/components/ui/article-navigation'
import { getPrevNextArticles } from '@/utils/content/document'
import { sortByPublishedAt } from '@/utils/content/sort'

export async function generateStaticParams() {
  return allDemoPosts.map((demoPost) => ({
    slug: demoPost.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const demoPost = allDemoPosts.find((demoPost) => demoPost.slug === params.slug)

  if (!demoPost) return

  const { title, summary: description } = demoPost

  return {
    title,
    description,
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
                  <div className="text-center md:text-left">
                    <h1 className="h1 mb-4" data-aos="fade-up">{demoPost.title}</h1>
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{demoPost.summary}</p>
                  </div>
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                      <Link href="#">
                        <Image className="rounded-full shrink-0 mr-4" src={demoPost.authorImg} width={40} height={40} alt={demoPost.author} />
                      </Link>
                      <div>
                        <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{demoPost.author}</Link>
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
                {demoPost.image &&
                  <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                    <Image className="w-full" src={demoPost.image} width={1024} height={576} alt={demoPost.title} priority />
                  </figure>
                }

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