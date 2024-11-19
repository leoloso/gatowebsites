import {
  allBlogPosts,
  allDemoPosts,
  allComparisonPosts,
  allExtensions,
  allFeatures,
  Doc,
} from '@/.contentlayer/generated'
import { isAdminUser } from "gatoapp/utils/admin"
import { SearchObject, Sections } from "gatoapp/components/search/algolia"
import AppSettings from "@/app/app.settings"
import {
  getGuideDocuments,
  getExtensionReferenceDocuments,
  getQueryLibraryDocuments,
  getTutorialDocuments,
  getArchitectureDocuments,
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

async function getAllComparisonPostsTransformed(): Promise<SearchObject[]> {
  // return an array of objects to be added to Algolia.
  return (
    allComparisonPosts?.map((comparisonPost) => getStructuredDataObject(
      comparisonPost.title,
      comparisonPost.description,
      comparisonPost.urlPath,
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
      extension.urlPath,
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
  const comparisonPosts = await getAllComparisonPostsTransformed()
  const docs = await getAllDocsTransformed()
  const extensions = await getAllExtensionsTransformed()
  const features = await getAllFeaturesTransformed()
  return executeGET(request, [
    ...posts,
    ...demoPosts,
    ...comparisonPosts,
    ...docs,
    ...extensions,
    ...features
  ])
};