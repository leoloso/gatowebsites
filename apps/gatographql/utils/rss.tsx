import fs from 'fs';
import { Feed } from 'feed';
import { allBlogPosts } from '@/.contentlayer/generated'
import { sortByPublishedAt } from './content/sort';
import { DOMAIN } from '@gato/data/env/domain';
import { getBlogPostURL } from './content/application-urls';
import slugify from '@sindresorhus/slugify';
import { maybeAddDomain } from '@gato/utils/domain';

export default async function generateRssFeed() {
  const posts = allBlogPosts.sort(sortByPublishedAt) 

  const feedOptions = {
    title: 'Gato GraphQL Blog | RSS Feed',
    description: 'Stay up to date on the latest from Gato GraphQL',
    id: DOMAIN,
    link: DOMAIN,
    image: `${DOMAIN}/assets/GatoGraphQL-logo-suki.png`,
    favicon: `${DOMAIN}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Gato GraphQL`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${DOMAIN}/feed.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: slugify(getBlogPostURL(post)),
      link: getBlogPostURL(post),
      description: post.description,
      date: new Date(post.publishedAt),
      ...(post.image ? {image: maybeAddDomain(post.image)} : {})
    });
  });

  const rss = feed.rss2()
  fs.writeFileSync('./public/feed.xml', rss);
}