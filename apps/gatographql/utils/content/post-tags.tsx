import { allBlogPosts, allDemoPosts } from '@/.contentlayer/generated'
import { sortAlphabetically } from './sort'
import { Post } from './types'

export function getPostTags(posts: Array<Post>): Array<string> {
  return posts
    .map((post) => post.tags || [])
    .flat(1)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}

export function getAllPostTags(): Array<string> {
  return [
    ...getPostTags(allBlogPosts),
    ...getPostTags(allDemoPosts)
  ]
}

export function getPostTagColors(colors: Array<string>) {
  const postTags = getAllPostTags().sort(sortAlphabetically).map((tag) => tag.toLocaleLowerCase())
  let postTagColors : { [key: string]: string } = {}
  postTags.forEach(function (postTag: string | undefined, index: number) {
    if (!postTag) {
      return;
    }
    postTagColors[postTag] = colors[index % colors.length]
  })
  return postTagColors
}