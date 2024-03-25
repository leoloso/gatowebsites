import { Post, allPosts } from 'contentlayer/generated'
import { sortAlphabetically } from './sort'

export function getPostTags(posts: Array<Post> | undefined = allPosts): Array<string> {
  return posts
    .map((post) => post.tags || [])
    .flat(1)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}

export function getPostTagColors(colors: Array<string>, posts: Array<Post> | undefined = allPosts) {
  const postTags = getPostTags(posts).sort(sortAlphabetically)
  let postTagColors : { [key: string]: string } = {}
  postTags.forEach(function (postTag: string | undefined, index: number) {
    if (!postTag) {
      return;
    }
    postTagColors[postTag] = colors[index % colors.length]
  })
  return postTagColors
}
