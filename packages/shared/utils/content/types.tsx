import type { MDX, IsoDateTimeString } from 'contentlayer2/core'

/**
 * Types: copy/pasted from ContentLayer.
 * Needed to provide the type in AppContentProvider
 */
export type BlogPost = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'BlogPost'
  title: string
  seoTitle?: string | undefined
  publishedAt: IsoDateTimeString
  description: string
  seoDescription?: string | undefined
  featured?: boolean | undefined
  author: string
  authorImg: string
  tags?: string[] | undefined
  image?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
}

export type Doc = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'Doc'
  title: string
  seoTitle?: string | undefined
  description: string
  seoDescription?: string | undefined
  order: number
  /** MDX file body */
  body: MDX
  section: string
  topicSlug: string
  slug: string
}

export type DocTopic = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'DocTopic'
  name: string
  order: number
  /** MDX file body */
  body: MDX
  section: string
  slug: string
}

export type Page = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'Page'
  title: string
  seoTitle?: string | undefined
  description: string
  seoDescription?: string | undefined
  leading?: string | undefined
  lastModifiedAt?: IsoDateTimeString | undefined
  image?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
}

export type Snippet = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'Snippet'
  /** MDX file body */
  body: MDX
  slug: string
}

export type ShopURLByLicense = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'ShopURLByLicense'
  yearly: string
  ltd: string

}

export type ShopURLs = {
  /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'ShopURLs'
  dev: string
  defaultTier: ShopURLByLicense
  tier1: ShopURLByLicense
  tier2: ShopURLByLicense
  tier3: ShopURLByLicense
  tier4: ShopURLByLicense

}  

export type DataExports = {
  allBlogPosts: BlogPost[]
  allPages: Page[]
  allSnippets: Snippet[]
  allDocs: Doc[]
  allDocTopics: DocTopic[]
}
