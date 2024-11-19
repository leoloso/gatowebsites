import {
  Doc,
  Plugin,
  DemoPost,
  BlogPost,
  // Feature,
} from "@/.contentlayer/generated";
import AppConfig from '@/app/app.config'
import AppConstants from "gatoapp/app/app.constants";
import { DOMAIN } from 'gatoapp/data/env/domain'

export function getPluginURLPath(plugin: Plugin) {
  return `/${AppConfig.paths.plugins}/${plugin.slug}`
}

export function getPluginURL(plugin: Plugin) {
  return `${DOMAIN}${getPluginURLPath(plugin)}`
}

export function getPluginDocumentationURLPath(plugin: Plugin) {
  return `/${AppConfig.paths.docs.pluginsReference}/${plugin.slug}`
}

export function getPluginDocumentationURL(plugin: Plugin) {
  return `${DOMAIN}${getPluginDocumentationURLPath(plugin)}`
}

export function getDemoPostURLPath(demoPost: DemoPost) {
  return `/${AppConfig.paths.demoPosts}/${demoPost.slug}`
}

export function getDemoPostURL(demoPost: DemoPost) {
  return `${DOMAIN}${getDemoPostURLPath(demoPost)}`
}

export function getBlogPostURLPath(post: BlogPost) {
  return `/${AppConfig.paths.blog}/${post.slug}`
}

export function getBlogPostURL(post: BlogPost) {
  return `${DOMAIN}${getBlogPostURLPath(post)}`
}
