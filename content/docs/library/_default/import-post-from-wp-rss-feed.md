---
title: Import post from WordPress RSS feed
description: Create a new post using the data from some WordPress RSS feed
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-to-input'
- 'helper-function-collection'
- 'http-client'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Import post from WordPress RSS feed
---

This query imports a post from a WordPress RSS feed, using the title, content and excerpt of the post.

If the author with that username exists locally, it uses it, otherwise it replaces it with the one defined via variable `$defaultAuthorUsername`.

Variable `$url` receives the URL of the WordPress single post's RSS feed. It usually is the blog post URL + `"/feed/rss/?withoutcomments=1"`. Eg:

```apacheconf
https://mysite.com/blog/hello-world/feed/rss/?withoutcomments=1
```

```graphql
query GetPostFromRSSFeedAndExportData(
  $url: URL!
) {
  _sendHTTPRequest(input: {
    url: $url,
    method: GET
  }) {
    body
    rssJSON: _strDecodeXMLAsJSON(
      xml: $__body
      alwaysArrayTagNames: [
        "category",
      ],
    )

    # Fields to be imported
    authorUsername: _objectProperty(
      object: $__rssJSON,
      by: {
        path: "rss.channel.item.dc:creator"
      }
    )
      @export(as: "authorUsername")

    # categorySlugs: _objectProperty(
    #   object: $__rssJSON,
    #   by: {
    #     path: "rss.channel.item.category"
    #   }
    # )

    content:  _objectProperty(
      object: $__rssJSON,
      by: {
        path: "rss.channel.item.content:encoded"
      }
    )
      @export(as: "content")

    excerpt:  _objectProperty(
      object: $__rssJSON,
      by: {
        path: "rss.channel.item.description"
      }
    )
      @export(as: "excerpt")

    title:  _objectProperty(
      object: $__rssJSON,
      by: {
        path: "rss.channel.item.title"
      }
    )
      @export(as: "title")
  }
}

# If the author's username exists in this site, keep it
# Otherwise, use the default one
query CheckAuthorExistsOrChange(
  $defaultAuthorUsername: String! = "admin"
)
  @depends(on: "GetPostFromRSSFeedAndExportData")
{
  existingUserByUsername: user(by: { username: $authorUsername })
  {
    id
    username
  }
  userExists: _notNull(value: $__existingUserByUsername)
  username: _if(
    condition: $__userExists,
    then: $authorUsername,
    else: $defaultAuthorUsername
  )
    @export(as: "existingAuthorUsername")
}

mutation ImportPostFromWPRSSFeed
  @depends(on: "CheckAuthorExistsOrChange")
{
  createPost(input: {
    status: draft,
    authorBy: {
      username: $existingAuthorUsername
    },
    contentAs: {
      html: $content
    },
    excerpt: $excerpt
    title: $title
  }) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    post {
      id
      slug
      date
      status

      author {
        id
        username
      }
      content
      excerpt
      title
    }
  }
}
```
