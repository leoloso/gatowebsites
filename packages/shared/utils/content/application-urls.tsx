import { Doc } from '@gato/utils/content/types';
import AppConstants from "@gato/app/app.constants";
import { DOMAIN } from '@gato/data/env/domain'

export function getDocURLPath(doc: Doc) {
  if (doc.topicSlug === AppConstants.implicitDocTopicSlug) {
    return `/${doc.section}/${doc.slug}`
  }
  return `/${doc.section}/${doc.topicSlug}/${doc.slug}`
}

export function getDocURL(doc: Doc) {
  return `${DOMAIN}${getDocURLPath(doc)}`
}