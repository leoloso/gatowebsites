'use client'

import DemoPostPostItem from '@/components/demo-post-item'
import AppSettings from '@/app/app.settings'

import { useSearchParams } from 'next/navigation';
import { DemoPost } from '@/.contentlayer/generated';

export default function DemoPostList({
  demoPosts
}: {
  demoPosts: Array<DemoPost>
}) {

  // Paginate posts
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const firstPostPos = (currentPage - 1) * AppSettings.demoPostsPerPage

// Pagination
 const paginagedDemoPosts = demoPosts
   .slice(firstPostPos, firstPostPos + AppSettings.demoPostsPerPage)
  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
      {paginagedDemoPosts.map((demoPost, demoPostIndex) => (
        <DemoPostPostItem key={demoPostIndex} demoPost={demoPost} />
      ))}
    </div>
  )
}
