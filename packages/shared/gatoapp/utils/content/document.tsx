'use client'

import { Doc, DocTopic } from 'gatoapp/types/types';
import { sortByOrder, sortByOrderAndTitle } from 'gatoapp/utils/content/sort';
import { useAppContentProvider } from 'gatoapp/app/appcontent-provider'

export function getDocTopic(doc: Doc) {
  const { allDocTopics } = useAppContentProvider()
  const docTopic = allDocTopics.find((docTopic) => doc.section === docTopic.section && docTopic.slug === doc.topicSlug);
  if (!docTopic) {
    throw new Error(`There is no DocTopic with section '${doc.section}' and slug '${doc.topicSlug}'`)
  }
  return docTopic
}

export function getDocumentsByTopic(docTopic: DocTopic) {
  const { allDocs } = useAppContentProvider()
  return allDocs.filter((doc) => doc.section === docTopic.section && doc.topicSlug === docTopic.slug)
}

export function sortDocumentTopics(a: DocTopic, b: DocTopic) {
  return sortByOrder(a, b)
}

// Make sure that all documents respect the order
// of their topics (to find the next/prev items for pagination)
export function sortDocuments(a: Doc, b: Doc) {
  if (a.topicSlug === b.topicSlug) {
    return sortByOrderAndTitle(a, b)
  }

  return sortDocumentTopics(getDocTopic(a), getDocTopic(b));
}

export function getDocumentTopicsBySection(section: string) {
  const { allDocTopics } = useAppContentProvider()
  return allDocTopics.filter((docTopic) => docTopic.section === section)
}
