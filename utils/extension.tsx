import { Extension } from "@/.contentlayer/generated";
import { allExtensions } from 'contentlayer/generated'
import { sortByName } from "./sort";

export function getFeaturedExtensions() {
  return allExtensions.filter((extension) => extension.featured).sort(sortByName)
}

export function getExtensionCategories() {
  return allExtensions
    .map((extension) => extension.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort(sortExtensionCategories)
}

// Sort extensions by name
export function sortExtensionCategories(a: string, b: string) {
  return (a > b) ? 1 : -1
}

