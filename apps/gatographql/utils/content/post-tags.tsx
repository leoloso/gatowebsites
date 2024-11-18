import { allBlogPosts, allDemoPosts } from '@/.contentlayer/generated'
import { getPostTags, getAllPostTagColors } from '@gato/utils/content/post-tags'

export function getAllPostTags(): Array<string> {
  return [
    ...getPostTags(allBlogPosts.map( (post) => ({ tags: post.tags || [] }))),
    ...getPostTags(allDemoPosts.map( (post) => ({ tags: post.tags || [] })))
  ]
}

export function getPostTagColors(colors: Array<string>) {
  return getAllPostTagColors(colors, getAllPostTags())
}
