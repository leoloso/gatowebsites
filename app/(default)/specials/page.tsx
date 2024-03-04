import { redirect } from "next/navigation"

export const metadata = {
  title: 'Specials - Gato GraphQL',
  description: 'Page description',
}

export default function Specials() {
  redirect('/specials/wpbuilds')
}