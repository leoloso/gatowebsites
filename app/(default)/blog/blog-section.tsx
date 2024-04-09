'use client'

import { allBlogPosts } from 'contentlayer/generated'
import PopularPosts from './popular-posts'
import { sortByPublishedAt } from '@/utils/content/sort'
import PageHeader from '@/components/page-header'
import BlogPostList from '@/components/blog-post-list'
import { Suspense } from 'react'
import Pagination from '@/components/pagination'
import AppSettings from '@/app/app.settings'
import { useSearchParams } from 'next/navigation';
import PostTags from '@/components/post-tags'
import Link from 'next/link'
import AppConfig from '@/app/app.config'

export default function BlogSection() {

  // Sort posts by date
  const blogPosts = allBlogPosts.sort(sortByPublishedAt) 
  
  // Filter posts by tag
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const filteredBlogPosts = tag ? blogPosts.filter((post) => (post.tags?.includes(tag))) : blogPosts

  const totalPages = Math.ceil(filteredBlogPosts.length / AppSettings.postsPerPage.blog)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        {/* Page header */}
        <PageHeader
          leading="Our blog"
          title="query { posts { content } }"
          description='Stay up to date on the latest from Gato GraphQL and our engineering practices.'
        />
        {/* Main content */}
        <div className="md:flex md:justify-between">

          <div>
            {!! tag && (
              <div className="text-lg font-bold leading-snug tracking-tight mb-4 flex pb-2 border-b border-slate-400">
                <h3 className='mr-2'>Entries with tag</h3>
                <PostTags tags={[tag]} />
                <Link href={AppConfig.paths.blog} className='flex items-center text-sm ml-1 text-slate-100 hover:text-slate-300 fill-slate-100 hover:fill-slate-300 transition duration-150 ease-in-out'>
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
            <Suspense>
              {/* Articles container */}
              <BlogPostList blogPosts={filteredBlogPosts} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className="hidden sm:block relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">
            <PopularPosts />
            {/* <Topics /> */}
          </aside>

        </div>

        {/*  Pagination */}
        <Suspense>
          <Pagination totalPages={totalPages} />
        </Suspense>

      </div>
    </div>
  )
}
