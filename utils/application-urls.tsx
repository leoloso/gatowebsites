import { Doc, Extension, VideoPost, Post } from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'
import AppSettings from "@/app/app.settings";
import { Article, isPost } from "./types";

export function getExtensionURL(extension: Extension) {
  return `/${AppConfig.paths.extensions}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `/${AppConfig.paths.docs.extensionsReference}/${extension.slug}`
}

export function getVideoPostURL(videoPost: VideoPost) {
  return `/${AppConfig.paths.videoPosts}/${videoPost.slug}`
}

export function getDocURL(doc: Doc) {
  if (doc.topicSlug === AppSettings.implicitDocTopicSlug) {
    return `/${doc.section}/${doc.slug}`
  }
  return `/${doc.section}/${doc.topicSlug}/${doc.slug}`
}

export function getPostURL(post: Post) {
  return `/${AppConfig.paths.blog}/${post.slug}`
}

export function getArticleURL(article: Article) {
  return isPost(article) ? getPostURL(article) : getDocURL(article)
}

