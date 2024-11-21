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
  slug: string,
  urlPath: string,
}

export type DemoPost = {
  // /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'DemoPost'
  title: string
  seoTitle?: string | undefined
  publishedAt: IsoDateTimeString
  leading: string
  description: string
  seoDescription?: string | undefined
  author: string
  authorImg: string
  tags?: string[] | undefined
  image?: string | undefined
  targetImages: string[]
  integrations?: PostIntegration[] | undefined
  /** MDX file body */
  body: MDX
  slug: string,
  urlPath: string,
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
  slug: string,
  urlPath: string,
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
  slug: string,
  urlPath: string,
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

export type Feature = {
  // /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'Feature'
  title: string
  seoTitle?: string | undefined
  description: string
  seoDescription?: string | undefined
  featured?: boolean | undefined
  relatedGuides?: RelatedGuide[] | undefined
  order: number
  image?: string | undefined
  icon?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string,
  urlPath: string,
}

export type RelatedGuide = {
  // /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'RelatedGuide'
  topic: string
  slug: string

}

/** Nested types */
export type PostIntegration = {
  // /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  type: 'PostIntegration'
  name: string
  image: string
  url: string

}
