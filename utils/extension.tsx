import { allExtensions } from 'contentlayer/generated'

export function getFeaturedExtensions() {
  return allExtensions.filter((extension) => extension.featured)
}

export function getExtensionCategories() {
  return allExtensions
    .map((extension) => extension.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
