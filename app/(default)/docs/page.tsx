import AppConfig from "@/app/app.config"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Docs - Gato GraphQL',
  description: 'Gato GraphQL documentation',
}

export default function Docs() {
  redirect(`/${AppConfig.paths.docs.guides}`)
}