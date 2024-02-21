import { Extension, Guide } from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'

export function getExtensionURL(extension: Extension) {
  return `/${AppConfig.paths.extensions}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `/${AppConfig.paths.docs}/extensions/${extension.slug}`
}

export function getGuideURL(guide: Guide) {
  return `/${AppConfig.paths.guides}/${guide.slug}`
}