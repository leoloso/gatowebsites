import { redirect } from "next/navigation"

export const metadata = {
  title: 'Shop - Open PRO',
  description: 'Page description',
}

export default function Shop() {
  redirect('/shop/my-orders')
}