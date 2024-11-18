'use client'

import AppSettings from '@gato/app/app.settings'

import { useSearchParams } from 'next/navigation';
import { BlogPost } from '@gato/types/types';
import BlogPostItem from './blog-post-item';

export default function BlogPostList({
  blogPosts
}: {
  blogPosts: Array<BlogPost>
}) {

  // Paginate posts
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const firstPostPos = (currentPage - 1) * AppSettings.postsPerPage.blog

  
// Pagination
 const paginagedBlogPosts = blogPosts
   .slice(firstPostPos, firstPostPos + AppSettings.postsPerPage.blog)
  return (
    <div className="md:grow -mt-4">
      {paginagedBlogPosts.map((blogPost, index) => (
        <BlogPostItem key={index} post={blogPost} />
      ))}
    </div>
  )
}
