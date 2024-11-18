import {
  Doc,
  Extension,
  DemoPost,
  ComparisonPost,
  BlogPost,
  Feature,
} from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'
import AppConstants from "gatoapp/app/app.constants";
import { Article, isDemoPost, isExtension, isBlogPost, isFeature } from "./types";
import { DOMAIN } from 'gatoapp/data/env/domain'

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

export function getExtensionDocumentationURLPath(extension: Extension) {
  return `/${AppConfig.paths.docs.extensionsReference}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `${DOMAIN}${getExtensionDocumentationURLPath(extension)}`
}

export function getDemoPostURLPath(demoPost: DemoPost) {
  return `/${AppConfig.paths.demoPosts}/${demoPost.slug}`
}

export function getDemoPostURL(demoPost: DemoPost) {
  return `${DOMAIN}${getDemoPostURLPath(demoPost)}`
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

export function getBlogPostURLPath(post: BlogPost) {
  return `/${AppConfig.paths.blog}/${post.slug}`
}

export function getBlogPostURL(post: BlogPost) {
  return `${DOMAIN}${getBlogPostURLPath(post)}`
}

export function getArticleURLPath(article: Article) {
  return isBlogPost(article)
    ? getBlogPostURLPath(article)
    : (
      isDemoPost(article)
      ? getDemoPostURLPath(article)
      : (
        isFeature(article)
        ? getFeatureURLPath(article)
        : getDocURLPath(article)
    )
  )
}

export function getArticleURL(article: Article) {
  return `${DOMAIN}${getArticleURLPath(article)}`
}