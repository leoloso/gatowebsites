import fs from 'fs';
import { Feed } from 'feed';
import { allPosts } from 'contentlayer/generated'
import { sortByPublishedAt } from './content/sort';
import { DOMAIN } from '@/data/env/domain';

export default async function generateRssFeed() {
 const posts = allPosts.sort(sortByPublishedAt) 

 const feedOptions = {
  title: 'Blog posts | RSS Feed',
  description: 'Welcome to this blog posts!',
  id: DOMAIN,
  link: DOMAIN,
  image: `${DOMAIN}/logo.png`,
  favicon: `${DOMAIN}/favicon.png`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Gato GraphQL`,
  generator: 'Feed for Node.js',
  feedLinks: {
   rss2: `${DOMAIN}/rss.xml`,
  },
 };

 const feed = new Feed(feedOptions);

 posts.forEach((post) => {
  feed.addItem({
   title: post.title,
   id: `${DOMAIN}/blog/${post.slug}`,
   link: `${DOMAIN}/blog/${post.slug}`,
   description: post.summary,
   date: new Date(post.publishedAt),
  });
 });

 fs.writeFileSync('./public/rss.xml', feed.rss2());
}