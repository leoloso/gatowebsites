import algoliaSearch from "algoliasearch"
import {
  allBlogPosts,
  allDemoPosts,
  allComparisonPosts,
  allExtensions,
  allFeatures,
  Doc,
} from '@/.contentlayer/generated'
import { ALGOLIA_API_CREDENTIALS } from '@/data/env/algolia'
import {
  getDocURLPath,
  getExtensionURLPath,
  getFeatureURLPath,
  getBlogPostURLPath,
  getDemoPostURLPath,
  getComparisonPostURLPath,
} from "@/utils/content/application-urls"
import { isAdminUser } from "@/utils/admin"
import { SearchObject, Sections } from "@/components/search/algolia"
import AppSettings from "@/app/app.settings"
import {
  getGuideDocuments,
  getExtensionReferenceDocuments,
  getQueryLibraryDocuments,
  getTutorialDocuments,
  getArchitectureDocuments,
} from "@/utils/content/document"

// Remove all GraphQL queries from the Algolia index
function removeUnneededContent(content: string): string {
  return content
    // Remove all ``` except the last one
    .replace(/```[a-zA-Z_-]+\n[^```]*```/igs,'')
    // Remove the last ```
    .replace(/```[a-zA-Z_-]+\n.*```/igs,'')
    // Remove <Banner> and </Banner>
    .replace(/<Banner[^>]*>/g,'')
    .replace(/<\/Banner[^>]*>/g,'')
}

function getStructuredDataObject(
  title: string,
  description: string,
  urlPath: string,
  slug: string,
  content: string,
  section: Sections.Blog
    | Sections.Changelog
    | Sections.Comparisons
    | Sections.ExtensionsReference
    | Sections.Guides
    | Sections.SchemaTutorial
    | Sections.QueryLibrary
    | Sections.ArchitectureDocs
    | Sections.Extensions
    | Sections.Features
    | Sections.Demos
): SearchObject {
  // return an object to be added to Algolia.
  return {
    // objectID must be unique and consistent on each build
    objectID: urlPath,
    title: title,
    description: description,
    urlPath: urlPath,
    slug: slug,
    content: removeUnneededContent(content),
    section: section
  }
}

async function getAllPostsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allBlogPosts?.map((post) => getStructuredDataObject(
      post.title,
      post.description,
      getBlogPostURLPath(post),
      post.slug,
      post.body.raw,
      Sections.Blog
    )) || []
  )
}

async function getAllDemoPostsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allDemoPosts?.map((demoPost) => getStructuredDataObject(
      demoPost.title,
      demoPost.description,
      getDemoPostURLPath(demoPost),
      demoPost.slug,
      demoPost.body.raw,
      Sections.Demos
    )) || []
  )
}

async function getAllComparisonPostsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allComparisonPosts?.map((comparisonPost) => getStructuredDataObject(
      comparisonPost.title,
      comparisonPost.description,
      getComparisonPostURLPath(comparisonPost),
      comparisonPost.slug,
      comparisonPost.body.raw,
      Sections.Comparisons
    )) || []
  )
}

function getDocStructuredDataObject(
  doc: Doc,
  section: Sections.ExtensionsReference
    | Sections.Guides
    | Sections.SchemaTutorial
    | Sections.QueryLibrary
    | Sections.ArchitectureDocs
  ): SearchObject {
  // return an array of objects to be added to Algolia.
  return getStructuredDataObject(
    doc.title,
    doc.description,
    getDocURLPath(doc),
    doc.slug,
    doc.body.raw,
    section
  )
}

async function getAllDocsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return ([
    ...(getGuideDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.Guides)) || []),
    ...(getExtensionReferenceDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.ExtensionsReference)) || []),
    ...(getQueryLibraryDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.QueryLibrary)) || []),
    ...(getTutorialDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.SchemaTutorial)) || []),
    ...(getArchitectureDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.ArchitectureDocs)) || []),
  ])
}

async function getAllExtensionsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allExtensions?.map((extension) => getStructuredDataObject(
      extension.title,
      extension.description,
      getExtensionURLPath(extension),
      extension.slug,
      extension.body.raw,
      Sections.Extensions
    )) || []
  )
}

async function getAllFeaturesTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allFeatures?.map((feature) => getStructuredDataObject(
      feature.title,
      feature.description,
      getFeatureURLPath(feature),
      feature.slug,
      feature.body.raw,
      Sections.Features
    )) || []
  )
}

export async function GET(request: Request) {
  const url = request.url || ''
  const { searchParams } = new URL(url);
  const apiKey = searchParams.get('apiKey');
  if (!apiKey || typeof apiKey !== 'string' || !isAdminUser(apiKey)) {
    return new Response(`⛔️ You are not allowed here`, { status: 500 })
  }
  const searchFeaturesAndExtensions = AppSettings.searchFeaturesAndExtensions
  try {
    const posts = await getAllPostsTransformed()
    const demoPosts = await getAllDemoPostsTransformed()
    const comparisonPosts = await getAllComparisonPostsTransformed()
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
      ...demoPosts,
      ...comparisonPosts,
      ...docs,
      ...extensions,
      ...features
    ])
    
    return new Response(`⭐️⭐️ Successfully added ${algoliaSearchIndexResponse.objectIDs.length} records to Algolia search. ⭐️⭐️`)
  } catch (err) {
    console.error(err)
  }
};