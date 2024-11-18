import { allBlogPosts } from '@/.contentlayer/generated'
import generateRssFeed from '@gato/utils/rss';

export default async function generateAppRssFeed() {

  return generateRssFeed('Gato GraphQL', allBlogPosts)
}