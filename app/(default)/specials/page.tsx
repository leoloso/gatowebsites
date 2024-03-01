import { redirect } from "next/navigation"

export const metadata = {
  title: 'Specials - Open PRO',
  description: 'Page description',
}

export default function Specials() {
  redirect('/specials/wpbuilds')
}