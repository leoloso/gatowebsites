import { Doc, Extension, Feature, Post } from "@/.contentlayer/generated";

export type Article = Doc | Post;
export type Artifact = Extension | Feature;

export function isPost(article: Article): article is Post {
  return article.type === 'Post'
}
export function isExtension(artifact: Artifact): artifact is Extension {
  return artifact.type === 'Extension'
}

