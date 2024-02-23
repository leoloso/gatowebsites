import { allExtensions } from 'contentlayer/generated'
import { sortByName, sortAlphabetically } from "./sort";

export function getFeaturedExtensions() {
  return allExtensions
    .filter((extension) => extension.featured)
    .sort(sortByName)
}

export function getExtensionCategories() {
  return allExtensions
    .map((extension) => extension.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort(sortAlphabetically)
}
