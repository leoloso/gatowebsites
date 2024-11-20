import { notFound, redirect } from 'next/navigation'
import { getGroupDocuments, sortDocuments } from '@/utils/content/document'
import { getPluginSlugFromPageScriptFile } from '@/utils/content/path'

const pluginSlug = getPluginSlugFromPageScriptFile(__filename)

// Redirect to the first item on the doc topic collection
export default function RedirectToFirstDocTopicItem({ params }: {
  params: {
    topic: string
  }
}) {

  // Sort docs (this already takes into account the DocTopic)
  const docs = getGroupDocuments(pluginSlug).sort(sortDocuments);
  const docIndex = docs.findIndex((doc) => doc.topicSlug === params.topic)

  if (docIndex === -1) notFound()

  // Redirect to the first one
  const doc = docs[docIndex];
  redirect(doc.urlPath)
}
