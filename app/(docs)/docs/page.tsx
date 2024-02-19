import { notFound, redirect } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { allDocTopics } from 'contentlayer/generated'
import AppConfig from '@/app/app.config'

// Redirect to the first item on the docs collection
export default function Home() {

  // Sort docs and doc topics by order
  allDocs.sort((a, b) => {
    return (new Date(a.order) > new Date(b.order)) ? -1 : 1
  })  
  allDocTopics.sort((a, b) => {
    return (new Date(a.order) > new Date(b.order)) ? -1 : 1
  })

  // First DocTopic
  if (allDocTopics.length === 0) notFound()
  const docTopic = allDocTopics[0]

  // First Doc for that DocTopic
  const doc = allDocs.find((doc) => doc.slug.startsWith(`${docTopic.slug}/`))
  if (!doc) notFound()

  redirect(`/${AppConfig.paths.docs}/${doc.slug}`)
}
