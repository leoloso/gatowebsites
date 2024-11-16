'use client'

import { allDemoPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
import PostDate from '@gato/components/post-date'
import PostTags from '@gato/components/post-tags'
import { getDemoPostURLPath } from '@/utils/content/application-urls'
import { sortByPublishedAt } from '@gato/utils/content/sort'
import PageHeader from '@gato/components/page-header'
import Pagination from '@gato/components/pagination'
import AppSettings from '@/app/app.settings'
import DemoPostList from '@gato/components/demo-post-list'
import DemoPostThumb from '@gato/components/demo-post-thumb'
import { Suspense } from 'react'
import AppConfig from '@/app/app.config'
import { useSearchParams } from 'next/navigation';
import CampaignBanner from '@gato/components/ui/campaigns/campaign-banner'

export default function DemoPostsSection() {

  // Sort demoPosts by date
  allDemoPosts.sort(sortByPublishedAt)  
  
  // Filter posts by tag
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const featuredDemoPost = allDemoPosts[0]

  const demoPosts = tag ? allDemoPosts : allDemoPosts.slice(1) // Remove the featured image

  const filteredDemoPosts = tag ? demoPosts.filter((post) => (post.tags?.map((tag) => tag.toLocaleLowerCase()).includes(tag.toLocaleLowerCase()))) : demoPosts

  const totalPages = Math.ceil(filteredDemoPosts.length / AppSettings.postsPerPage.demos)

  return (        
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        <CampaignBanner />

        {/*  Page header */}
        <PageHeader
          leading="Hands-on videos demonstrating Gato GraphQL"
          title="Gato GraphQL demos"
          description='Learn how Gato GraphQL can be used for many use cases, and how to do it by yourself'
          headerClassname="md:text-left mx-0"
        />

        {/*  Featured article */}
        {!tag && (
          <div className="pb-12 md:pb-20">
            <article className="max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <Link href={getDemoPostURLPath(featuredDemoPost)} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <div className="relative overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <DemoPostThumb
                    demoPost={featuredDemoPost}
                    paddingClassname="py-5 px-4 md:py-8 md:px-6"
                  />
                </div>
              </Link>
              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    {featuredDemoPost.tags &&
                      <div className="mb-3">
                        <PostTags tags={featuredDemoPost.tags} baseURL={`/${AppConfig.paths.demoPosts}`} />
                      </div>
                    }
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <Link href={getDemoPostURLPath(featuredDemoPost)} className="hover:text-purple-300 transition duration-150 ease-in-out">{featuredDemoPost.title}</Link>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 grow">{featuredDemoPost.description}</p>
                <footer className="flex items-center mt-4">
                  <img className="rounded-full shrink-0 mr-4" src={featuredDemoPost.authorImg} width={40} height={40} alt={featuredDemoPost.author} />
                  <div>
                    <span className="font-medium text-gray-200">{featuredDemoPost.author}</span>
                    <span className="text-gray-700"> - </span>
                    <span className="text-gray-500"><PostDate dateString={featuredDemoPost.publishedAt} /></span>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        )}

        {/*  Articles list */}
        <div className="max-w-3xl mx-auto md:max-w-none">

          {/*  Section title */}
          {!tag && (
            <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Latest demos</h4>
          )}
          {!! tag && (
              <div className="h4 pb-6 mb-10 border-b border-gray-700 flex items-center" data-aos="fade-up">
                <h4 className='mr-2'>Latest demos with tag</h4>
                <PostTags tags={[tag]} tagClassName='text-sm' />
                <Link href={`/${AppConfig.paths.demoPosts}`} className='flex items-center text-sm ml-4 text-slate-100 hover:text-slate-300 fill-slate-100 hover:fill-slate-300 transition duration-150 ease-in-out'>
                  <svg className="shrink-0 mr-1" xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 12 12">
                    <g transform="matrix(0.75 0 0 0.75 0 0)">
                      <path d="M4,14.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L13.47,3.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L4.53,14.53c-.146,.146-.338,.22-.53,.22Z" data-color="color-2"></path>
                      <path d="M14,14.75c-.192,0-.384-.073-.53-.22L3.47,4.53c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0L14.53,13.47c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z" data-color="color-2"></path>
                    </g>
                  </svg>
                  Clear
                </Link>
              </div>
            )}

          {/*  Articles container */}
          <Suspense>
            <DemoPostList demoPosts={filteredDemoPosts} />
          </Suspense>

        </div>

        {/*  Pagination */}
        <Suspense>
          <Pagination totalPages={totalPages} />
        </Suspense>

      </div>
    </div>
  )
}