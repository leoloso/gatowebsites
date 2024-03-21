import algoliaSearch from "algoliasearch"
import { allPosts } from 'contentlayer/generated'
import { ALGOLIA_API_CREDENTIALS } from '@/data/env/algolia'
import { getPostURLPath } from "@/utils/content/application-urls"
import slugify from "@sindresorhus/slugify"

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
      const urlPath = getPostURLPath(post)
      return {
        // objectID must be unique and consistent on each build
        objectID: slugify(urlPath),
        title: post.title,
        description: post.summary,
        slug: post.slug,
        urlPath: urlPath,
        date: post.publishedAt,
        thumbnail: post.image,
      }
    }) || []
  )
}

export async function GET(request: Request) {
  try {
    const posts = await getAllPostsTransformed()
    const client = algoliaSearch(
      ALGOLIA_API_CREDENTIALS.appId,
      ALGOLIA_API_CREDENTIALS.searchAdminKey
    )
    const searchIndex = client.initIndex(ALGOLIA_API_CREDENTIALS.indexName)
    const algoliaSearchIndexResponse = await searchIndex.saveObjects([...posts]) // Add any more data needed to this array
    
    return new Response(`⭐️⭐️ Successfully added ${algoliaSearchIndexResponse.objectIDs.length} records to Algolia search. ⭐️⭐️`)
  } catch (err) {
    console.error(err)
  }
};