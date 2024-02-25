---
title: "🔐 InstaWP + Gato GraphQL: Translate content without giving access to your site to translators"
summary: Creating a throwaway site just for a translator to translate the blog post
image: /assets/logos/GatoGraphQL-plus-InstaWP-logo.png
publishedAt: '2023-11-23'
author: 'Leonardo Losoviz'
authorImg: '/images/leo-avatar.jpg'
tags:
  - instawp
  - integration
draft: true
hidden: true
---

Let's say you have your website translated to different languages by using a WordPress multisite, and you regularly engage 3rd-party translators to translate the content.

However, you'd rather not give access to the translators to your wp-admin. That may be due to security concerns, or that the site belongs to your client, or simply because it makes you uncomfortable that they can see all your content and what plugins you use.

At the same time, you don't want to copy all the content to Google Docs, have them translate it, and then copy it back, that's too much work (and too boring!).

So what can you do?

Using InstaWP with [Gato GraphQL](https://gatographql.com) offers a solution, which not only keeps your production site secure, but also makes it easy to translate the content (using the WordPress editor!), and saves plenty of time.

![InstaWP + Gato GraphQL](/assets/logos/GatoGraphQL-plus-InstaWP-logo.png "InstaWP + Gato GraphQL")

InstaWP provides the infrastructure, and Gato GraphQL the architecture and logic to deploy the solution.

## InstaWP + Gato GraphQL to translate content

The idea is to create a site in InstaWP for the translator to do the work, and have Gato GraphQL first translate the content using Google Translate, and then sync it back and forth across the different sites, from staging to translation to production, using either Gato GraphQL or [InstaWP Connect](https://instawp.com/plugin/instawp-connect/).

This video shows how it works:

<iframe title="vimeo-player" src="https://player.vimeo.com/video/887586551" width="640" height="360" frameborder="0" allowfullscreen></iframe>

In the video,

- `content-staging.instawp.xyz` is the site containing the source of content, in English
- `translation-es.instawp.xyz` is the Spanish translator's dedicated site
- `content-es.instawp.xyz` is the site in production, in Spanish

### Implementation

Create a site in InstaWP for your translator (or maybe for all the different translators, or for every language, or other). This may be a temporary site that is created just for this post, or a reserved site that you can keep using for future posts too.

In your staging site, write your blog post either using the block-based WordPress editor, or the classic editor (they are both supported).

When it's finished, use Gato GraphQL to translate the content to the desired language via Google Translate. If using the block editor, the translation will already be stored within each block (property by property), so you don't need to do any copy/pasting of strings and put them back on the post.

At this point, the staging site will contain the translated post, as a duplicate from the original.

Export this post to the translator's dedicated site on InstaWP, using Gato GraphQL (as in the video) or InstaWP Connect.

Then ask the translator to fix the translation, directly within the WordPress editor (or the classic editor), and save the post. You can expect Google Translate's translation to be around 90% accurate, so there's only 10% of work left to do.

When finished, import the final translated post to your production site for that language.

Voilà! You have used independent environments to produce your content, translate it, and deploy it.
