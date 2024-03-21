import dotenv from "dotenv"
import algoliaSearch from "algoliasearch"
import { allPosts } from 'contentlayer/generated'
import { maybeAddDomain } from "../utils/domain"

dotenv.config()

export interface SearchObject {
  objectID: string // objectID is needed for Algolia
  title: string
  description: string
  slug: string
  date: string
  thumbnail?: string
}

async function getAllPostsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allPosts?.map((post) => {
      return {
        objectID: `post_${post.slug}`, // objectID must be unique and consistent on each build
        title: post.title,
        description: post.summary,
        slug: post.slug,
        date: post.publishedAt,
        thumbnail: post.image ? maybeAddDomain(post.image) : undefined,
      }
    }) || []
  )
}

;(async function () {
  dotenv.config()
  try {
    const posts = await getAllPostsTransformed()
    const client = algoliaSearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY!
    )
    const searchIndex = client.initIndex('website')
    const algoliaSearchIndexResponse = await searchIndex.saveObjects([...posts]) // Add any more data needed to this array
    console.log(
      `⭐️⭐️ Successfully added ${algoliaSearchIndexResponse.objectIDs.length} records to Algolia search. ⭐️⭐️`
    )
  } catch (err) {
    console.error(err)
  }
})()