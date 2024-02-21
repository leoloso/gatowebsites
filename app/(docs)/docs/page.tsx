import { notFound, redirect } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { allDocTopics } from 'contentlayer/generated'
import AppConfig from '@/app/app.config'
import { sortDocuments } from '@/utils/document'

// Redirect to the first item on the docs collection
export default function Home() {

  if (allDocs.length === 0) notFound()

  // Sort docs (this already takes into account the DocTopic)
  allDocs.sort(sortDocuments)

  // Redirect to the first one
  const doc = allDocs[0];
  redirect(`/${AppConfig.paths.docs}/${doc.slug}`)
}
