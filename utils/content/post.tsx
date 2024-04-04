import { Post, allBlogPosts } from 'contentlayer/generated'

export function getFeaturedPosts(posts: Array<Post> | undefined = allBlogPosts) {
  return posts.filter((post) => post.featured)
}
