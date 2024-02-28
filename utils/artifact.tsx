import { Artifact } from "./types"

export function getFeaturedArtifacts(artifacts: Array<Artifact>) {
  return artifacts.filter((artifact) => artifact.featured)
}

export function getArtifactCategories(artifacts: Array<Artifact>) {
  return artifacts
    .map((artifact) => artifact.category)
    // filter distinct values
    .filter((value, index, array) => array.indexOf(value) === index)
}
