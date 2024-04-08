import AppConfig from "@/app/app.config"
import { redirect } from "next/navigation"
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Docs'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL documentation',
  openGraph: {
    title: createOpenGraphPageTitle(pageTitle),
  },
  twitter: {
    title: createOpenGraphPageTitle(pageTitle),
  },
}

export default function Docs() {
  redirect(`/${AppConfig.paths.docs.guides}`)
}