import { Post, allPosts } from 'contentlayer/generated'

export function getFeaturedPosts(posts: Array<Post> | undefined = allPosts) {
  return posts.filter((post) => post.featured)
}

export function getPostTags(posts: Array<Post> | undefined = allPosts) {
  return posts
    .map((post) => post.tags)
    .flat()
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
