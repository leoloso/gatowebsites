import { Doc, DocTopic } from "@/.contentlayer/generated";
import { allDocs, allDocTopics } from 'contentlayer/generated'
import AppConfig from '@/app/app.config'

export function getDocTopic(doc: Doc) {
  return allDocTopics.find((docTopic) => doc.group === docTopic.group && docTopic.slug === doc.topicSlug);
}

export function getDocumentsByTopic(docTopic: DocTopic) {
  return allDocs.filter((doc) => doc.group === docTopic.group && doc.topicSlug === docTopic.slug)
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

  const aDocTopic = getDocTopic(a)
  const bDocTopic = getDocTopic(b)
  if (!aDocTopic) {
    return 1;
  }
  if (!bDocTopic) {
    return -1;
  }

  return sortDocumentTopics(aDocTopic, bDocTopic);
}

function getGroupDocuments(docGroup: string) {
  return allDocs.filter((doc) => doc.group === docGroup)
}

export function getGuideDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.guides)
}


export function getExtensionReferenceDocuments() {
  return getGroupDocuments(AppConfig.paths.docs.extensionsReference)
}
