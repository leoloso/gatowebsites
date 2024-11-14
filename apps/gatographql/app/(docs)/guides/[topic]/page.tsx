import { notFound, redirect } from 'next/navigation'
import { getGuideDocuments, sortDocuments } from '@/utils/content/document'
import { getDocURLPath } from '@/utils/content/application-urls'

// Redirect to the first item on the doc topic collection
export default function RedirectToFirstDocTopicItem({ params }: {
  params: {
    topic: string
  }
}) {

  // Sort docs (this already takes into account the DocTopic)
  const docs = getGuideDocuments().sort(sortDocuments);
  const docIndex = docs.findIndex((doc) => doc.topicSlug === params.topic)

  if (docIndex === -1) notFound()

  // Redirect to the first one
  const doc = docs[docIndex];
  redirect(getDocURLPath(doc))
}
