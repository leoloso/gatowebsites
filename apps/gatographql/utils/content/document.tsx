import { RelatedGuide } from "@/.contentlayer/generated";
import { allDocs } from '@/.contentlayer/generated'
import AppConfig from '@/app/app.config'
import { Article } from "./types";

/**
 * All commented out because transferred to the shared package
 * @todo Remove all this commented code, at some point!
 */
// export function getDocTopic(doc: Doc) {
//   const docTopic = allDocTopics.find((docTopic) => doc.section === docTopic.section && docTopic.slug === doc.topicSlug);
//   if (!docTopic) {
//     throw new Error(`There is no DocTopic with section '${doc.section}' and slug '${doc.topicSlug}'`)
//   }
//   return docTopic
// }

// export function getDocumentsByTopic(docTopic: DocTopic) {
//   return allDocs.filter((doc) => doc.section === docTopic.section && doc.topicSlug === docTopic.slug)
// }

// export function sortDocumentTopics(a: DocTopic, b: DocTopic) {
//   return sortByOrder(a, b)
// }

// // Make sure that all documents respect the order
// // of their topics (to find the next/prev items for pagination)
// export function sortDocuments(a: Doc, b: Doc) {
//   if (a.topicSlug === b.topicSlug) {
//     return sortByOrderAndTitle(a, b)
//   }

//   return sortDocumentTopics(getDocTopic(a), getDocTopic(b));
// }

// export function getDocumentTopicsBySection(section: string) {
//   return allDocTopics.filter((docTopic) => docTopic.section === section)
// }

function getGroupDocuments(docSection: string) {
  return allDocs.filter((doc) => doc.section === docSection)
}

export function getGuideDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.guides)
}

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

export function getPrevNextArticles(articles: Array<Article>, articleIndex: number) {
  // Calculate the prev/next items
  const prevArticle = articleIndex === 0 ? undefined : articles[articleIndex - 1]
  const nextArticle = articleIndex === (articles.length - 1) ? undefined : articles[articleIndex + 1]
  return {
    prev: prevArticle,
    next: nextArticle
  }
}

export function getGuideDocument(relatedGuide: RelatedGuide) {
  const guide = getGuideDocuments().find((doc) => doc.slug === relatedGuide?.slug && doc.topicSlug === relatedGuide?.topic)
  if (!guide) {
    throw new Error(`There is no guide with topic '${relatedGuide.topic}' and slug '${relatedGuide.slug}'`)
  }
  return guide
}