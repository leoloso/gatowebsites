import { Doc, Extension, Guide, Post } from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'

export function getExtensionURL(extension: Extension) {
  return `/${AppConfig.paths.extensions}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  // The "extensions" name is the subfolder in docs/
  // hosting all the extension files
  // (it's content => not stored in AppConfig)
  return `/${AppConfig.paths.docs}/extensions/${extension.slug}`
}

export function getGuideURL(guide: Guide) {
  return `/${AppConfig.paths.guides}/${guide.slug}`
}

export function getDocURL(doc: Doc) {
  return `/${AppConfig.paths.docs}/${doc.slug}`
}

export function getPostURL(post: Post) {
  return `/${AppConfig.paths.blog}/${post.slug}`
}