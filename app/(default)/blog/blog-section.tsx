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
              <div className="text-lg font-bold leading-snug tracking-tight mb-4 inline-flex">
                <h3 className='mr-2'>Entries with tag</h3>
                <PostTags tags={[tag]} />
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
