import { Doc, DocTopic } from "@/.contentlayer/generated";
import { allDocs, allDocTopics } from '@/.contentlayer/generated'
import { sortByOrder, sortByOrderAndTitle } from "gatoapp/utils/content/sort";

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

export function getDocumentsByTopic(docTopic: DocTopic) {
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
  return allDocTopics.filter((docTopic) => docTopic.section === section)
}
// ----------------------------------------------------------------
