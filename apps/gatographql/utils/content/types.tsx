import { DemoPost, Doc, Extension, Feature, BlogPost } from "@/.contentlayer/generated";

export type Post = BlogPost | DemoPost;
export type Article = Doc | Post | Feature;
export type Artifact = Extension | Feature;

export function isBlogPost(article: Article): article is BlogPost {
  return article.type === 'BlogPost'
}
export function isDemoPost(article: Article): article is DemoPost {
  return article.type === 'DemoPost'
}
export function isFeature(article: Article): article is Feature {
  return article.type === 'Feature'
}
export function isExtension(artifact: Artifact): artifact is Extension {
  return artifact.type === 'Extension'
}
