import algoliaSearch from "algoliasearch"
import {
  allPosts,
  // allUpdates,
  // allVideoPosts,
  allDocs,
  allExtensions,
  allFeatures,
} from '@/.contentlayer/generated'
import { ALGOLIA_API_CREDENTIALS } from '@/data/env/algolia'
import {
  getDocURLPath,
  getExtensionURLPath,
  getFeatureURLPath,
  getPostURLPath,
} from "@/utils/content/application-urls"
import slugify from "@sindresorhus/slugify"
import { isAdminUser } from "@/utils/admin"
import { NextApiRequest } from "next"

export interface SearchObject {
  objectID: string // objectID is needed for Algolia
  title: string
  description: string
  slug: string
  date?: string
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

async function getAllDocsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allDocs?.map((doc) => {
      const urlPath = getDocURLPath(doc)
      return {
        // objectID must be unique and consistent on each build
        objectID: slugify(urlPath),
        title: doc.title,
        description: doc.description,
        slug: doc.slug,
        urlPath: urlPath,
      }
    }) || []
  )
}

async function getAllExtensionsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allExtensions?.map((extension) => {
      const urlPath = getExtensionURLPath(extension)
      return {
        // objectID must be unique and consistent on each build
        objectID: slugify(urlPath),
        title: extension.title,
        description: extension.description,
        slug: extension.slug,
        urlPath: urlPath,
        thumbnail: extension.image,
      }
    }) || []
  )
}

async function getAllFeaturesTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allFeatures?.map((feature) => {
      const urlPath = getFeatureURLPath(feature)
      return {
        // objectID must be unique and consistent on each build
        objectID: slugify(urlPath),
        title: feature.title,
        description: feature.description,
        slug: feature.slug,
        urlPath: urlPath,
        thumbnail: feature.image,
      }
    }) || []
  )
}

export async function GET(request: NextApiRequest) {
  const query = request.query;
  const { apiKey } = query;
  if (!apiKey || typeof apiKey !== 'string' || !isAdminUser(apiKey)) {
    return new Response(`⛔️ You are not allowed here`)
  }
  try {
    const posts = await getAllPostsTransformed()
    const docs = await getAllDocsTransformed()
    const extensions = await getAllExtensionsTransformed()
    const features = await getAllFeaturesTransformed()
    const client = algoliaSearch(
      ALGOLIA_API_CREDENTIALS.appId,
      ALGOLIA_API_CREDENTIALS.searchAdminKey
    )
    const searchIndex = client.initIndex(ALGOLIA_API_CREDENTIALS.indexName)
    const algoliaSearchIndexResponse = await searchIndex.saveObjects([
      ...posts,
      ...docs,
      ...extensions,
      ...features
    ])
    
    return new Response(`⭐️⭐️ Successfully added ${algoliaSearchIndexResponse.objectIDs.length} records to Algolia search. ⭐️⭐️`)
  } catch (err) {
    console.error(err)
  }
};