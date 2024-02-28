import { Extension, allExtensions } from 'contentlayer/generated'

export function getFeaturedExtensions() {
  return allExtensions.filter((extension) => extension.featured)
}

export function getExtensionCategories({
  extensions = allExtensions,
}: {
  extensions?: Array<Extension>,
}) {
  return extensions
    .map((extension) => extension.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
