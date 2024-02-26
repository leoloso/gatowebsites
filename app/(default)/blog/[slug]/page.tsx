import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PostDate from '@/components/post-date'
import { PostMdx } from '@/components/mdx/post-mdx'
import PostNav from './post-nav'
import PostTags from '@/components/post-tags'
import AppConfig from '@/app/app.config'
import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) return

  const { title, summary: description } = post

  return {
    title,
    description,
  }
}

export default async function SingleVideoPost({ params }: {
  params: { slug: string }
}) {

  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  return (
    <>
      <section className="relative">

        <StunningBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto lg:max-w-none">

              <article>

                {/* Article header */}
                <header className="max-w-3xl mx-auto mb-20">
                  {/* Title */}
                  <h1 className="h1 text-center mb-4">{post.title}</h1>
                </header>

                {/* Article content */}
                <div className="lg:flex lg:justify-between">

                  {/* Sidebar */}
                  <PostNav />

                  {/* Main content */}
                  <div className='min-w-0'>

                    {/* Article meta */}
                    <div className="md:flex md:items-center md:justify-between mt-3">
                      <div className="flex items-center mb-6">
                        <div className="flex shrink-0 mr-3">
                          <a className="relative" href="#0">
                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                            <Image className="relative rounded-full" src={post.authorImg} width={32} height={32} alt={post.author} />
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-600">By </span>
                          <a className="font-medium hover:underline" href="#0">{post.author}</a>
                          <span className="text-gray-600"> · <PostDate dateString={post.publishedAt} /></span>
                        </div>
                      </div>
                      {/* Article tags */}
                      {post.tags &&
                        <div className="flex justify-center mt-4 md:mt-0 items-center mb-6">
                          <PostTags tags={post.tags} />
                        </div>
                      }
                    </div>
                    <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                    {/* Article body */}
                    <div>
                      <PostMdx code={post.body.code} />
                    </div>

                    <div className="text-lg text-gray-600">
                      <hr className="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                      <div className="mt-8">
                        Interested in more tips like this? Check out <a className="text-gray-500 underline" href="#0">Introducing the Testing Field VideoPost</a>.
                      </div>
                      <div className="mt-6">
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