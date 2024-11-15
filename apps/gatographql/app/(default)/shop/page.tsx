import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Shop'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Purchase a product from Gato GraphQL, and access all your orders from our shop',
}

export default function Shop() {
  redirect('/shop/my-orders')
}