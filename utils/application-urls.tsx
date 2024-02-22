import { Doc, Extension, VideoPost, Post } from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'

export function getExtensionURL(extension: Extension) {
  return `/${AppConfig.paths.extensions}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `/${AppConfig.paths.docs.extensions}/${extension.slug}`
}

export function getVideoPostURL(videoPost: VideoPost) {
  return `/${AppConfig.paths.videoPosts}/${videoPost.slug}`
}

export function getDocURL(docTopicSlug: string, doc: Doc) {
  return `/${docTopicSlug}/${doc.slug}`
}

export function getGuideDocURL(doc: Doc) {
  return getDocURL(AppConfig.paths.docs.guides, doc)
}

export function getPostURL(post: Post) {
  return `/${AppConfig.paths.blog}/${post.slug}`
}