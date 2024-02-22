import { Doc, DocTopic } from "@/.contentlayer/generated";
import { allDocs, allDocTopics } from 'contentlayer/generated'

export function getDocumentDocumentTopicSlug(doc: Doc) {
  return doc.slug.substring(0, doc.slug.indexOf('/'));
}

export function getDocumentTopicBySlug(slug: string) {
  return allDocTopics.find((docTopic) => docTopic.slug === slug);
}

export function calculateDocumentSlug(topic: string, slug: string) {
  return `${topic}/${slug}`
}

export function getDocumentsByTopic(docTopic: DocTopic) {
  return allDocs.filter((doc) => getDocumentDocumentTopicSlug(doc) === docTopic.slug).sort(sortDocuments)
}

export function sortDocumentTopics(a: DocTopic, b: DocTopic) {
  return (a.order > b.order) ? 1 : -1
}

// Make sure that all documents respect the order
// of their topics (to find the next/prev items for pagination)
export function sortDocuments(a: Doc, b: Doc) {
  const aDocTopicSlug = getDocumentDocumentTopicSlug(a)
  const bDocTopicSlug = getDocumentDocumentTopicSlug(b)
  if (aDocTopicSlug === bDocTopicSlug) {
    return (a.order > b.order) ? 1 : -1
  }

  const aDocTopic = getDocumentTopicBySlug(aDocTopicSlug)
  const bDocTopic = getDocumentTopicBySlug(bDocTopicSlug)
  if (!aDocTopic) {
    return 1;
  }
  if (!bDocTopic) {
    return -1;
  }

  return sortDocumentTopics(aDocTopic, bDocTopic);
}
