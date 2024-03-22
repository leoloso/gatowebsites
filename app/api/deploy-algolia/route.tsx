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
import { SearchObject } from "@/components/search/algolia"
import AppSettings from "@/app/app.settings"

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
        urlPath: urlPath,
        slug: post.slug
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
        urlPath: urlPath,
        slug: doc.slug
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
        urlPath: urlPath,
        slug: extension.slug
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
        urlPath: urlPath,
        slug: feature.slug
      }
    }) || []
  )
}

export async function GET(request: NextApiRequest) {
  const url = request.url || ''
  const { searchParams } = new URL(url);
  const apiKey = searchParams.get('apiKey');
  if (!apiKey || typeof apiKey !== 'string' || !isAdminUser(apiKey)) {
    return new Response(`⛔️ You are not allowed here`, { status: 500 })
  }
  const searchFeaturesAndExtensions = AppSettings.searchFeaturesAndExtensions
  try {
    const posts = await getAllPostsTransformed()
    const docs = await getAllDocsTransformed()
    const extensions = searchFeaturesAndExtensions ? await getAllExtensionsTransformed() : []
    const features = searchFeaturesAndExtensions ? await getAllFeaturesTransformed() : []
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