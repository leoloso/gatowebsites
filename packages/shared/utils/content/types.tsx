/**
 * Types: copy/pasted from ContentLayer.
 * Needed to provide the type in AppContentProvider
 */
export type Doc = {
  // /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  // type: 'Doc'
  title: string
  // seoTitle?: string | undefined
  // description: string
  // seoDescription?: string | undefined
  order: number
  // /** MDX file body */
  // body: MDX
  section: string
  topicSlug: string
  slug: string
}

export type DocTopic = {
  // /** File path relative to `contentDirPath` */
  // _id: string
  // _raw: Local.RawDocumentData
  // type: 'DocTopic'
  name: string
  order: number
  // /** MDX file body */
  // body: MDX
  section: string
  slug: string
}