// 'use client'

import { allDemoPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from '@/components/post-tags'
import DemoPostPostItem from '@/components/demo-post-item'

import Newsletter from '@/components/newsletter'
import { getDemoPostURLPath } from '@/utils/content/application-urls'
import StunningBackground from '@/components/stunning-background'
import { sortByPublishedAt } from '@/utils/content/sort'
import PageHeader from '@/components/page-header'
import Pagination from '@/components/pagination'
import AppSettings from '@/app/app.settings'

// import { useSearchParams } from 'next/navigation';

export const metadata = {
  title: 'Demos - Gato GraphQL',
  description: 'Tutorials to learn what you can accomplish with Gato GraphQL',
}

export default function Demos() {

  // Sort demoPosts by date
  allDemoPosts.sort(sortByPublishedAt)  

  const featuredDemoPost = allDemoPosts[0]

  // Paginate posts
  // const searchParams = useSearchParams();
  // const currentPage = Number(searchParams.get('page')) || 1;
  const currentPage = 1;

  const firstPostPos = (currentPage - 1) * AppSettings.demoPostsPerPage
  const demoPosts = allDemoPosts.slice(1) // Remove the featured image

  const totalPages = Math.ceil(demoPosts.length / AppSettings.demoPostsPerPage)

   // Pagination
  const paginagedDemoPosts = demoPosts
    .slice(firstPostPos, firstPostPos + AppSettings.demoPostsPerPage)

  return (
    <>
      <section className="relative">

        <StunningBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <PageHeader
              leading="Gato GraphQL demos"
              title="Learn how to use Gato GraphQL with videos"
              headerClassname="md:text-left mx-0"
            />

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <Link href={getDemoPostURLPath(featuredDemoPost)} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                  <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                  {featuredDemoPost.image &&
                    <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={featuredDemoPost.image} width="540" height="303" alt={featuredDemoPost.title} />
                    </figure>
                  }
                </Link>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <div className="mb-3">
                      {featuredDemoPost.tags &&
                        <div className="mb-3">
                          <PostTags tags={featuredDemoPost.tags} />
                        </div>
                      }
                    </div>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <Link href={getDemoPostURLPath(featuredDemoPost)} className="hover:text-gray-100 transition duration-150 ease-in-out">{featuredDemoPost.title}</Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">{featuredDemoPost.summary}</p>
                  <footer className="flex items-center mt-4">
                    <Link href="#">
                      <img className="rounded-full shrink-0 mr-4" src={featuredDemoPost.authorImg} width={40} height={40} alt={featuredDemoPost.author} />
                    </Link>
                    <div>
                      <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{featuredDemoPost.author}</Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500"><PostDate dateString={featuredDemoPost.publishedAt} /></span>
                    </div>
                  </footer>
                </div>
              </article>
            </div>

            {/*  Articles list */}
            <div className="max-w-3xl mx-auto md:max-w-none">

              {/*  Section title */}
              <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Latest demos</h4>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {paginagedDemoPosts.map((demoPost, demoPostIndex) => (
                  <DemoPostPostItem key={demoPostIndex} demoPost={demoPost} />
                ))}
              </div>

            </div>

            {/*  Pagination */}
            <Pagination totalPages={totalPages} />

          </div>
        </div>
      </section>  
      <Newsletter label="Want more demo videos?" />
    </>
  )
}