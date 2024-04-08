import { redirect } from "next/navigation"
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Specials'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Webinar series, campaigns, events, and more concerning Gato GraphQL',
  openGraph: {
    title: createOpenGraphPageTitle(pageTitle),
  },
  twitter: {
    title: createOpenGraphPageTitle(pageTitle),
  },
}

export default function Specials() {
  redirect('/specials/wpbuilds')
}