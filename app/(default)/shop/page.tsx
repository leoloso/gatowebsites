import { redirect } from "next/navigation"

export const metadata = {
  title: 'Shop - Gato GraphQL',
  description: 'Page description',
}

export default function Shop() {
  redirect('/shop/my-orders')
}