import { Extension } from "@/.contentlayer/generated";
import { allExtensions } from 'contentlayer/generated'

export function getFeaturedExtensions() {
  return allExtensions.filter((extension) => extension.featured).sort(sortExtensions)
}

// Sort extensions by name
export function sortExtensions(a: Extension, b: Extension) {
  return (a.name > b.name) ? 1 : -1
}
