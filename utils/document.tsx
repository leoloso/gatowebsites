import { Doc, DocTopic } from "@/.contentlayer/generated";
import { allDocs, allDocTopics } from 'contentlayer/generated'
import AppConfig from '@/app/app.config'

export function getDocTopic(doc: Doc) {
  const docTopic = allDocTopics.find((docTopic) => doc.section === docTopic.section && docTopic.slug === doc.topicSlug);
  if (!docTopic) {
    throw new Error(`There is no DocTopic with group ${doc.section} and slug ${doc.topicSlug}`)
  }
  return docTopic
}

export function getDocumentsByTopic(docTopic: DocTopic) {
  return allDocs.filter((doc) => doc.section === docTopic.section && doc.topicSlug === docTopic.slug)
}

export function sortDocumentTopics(a: DocTopic, b: DocTopic) {
  return (a.order > b.order) ? 1 : -1
}

// Make sure that all documents respect the order
// of their topics (to find the next/prev items for pagination)
export function sortDocuments(a: Doc, b: Doc) {
  if (a.topicSlug === b.topicSlug) {
    return (a.order > b.order) ? 1 : -1
  }

  return sortDocumentTopics(getDocTopic(a), getDocTopic(b));
}

function getGroupDocuments(docSection: string) {
  return allDocs.filter((doc) => doc.section === docSection)
}

export function getGuideDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.guides)
}

export function getExtensionReferenceDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.extensionsReference)
}

export function getPrevNextDocs(docs: Array<Doc>, docIndex: number) {
  // Calculate the prev/next items
  const prevDoc = docIndex === 0 ? undefined : docs[docIndex - 1]
  const nextDoc = docIndex === (docs.length - 1) ? undefined : docs[docIndex + 1]
  return {
    prev: prevDoc,
    next: nextDoc
  }
}
