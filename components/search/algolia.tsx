import type { BaseHit } from 'instantsearch.js';

export interface SearchObject extends BaseHit {
  objectID: string // objectID is needed for Algolia
  title: string
  description: string
  urlPath: string,
  slug: string,
  content: string,
}
