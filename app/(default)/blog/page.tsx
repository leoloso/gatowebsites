import { allBlogPosts } from 'contentlayer/generated'
import BlogPostItem from '@/components/blog-post-item'
import PopularPosts from './popular-posts'
import Topics from './topics'
import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'
import { sortByPublishedAt } from '@/utils/content/sort'
import PageHeader from '@/components/page-header'
import BlogSchemaJsonLdScript from '@/components/schema/blog-schema-json-ld'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import BlogPostList from '@/components/blog-post-list'
import { Suspense } from 'react'
import Pagination from '@/components/pagination'
import AppSettings from '@/app/app.settings'

const pageTitle = 'Blog'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Stay up to date on the latest from Gato GraphQL and our engineering practices',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
}

export default function Blog() {

  // Sort posts by date
  const blogPosts = allBlogPosts.sort(sortByPublishedAt) 
  const totalPages = Math.ceil(blogPosts.length / AppSettings.demoPostsPerPage)
  return (
    <>
      <BlogSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />

      <section className="relative">
        <StunningBackground />
        
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

              {/* Articles container */}
              <Suspense>
                <BlogPostList blogPosts={blogPosts} />
              </Suspense>

              {/* Sidebar */}
              <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">
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
      </section>
      <Newsletter label="Want more posts & tutorials?" />
    </>
  )
}
