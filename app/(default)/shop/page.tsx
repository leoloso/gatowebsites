import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Shop'),
  description: 'Purchase Gato GraphQL PRO, and access all your orders from our shop',
}

export default function Shop() {
  redirect('/shop/my-orders')
}