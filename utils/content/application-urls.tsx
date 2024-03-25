import {
  Doc,
  Extension,
  VideoPost,
  ComparisonPost,
  Post,
  Feature,
} from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'
import AppConstants from "@/app/app.constants";
import { Article, Artifact, isExtension, isPost } from "./types";
import { DOMAIN } from '@/data/env/domain'

export function getExtensionURLPath(extension: Extension) {
  return `/${AppConfig.paths.extensions}/${extension.slug}`
}

export function getExtensionURL(extension: Extension) {
  return `${DOMAIN}${getExtensionURLPath(extension)}`
}

export function getFeatureURLPath(feature: Feature) {
  return `/${AppConfig.paths.features}/${feature.slug}`
}

export function getFeatureURL(feature: Feature) {
  return `${DOMAIN}${getFeatureURLPath(feature)}`
}

export function getArtifactURLPath(artifact: Artifact) {
  return isExtension(artifact) ? getExtensionURLPath(artifact) : getFeatureURLPath(artifact)
}

export function getArtifactURL(artifact: Artifact) {
  return `${DOMAIN}${getArtifactURLPath(artifact)}`
}

export function getExtensionDocumentationURLPath(extension: Extension) {
  return `/${AppConfig.paths.docs.extensionsReference}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `${DOMAIN}${getExtensionDocumentationURLPath(extension)}`
}

export function getVideoPostURLPath(videoPost: VideoPost) {
  return `/${AppConfig.paths.videoPosts}/${videoPost.slug}`
}

export function getVideoPostURL(videoPost: VideoPost) {
  return `${DOMAIN}${getVideoPostURLPath(videoPost)}`
}

export function getComparisonPostURLPath(comparisonPost: ComparisonPost) {
  return `/${AppConfig.paths.comparisonPosts}/${comparisonPost.slug}`
}

export function getComparisonPostURL(comparisonPost: ComparisonPost) {
  return `${DOMAIN}${getComparisonPostURLPath(comparisonPost)}`
}

export function getDocURLPath(doc: Doc) {
  if (doc.topicSlug === AppConstants.implicitDocTopicSlug) {
    return `/${doc.section}/${doc.slug}`
  }
  return `/${doc.section}/${doc.topicSlug}/${doc.slug}`
}

export function getDocURL(doc: Doc) {
  return `${DOMAIN}${getDocURLPath(doc)}`
}

export function getPostURLPath(post: Post) {
  return `/${AppConfig.paths.blog}/${post.slug}`
}

export function getPostURL(post: Post) {
  return `${DOMAIN}${getPostURLPath(post)}`
}

export function getArticleURLPath(article: Article) {
  return isPost(article) ? getPostURLPath(article) : getDocURLPath(article)
}

export function getArticleURL(article: Article) {
  return `${DOMAIN}${getArticleURLPath(article)}`
}