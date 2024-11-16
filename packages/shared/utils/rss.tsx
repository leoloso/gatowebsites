import fs from 'fs';
import { Feed } from 'feed';
import { sortByPublishedAt } from '@gato/utils/content/sort';
import { DOMAIN } from '@gato/data/env/domain';
import slugify from '@sindresorhus/slugify';
import { maybeAddDomain } from '@gato/utils/domain';
import { BlogPost } from '@gato/utils/content/types';
import { getBlogPostURL } from './content/application-urls';

export default async function generateRssFeed(
  name: string,
  allBlogPosts: BlogPost[],
) {
  const posts = allBlogPosts.sort(sortByPublishedAt) 

  const feedOptions = {
    title: `${name} Blog | RSS Feed`,
    description: `Stay up to date on the latest from ${name}`,
    id: DOMAIN,
    link: DOMAIN,
    image: `${DOMAIN}/assets/Gato-logo-suki.png`,
    favicon: `${DOMAIN}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${name}`,
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