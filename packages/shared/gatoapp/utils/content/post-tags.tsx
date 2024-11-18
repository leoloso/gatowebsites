'use client'

import { sortAlphabetically } from 'gatoapp/utils/content/sort'
import { useAppContentProvider } from 'gatoapp/app/appcontent-provider'

export function getPostTags(posts: Array<{tags: string[]}>): Array<string> {
  return posts
    .map((post) => post.tags || [])
    .flat(1)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}

export function getAllPostTags(): Array<string> {
  const { allBlogPosts, allDemoPosts } = useAppContentProvider()

  return [
    ...getPostTags(allBlogPosts.map( (post) => ({ tags: post.tags || [] }))),
    ...getPostTags(allDemoPosts.map( (post) => ({ tags: post.tags || [] })))
  ]
}

export function getAllPostTagColors(
  colors: Array<string>,
  allPostTags?: Array<string>,
) {
  allPostTags = allPostTags || getAllPostTags()
  const postTags = allPostTags.sort(sortAlphabetically).map((tag) => tag.toLocaleLowerCase())
  let postTagColors : { [key: string]: string } = {}
  postTags.forEach(function (postTag: string | undefined, index: number) {
    if (!postTag) {
      return;
    }
    postTagColors[postTag] = colors[index % colors.length]
  })
  return postTagColors
}
