import AppConfig from "@/app/app.config"
import { redirect } from "next/navigation"
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Docs'),
  description: 'Gato GraphQL documentation',
}

export default function Docs() {
  redirect(`/${AppConfig.paths.docs.guides}`)
}