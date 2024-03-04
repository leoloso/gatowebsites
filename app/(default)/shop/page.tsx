import { redirect } from "next/navigation"

export const metadata = {
  title: 'Shop - Gato GraphQL',
  description: 'Purchase Gato GraphQL PRO, and access all your orders from our shop',
}

export default function Shop() {
  redirect('/shop/my-orders')
}