import { Doc, BlogPost, DemoPost, Feature } from 'gatoapp/types/types';
import AppConstants from "gatoapp/app/app.constants";
import AppConfig from 'gatoapp/app/app.config'
import { DOMAIN } from 'gatoapp/data/env/domain'

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

export function getDemoPostURLPath(demoPost: DemoPost) {
  return `/${AppConfig.paths.demoPosts}/${demoPost.slug}`
}

export function getDemoPostURL(demoPost: DemoPost) {
  return `${DOMAIN}${getDemoPostURLPath(demoPost)}`
}

export function getFeatureURLPath(feature: Feature) {
  return `/${AppConfig.paths.features}/${feature.slug}`
}

export function getFeatureURL(feature: Feature) {
  return `${DOMAIN}${getFeatureURLPath(feature)}`
}