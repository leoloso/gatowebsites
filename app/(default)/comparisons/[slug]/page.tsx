import type { Metadata } from 'next'
import {
  allComparisonPosts,
} from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PostMdx } from '@/components/mdx/post-mdx'
import PostNav from './post-nav'
import AppConfig from '@/app/app.config'
import StunningBackground from '@/components/stunning-background'
import { sortByOrder, sortByOrderAndTitleAndTitle } from '@/utils/content/sort'
import { getPostURL } from '@/utils/content/application-urls'
import ArticleSchemaJsonLdScript from '@/components/schema/article-schema-json-ld';
import Cta from '@/components/cta-02'
import PageHeader from '@/components/page-header'

export async function generateStaticParams() {
  return allComparisonPosts.map((comparisonPost) => ({
    slug: comparisonPost.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const comparisonPost = allComparisonPosts.find((comparisonPost) => comparisonPost.slug === params.slug)

  if (!comparisonPost) return

  const { title, summary: description } = comparisonPost

  return {
    title,
    description,
    ...comparisonPost.image ? {
      openGraph: {
        images: [comparisonPost.image],
      },
      twitter: {
        images: [comparisonPost.image],
      }
    } : {},
  }
}

export default async function SingleComparisonPost({ params }: {
  params: { slug: string }
}) {

  // Sort comparisonPosts. Needed to find the prev/next items below
  const comparisonPosts = allComparisonPosts.sort(sortByOrderAndTitle)
  const comparisonPostIndex = comparisonPosts.findIndex((comparisonPost) => comparisonPost.slug === params.slug)

  if (comparisonPostIndex === -1) notFound()

  const comparisonPost = comparisonPosts[comparisonPostIndex]
  
  return (
    <>
      <ArticleSchemaJsonLdScript
        headline={comparisonPost.title}
        url={getPostURL(comparisonPost)}
        image={comparisonPost.image}
        description={comparisonPost.summary}
      />

      <section className="relative">
        <StunningBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto lg:max-w-none">

              <article>

                {/* Article header */}
                <PageHeader
                  leading={comparisonPost.leading}
                  title={comparisonPost.title}
                  description={comparisonPost.description}
                />

                {/* Article image */}
                {comparisonPost.image &&
                  <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="200">
                    <Image className="w-full" src={comparisonPost.image} width={1024} height={576} alt={comparisonPost.title} priority />
                  </figure>
                }

                {/* Article content */}
                <div className="lg:flex lg:justify-between">

                  {/* Sidebar */}
                  <PostNav />

                  {/* Main content */}
                  <div className='min-w-0'>

                    {/* Article body */}
                    <PostMdx code={comparisonPost.body.code} />

                    <hr className="w-full h-px pt-px mt-16 bg-gray-200 border-0" />

                    {/* Page navigation */}
                    {/* <div>
                      <ArticleNavigation prevArticle={prevPost} nextArticle={nextPost} />
                    </div> */}

                    <div className="text-lg text-gray-600">
                      <div className="mt-8">
                        <Link href={`/${AppConfig.paths.blog}`} className="inline-flex items-center text-base text-blue-600 font-medium hover:underline">
                          <svg className="w-3 h-3 fill-current text-blue-400 shrink-0 mr-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                          </svg>
                          <span>Back to all comparisons</span>
                        </Link>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Article footer */}
              </article>

            </div>

          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}