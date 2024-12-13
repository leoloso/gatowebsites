import { Doc, DocTopic, RelatedGuide } from "@/.contentlayer/generated";
import { allDocs, allDocTopics } from '@/.contentlayer/generated'
import AppConfig from '@/app/app.config'
import { sortAlphabetically, sortByOrder, sortByOrderAndTitle } from "gatoapp/utils/content/sort";

/**
 * Watch out! These methods are repeated:
 *
 * @see packages/shared/gatoapp/utils/content/document.tsx
 * @see apps/gatographql/utils/content/document.tsx
 * @see apps/gatoplugins/utils/content/document.tsx
 * 
 * That's because, for some reason, `sortDocuments` fails
 * at sorting the Doc and DocTopic, and then calling /guides will
 * redirect to /guides/augment/dynamic-variables instead of
 * /guides/intro/intro-to-graphql-and-gato-graphql
 * 
 * ----------------------------------------------------------------
 */
export function getDocTopic(doc: Doc) {
  const docTopic = allDocTopics.find((docTopic) => doc.section === docTopic.section && docTopic.slug === doc.topicSlug);
  if (!docTopic) {
    throw new Error(`There is no DocTopic with section '${doc.section}' and slug '${doc.topicSlug}'`)
  }
  return docTopic
}

export function sortDocumentTopics(a: DocTopic, b: DocTopic) {
  return sortByOrder(a, b)
}

// Make sure that all documents respect the order
// of their topics (to find the next/prev items for pagination)
export function sortDocuments(a: Doc, b: Doc) {
  if (a.section !== b.section) {
    return sortAlphabetically(a.section, b.section)
  }
  
  if (a.topicSlug !== b.topicSlug) {
    return sortDocumentTopics(getDocTopic(a), getDocTopic(b));
  }

  return sortByOrderAndTitle(a, b)
}
// ----------------------------------------------------------------


/**
 * Watch out! These methods cannot be moved to the shared package,
 * hence they are repeated in all apps:
 *
 * @see apps/gatographql/utils/content/document.tsx
 * @see apps/gatoplugins/utils/content/document.tsx
 * 
 * That's because, for some reason, loading `architecture/cms-agnosticism`
 * gives an error:
 *
 *   `Error: (0 , gatoapp_utils_content_document__WEBPACK_IMPORTED_MODULE_3__.getPrevNextArticles) is not a function`
 *
 * and even adding `'use client'` doesn't solve it
 * 
 * ----------------------------------------------------------------
 */
export function getPrevNextArticles(articles: Array<any>, articleIndex: number) {
  // Calculate the prev/next items
  const prevArticle = articleIndex === 0 ? undefined : articles[articleIndex - 1]
  const nextArticle = articleIndex === (articles.length - 1) ? undefined : articles[articleIndex + 1]
  return {
    prev: prevArticle,
    next: nextArticle
  }
}

function getGroupDocuments(docSection: string) {
  return allDocs.filter((doc) => doc.section === docSection)
}

export function getGuideDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.guides)
}

export function getGuideDocument(relatedGuide: RelatedGuide) {
  const guide = getGuideDocuments().find((doc) => doc.slug === relatedGuide?.slug && doc.topicSlug === relatedGuide?.topic)
  if (!guide) {
    throw new Error(`There is no guide with topic '${relatedGuide.topic}' and slug '${relatedGuide.slug}'`)
  }
  return guide
}
// ----------------------------------------------------------------


export function getExtensionReferenceDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.extensionsReference)
}

export function getQueryLibraryDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.queryLibrary)
}

export function getTutorialDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.tutorial)
}

export function getArchitectureDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.architecture)
}