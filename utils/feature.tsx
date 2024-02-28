import { allFeatures } from 'contentlayer/generated'

export function getFeaturedFeatures() {
  return allFeatures.filter((feature) => feature.featured)
}

export function getFeatureCategories() {
  return allFeatures
    .map((feature) => feature.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
