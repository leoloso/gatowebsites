import { Doc, Post } from "@/.contentlayer/generated";

export type Article = Doc | Post;

export function isPost(article: Article): article is Post {
  return article.type === 'Post'
}

