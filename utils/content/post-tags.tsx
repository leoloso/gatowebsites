import { BlogPost, allBlogPosts } from 'contentlayer/generated'
import { sortAlphabetically } from './sort'

export function getBlogPostTags(posts: Array<BlogPost>): Array<string> {
  return posts
    .map((post) => post.tags || [])
    .flat(1)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}

export function getPostTags(): Array<string> {
  return [
    ...getBlogPostTags(allBlogPosts)
  ]
}

export function getPostTagColors(colors: Array<string>) {
  const postTags = getPostTags().sort(sortAlphabetically)
  let postTagColors : { [key: string]: string } = {}
  postTags.forEach(function (postTag: string | undefined, index: number) {
    if (!postTag) {
      return;
    }
    postTagColors[postTag] = colors[index % colors.length]
  })
  return postTagColors
}
