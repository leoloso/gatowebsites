/**
 * Commented out as all code is currently unused.
 * Uncomment if providing another "Post" type that is
 * not part of the shared package.
 */
// import { allBlogPosts, allDemoPosts } from '@/.contentlayer/generated'
// import { getPostTags, getAllPostTagColors } from 'gatoapp/utils/content/post-tags'

// export function getAllPostTags(): Array<string> {
//   return [
//     ...getPostTags(allBlogPosts.map( (post) => ({ tags: post.tags || [] }))),
//     ...getPostTags(allDemoPosts.map( (post) => ({ tags: post.tags || [] })))
//   ]
// }

// export function getPostTagColors(colors: Array<string>) {
//   return getAllPostTagColors(colors, getAllPostTags())
// }
