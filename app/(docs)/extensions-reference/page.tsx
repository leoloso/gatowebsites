import { notFound, redirect } from 'next/navigation'
import { getExtensionReferenceDocuments, sortDocuments } from '@/utils/document'
import { getDocURL } from '@/utils/application-urls'

// Redirect to the first item on the docs collection
export default function Home() {

  const docs = getExtensionReferenceDocuments();

  if (docs.length === 0) notFound()

  // Sort docs (this already takes into account the DocTopic)
  docs.sort(sortDocuments)

  // Redirect to the first one
  const doc = docs[0];
  redirect(getDocURL(doc))
}
