import {
  allBlogPosts,
  allDemoPosts,
  allPlugins,
  allFeatures,
  Doc,
} from '@/.contentlayer/generated'
import { SearchObject, Sections } from "gatoapp/components/search/algolia"
import AppSettings from "@/app/app.settings"
import {
  getGuideDocuments,
  getPluginReferenceDocuments,
} from "@/utils/content/document"
import {
  getStructuredDataObject,
  assertCanExecuteGET,
  executeGET,
} from 'gatoapp/app/api/deploy-algolia/route'

async function getAllPostsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allBlogPosts?.map((post) => getStructuredDataObject(
      post.title,
      post.description,
      post.urlPath,
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
      demoPost.urlPath,
      demoPost.slug,
      demoPost.body.raw,
      Sections.Demos
    )) || []
  )
}

function getDocStructuredDataObject(
  doc: Doc,
  section: Sections.PluginsReference
    | Sections.Guides
  ): SearchObject {
  // return an array of objects to be added to Algolia.
  return getStructuredDataObject(
    doc.title,
    doc.description,
    doc.urlPath,
    doc.slug,
    doc.body.raw,
    section
  )
}

async function getAllDocsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return ([
    ...(getGuideDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.Guides)) || []),
    ...(getPluginReferenceDocuments().map((doc) => getDocStructuredDataObject(doc, Sections.PluginsReference)) || []),
  ])
}

async function getAllPluginsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allPlugins?.map((plugin) => getStructuredDataObject(
      plugin.title,
      plugin.description,
      plugin.urlPath,
      plugin.slug,
      plugin.body.raw,
      Sections.Plugins
    )) || []
  )
}

async function getAllFeaturesTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allFeatures?.map((feature) => getStructuredDataObject(
      feature.title,
      feature.description,
      feature.urlPath,
      feature.slug,
      feature.body.raw,
      Sections.Features
    )) || []
  )
}

export async function GET(request: Request) {
  const maybeResponse = assertCanExecuteGET(request)
  if (maybeResponse) {
    return maybeResponse
  }

  const searchDemoPosts = AppSettings.searchDemoPosts
  const posts = await getAllPostsTransformed()
  const demoPosts = searchDemoPosts ? await getAllDemoPostsTransformed() : []
  const docs = await getAllDocsTransformed()
  const plugins = await getAllPluginsTransformed()
  const features = await getAllFeaturesTransformed()
  return executeGET(request, [
    ...posts,
    ...demoPosts,
    ...docs,
    ...plugins,
    ...features
  ])
};