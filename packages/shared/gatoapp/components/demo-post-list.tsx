'use client'

import DemoPostPostItem from 'gatoapp/components/demo-post-item'
import AppSettings from 'gatoapp/app/app.settings'

import { useSearchParams } from 'next/navigation';
import { DemoPost } from 'gatoapp/types/types';
import clsx from 'clsx';

export default function DemoPostList({
  demoPosts
}: {
  demoPosts: Array<DemoPost>
}) {

  // Paginate posts
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const firstPostPos = (currentPage - 1) * AppSettings.postsPerPage.demos

  const bgClassnames = [
    "bg-purple-600 dark:bg-purple-900",
    "bg-sky-500 dark:bg-sky-700",
    "bg-blue-600 dark:bg-blue-900",
    "bg-cyan-500 dark:bg-cyan-700",
    "bg-indigo-600 dark:bg-indigo-900",
    "bg-violet-500 dark:bg-violet-700",
  ]

// Pagination
 const paginagedDemoPosts = demoPosts
   .slice(firstPostPos, firstPostPos + AppSettings.postsPerPage.demos)
  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
      {paginagedDemoPosts.map((demoPost, index) => (
        <DemoPostPostItem
          key={index} demoPost={demoPost}
          bgClassname={clsx(bgClassnames[index % bgClassnames.length])}
        />
      ))}
    </div>
  )
}
