import { notFound, redirect } from 'next/navigation'
import { getGuideDocuments, sortDocuments } from '@/utils/document'
import { getGuideDocURL } from '@/utils/application-urls'

// Redirect to the first item on the docs collection
export default function Home() {

  const docs = getGuideDocuments();

  if (docs.length === 0) notFound()

  // Sort docs (this already takes into account the DocTopic)
  docs.sort(sortDocuments)

  // Redirect to the first one
  const doc = docs[0];
  redirect(getGuideDocURL(doc))
}
