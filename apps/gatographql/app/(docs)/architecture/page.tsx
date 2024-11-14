import { notFound, redirect } from 'next/navigation'
import { getArchitectureDocuments, sortDocuments } from '@/utils/content/document'
import { getDocURLPath } from '@/utils/content/application-urls'

// Redirect to the first item on the docs collection
export default function Home() {

  // Sort docs (this already takes into account the DocTopic)
  const docs = getArchitectureDocuments().sort(sortDocuments);

  if (docs.length === 0) notFound()

  // Redirect to the first one
  const doc = docs[0];
  redirect(getDocURLPath(doc))
}
