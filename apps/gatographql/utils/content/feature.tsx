import { Feature, allFeatures } from '@/.contentlayer/generated'

export function getFeatureCategories(features: Array<Feature> | undefined = allFeatures) {
  return features
    .map((feature) => feature.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
