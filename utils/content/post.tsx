import { BlogPost, allBlogPosts } from 'contentlayer/generated'

export function getFeaturedBlogPosts(posts: Array<BlogPost> | undefined = allBlogPosts) {
  return posts.filter((post) => post.featured)
}
