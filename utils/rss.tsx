import fs from 'fs';
import { Feed } from 'feed';
import { allPosts } from 'contentlayer/generated'
import { sortByPublishedAt } from './content/sort';
import { DOMAIN } from '@/data/env/domain';
import { getPostURL } from './content/application-urls';
import slugify from '@sindresorhus/slugify';

export default async function generateRssFeed() {
 const posts = allPosts.sort(sortByPublishedAt) 

 const feedOptions = {
  title: 'Gato GraphQL Blog | RSS Feed',
  description: 'Stay up to date on the latest from Gato GraphQL and our engineering practices.',
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
   id: slugify(getPostURL(post)),
   link: getPostURL(post),
   description: post.summary,
   date: new Date(post.publishedAt),
  });
 });

 fs.writeFileSync('./public/rss.xml', feed.rss2());
}