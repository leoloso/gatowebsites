import { allFeatures } from 'contentlayer/generated'

export function getFeatureCategories() {
  return allFeatures
    .map((feature) => feature.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
