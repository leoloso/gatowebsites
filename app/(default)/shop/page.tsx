import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Shop'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Purchase Gato GraphQL PRO, and access all your orders from our shop',
  openGraph: {
    title: pageTitle,
  },
  twitter: {
    title: pageTitle,
  },
}

export default function Shop() {
  redirect('/shop/my-orders')
}