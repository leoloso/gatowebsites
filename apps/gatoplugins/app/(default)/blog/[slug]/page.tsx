import type { Metadata, ResolvingMetadata } from 'next'
import {
  allBlogPosts,
} from '@/.contentlayer/generated'
import { notFound } from 'next/navigation'
import BlogSinglePost from 'gatoapp/components/blog/blog-single-post'
import { sortByPublishedAt } from 'gatoapp/utils/content/sort'
import generateAppRssFeed from '@/utils/rss'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

export async function generateStaticParams() {
  // Generate the RSS feed
  await generateAppRssFeed();

  return allBlogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const blogPost = allBlogPosts.find((blogPosts) => blogPosts.slug === params.slug)

  if (!blogPost) return

  const { title, seoTitle, description, seoDescription } = blogPost

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: blogPost.image ? [blogPost.image] : previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: blogPost.image ? [blogPost.image] : previousImages,
    },
  }
}

export default async function SinglePost({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const blogPosts = allBlogPosts.sort(sortByPublishedAt)
  const blogPostIndex = blogPosts.findIndex((blogPost) => blogPost.slug === params.slug)

  if (blogPostIndex === -1) notFound()

  const blogPost = blogPosts[blogPostIndex]
  
  return (
    <BlogSinglePost
      blogPost={blogPost}
    />
  )
}