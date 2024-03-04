import { redirect } from "next/navigation"

export const metadata = {
  title: 'Specials - Gato GraphQL',
  description: 'Webinar series, campaigns, events, and more concerning Gato GraphQL',
}

export default function Specials() {
  redirect('/specials/wpbuilds')
}