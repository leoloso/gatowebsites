import { notFound, redirect } from 'next/navigation'
import { getTutorialDocuments, sortDocuments } from '@/utils/document'
import { getDocURL } from '@/utils/application-urls'

// Redirect to the first item on the docs collection
export default function Home() {

  // Sort docs (this already takes into account the DocTopic)
  const docs = getTutorialDocuments().sort(sortDocuments);

  if (docs.length === 0) notFound()

  // Redirect to the first one
  const doc = docs[0];
  redirect(getDocURL(doc))
}
