import { BlogPost } from 'gatoapp/types/types'

export function getFeaturedBlogPosts(posts: Array<BlogPost>) {
  return posts.filter((post) => post.featured)
}
