import {
  Doc,
  Extension,
  DemoPost,
  ComparisonPost,
  BlogPost,
} from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'
import AppConstants from "gatoapp/app/app.constants";
import { DOMAIN } from 'gatoapp/data/env/domain'

export function getExtensionDocumentationURLPath(extension: Extension) {
  return `/${AppConfig.paths.docs.extensionsReference}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `${DOMAIN}${getExtensionDocumentationURLPath(extension)}`
}

export function getComparisonPostURLPath(comparisonPost: ComparisonPost) {
  return `/${AppConfig.paths.comparisonPosts}/${comparisonPost.slug}`
}

export function getComparisonPostURL(comparisonPost: ComparisonPost) {
  return `${DOMAIN}${getComparisonPostURLPath(comparisonPost)}`
}
