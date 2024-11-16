import { sortAlphabetically } from '@gato/utils/content/sort'

export function getPostTags(posts: Array<{tags: string[]}>): Array<string> {
  return posts
    .map((post) => post.tags || [])
    .flat(1)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}

export function getAllPostTagColors(allPostTags: Array<string>, colors: Array<string>) {
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
