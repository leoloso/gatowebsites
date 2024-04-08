import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Specials'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Webinar series, campaigns, events, and more concerning Gato GraphQL',
  openGraph: {
    title: pageTitle,
  },
  twitter: {
    title: pageTitle,
  },
}

export default function Specials() {
  redirect('/specials/wpbuilds')
}