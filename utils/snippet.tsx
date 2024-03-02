import { Snippet, allSnippets } from 'contentlayer/generated'

export function getSnippet(slug: string): Snippet | undefined {

  return allSnippets.find((snippet) => snippet.slug === slug)
}
