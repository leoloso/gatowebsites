import { notFound, redirect } from 'next/navigation'
import { getExtensionReferenceDocuments, sortDocuments } from '@/utils/content/document'

// Redirect to the first item on the docs collection
export default function RedirectToFirstDocItem() {

  // Sort docs (this already takes into account the DocTopic)
  const docs = getExtensionReferenceDocuments().sort(sortDocuments);

  if (docs.length === 0) notFound()

  // Redirect to the first one
  const doc = docs[0];
  redirect(doc.urlPath)
}
