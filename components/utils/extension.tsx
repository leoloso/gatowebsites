import { Extension } from "@/.contentlayer/generated";
import { allExtensions } from 'contentlayer/generated'
import AppConfig from '@/app/app.config'

export function getFeaturedExtensions() {
  return allExtensions.filter((extension) => extension.featured).sort(sortExtensions)
}

export function getExtensionCategories() {
  return allExtensions
    .map((extension) => extension.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort(sortExtensionCategories)
}

// Sort extensions by name
export function sortExtensions(a: Extension, b: Extension) {
  return (a.name > b.name) ? 1 : -1
}

// Sort extensions by name
export function sortExtensionCategories(a: string, b: string) {
  return (a > b) ? 1 : -1
}

export function getExtensionURL(extension: Extension) {
  return `/${AppConfig.paths.extensions}/${extension.slug}`
}

export function getExtensionDocumentationURL(extension: Extension) {
  return `/${AppConfig.paths.docs}/extensions/${extension.slug}`
}
