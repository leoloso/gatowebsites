import { Snippet } from '@gato/types/types';
import { useAppContentProvider } from '@gato/app/appcontent-provider'

export function getSnippet(slug: string): Snippet {
  const { allSnippets } = useAppContentProvider()

  const snippet = allSnippets.find((snippet) => snippet.slug === slug)
  if (!snippet) {
    throw new Error(`There is no Snippet with slug '${slug}'`)
  }
  return snippet
}
