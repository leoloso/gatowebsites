import { Doc, DocTopic } from "@/.contentlayer/generated";
import { allDocTopics } from 'contentlayer/generated'

export function getDocumentTopicSlug(doc: Doc) {
  return doc.slug.substring(0, doc.slug.indexOf('/'));
}

export function getDocumentTopicBySlug(slug: string) {
  return allDocTopics.find((docTopic) => docTopic.slug === slug);
}

export function sortDocumentTopics(a: DocTopic, b: DocTopic) {
  return (a.order > b.order) ? -1 : 1
}

export function sortDocuments(a: Doc, b: Doc) {
  // Make sure that all documents respect the order
  // of their topics (to find the next/prev items for pagination)
  const aDocTopicSlug = getDocumentTopicSlug(a)
  const bDocTopicSlug = getDocumentTopicSlug(b)
  if (aDocTopicSlug === bDocTopicSlug) {
    return (a.order > b.order) ? -1 : 1
  }

  const aDocTopic = getDocumentTopicBySlug(aDocTopicSlug)
  const bDocTopic = getDocumentTopicBySlug(bDocTopicSlug)
  if (!aDocTopic || !bDocTopic) {
    return 1;
  }
  
  return sortDocumentTopics(aDocTopic, bDocTopic);
}
