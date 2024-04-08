import AppConfig from "@/app/app.config"
import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Docs'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL documentation',
  openGraph: {
    title: pageTitle,
  },
  twitter: {
    title: pageTitle,
  },
}

export default function Docs() {
  redirect(`/${AppConfig.paths.docs.guides}`)
}