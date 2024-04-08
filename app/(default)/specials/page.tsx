import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Specials'),
  description: 'Webinar series, campaigns, events, and more concerning Gato GraphQL',
}

export default function Specials() {
  redirect('/specials/wpbuilds')
}