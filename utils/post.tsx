import { Post, allPosts } from 'contentlayer/generated'

export function getFeaturedPosts(posts: Array<Post> | undefined = allPosts) {
  return posts.filter((post) => post.featured)
}
