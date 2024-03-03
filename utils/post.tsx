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

export function getPostTagColors(posts: Array<Post> | undefined = allPosts) {
  const postTags = getPostTags(posts)
  let postTagColors : { [key: string]: string } = {}
  postTags.forEach(function (postTag: string | undefined, index: number) {
    if (!postTag) {
      return;
    }
    postTagColors[postTag] = colors[index]
  })
  return postTagColors
}
