import type { Metadata, ResolvingMetadata } from 'next'
import {
  // BlogPost,
  allBlogPosts,
} from '@/.contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PostDate from '@gato/components/src/post-date'
import { PostMdx } from '@gato/components/src/mdx/post-mdx'
import PostNav from '@gato/components/src/post-nav'
import PostTags from '@gato/components/src/post-tags'
import AppConfig from '@/app/app.config'
import StunningBackground from '@gato/components/src/stunning-background'
import Newsletter from '@gato/components/src/newsletter'
// import ArticleNavigation from '@gato/components/src/ui/article-navigation'
import { sortByPublishedAt } from '@/utils/content/sort'
// import { getPrevNextArticles } from '@/utils/content/document'
import generateRssFeed from '@/utils/rss'
import { getBlogPostURL } from '@/utils/content/application-urls'
import BlogPostingSchemaJsonLdScript from '@gato/components/src/schema/blogposting-schema-json-ld';
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import CampaignBanner from '@gato/components/src/ui/campaigns/campaign-banner'

export async function generateStaticParams() {
  // Generate the RSS feed
  await generateRssFeed();

  return allBlogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const blogPost = allBlogPosts.find((blogPosts) => blogPosts.slug === params.slug)

  if (!blogPost) return

  const { title, seoTitle, description, seoDescription } = blogPost

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: blogPost.image ? [blogPost.image] : previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: blogPost.image ? [blogPost.image] : previousImages,
    },
  }
}

export default async function SinglePost({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const blogPosts = allBlogPosts.sort(sortByPublishedAt)
  const blogPostIndex = blogPosts.findIndex((blogPost) => blogPost.slug === params.slug)

  if (blogPostIndex === -1) notFound()

  const blogPost = blogPosts[blogPostIndex]
  
  {/* Page navigation */}
  // const paginationArticles = getPrevNextArticles(blogPosts, blogPostIndex)
  // const prevPost = paginationArticles.prev as BlogPost
  // const nextPost = paginationArticles.next as BlogPost

  const contentId = 'main-content'

  return (
    <>
      <BlogPostingSchemaJsonLdScript
        headline={blogPost.title}
        url={getBlogPostURL(blogPost)}
        image={blogPost.image}
        description={blogPost.description}
        datePublished={blogPost.publishedAt}
      />

      <section className="relative">
        <StunningBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <CampaignBanner />

            <div className="max-w-3xl mx-auto lg:max-w-none">

              <article>

                {/* Article header */}
                <header className="max-w-3xl mx-auto mb-20">
                  {/* Title */}
                  <h1 className="h1 text-center mb-4">{blogPost.title}</h1>
                </header>

                {/* Article content */}
                <div className="lg:flex lg:justify-between">

                  {/* Sidebar */}
                  <PostNav contentId={contentId} />

                  {/* Main content */}
                  <div id={contentId} className='min-w-0'>

                    {/* Article meta */}
                    <div className="md:flex md:items-center md:justify-between mt-3">
                      <div className="flex items-center mb-6">
                        <div className="flex shrink-0 mr-3">
                          <span className="relative">
                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                            <Image className="relative rounded-full" src={blogPost.authorImg} width={32} height={32} alt={blogPost.author} />
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">By </span>
                          <span className="font-medium">{blogPost.author}</span>
                          <span className="text-gray-500"> · <PostDate dateString={blogPost.publishedAt} /></span>
                        </div>
                      </div>
                      {/* Article tags */}
                      {blogPost.tags &&
                        <div className="flex justify-center mt-4 md:mt-0 items-center mb-6">
                          <PostTags tags={blogPost.tags} baseURL={`/${AppConfig.paths.blog}`} />
                        </div>
                      }
                    </div>
                    <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                    {/* Article body */}
                    <PostMdx code={blogPost.body.code} />

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
                          <span>Back to all posts</span>
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
      <Newsletter label="Want more posts & tutorials?" />
    </>
  )
}