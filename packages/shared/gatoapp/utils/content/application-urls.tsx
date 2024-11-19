import { Doc, BlogPost, DemoPost, Feature } from 'gatoapp/types/types';
import AppConstants from "gatoapp/app/app.constants";
import AppConfig from 'gatoapp/app/app.config'
import { DOMAIN } from 'gatoapp/data/env/domain'

export function getURL(entity: { urlPath: string }) {
  return `${DOMAIN}${entity.urlPath}`
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
