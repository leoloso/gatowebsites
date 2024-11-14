import { Snippet, allSnippets } from 'contentlayer/generated'

export function getSnippet(slug: string): Snippet {

  const snippet = allSnippets.find((snippet) => snippet.slug === slug)
  if (!snippet) {
    throw new Error(`There is no Snippet with slug '${slug}'`)
  }
  return snippet
}
