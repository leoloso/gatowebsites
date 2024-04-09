'use client'

import AppSettings from '@/app/app.settings'

import { useSearchParams } from 'next/navigation';
import { BlogPost } from '@/.contentlayer/generated';
import BlogPostItem from './blog-post-item';

export default function BlogPostList({
  blogPosts
}: {
  blogPosts: Array<BlogPost>
}) {

  // Paginate posts
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const firstPostPos = (currentPage - 1) * AppSettings.demoPostsPerPage

  
// Pagination
 const paginagedBlogPosts = blogPosts
   .slice(firstPostPos, firstPostPos + AppSettings.demoPostsPerPage)
  return (
    <div className="md:grow -mt-4">
      {paginagedBlogPosts.map((blogPost, index) => (
        <BlogPostItem key={index} post={blogPost} />
      ))}
    </div>
  )
}
