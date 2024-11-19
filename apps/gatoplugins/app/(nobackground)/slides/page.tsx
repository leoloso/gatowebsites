import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Slides'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato Plugins Slides',
}

export default function Slides() {
  redirect(`/slides/cover`)
}