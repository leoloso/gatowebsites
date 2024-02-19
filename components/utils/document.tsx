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
