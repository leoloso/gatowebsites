---
title: Replace an old post slug with a new post slug in all posts
description: Convert all content to point to the new URL for some post
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'adapting-content-in-bulk'
- 'search-replace-and-store-again'
- 'site-migrations'
referencedExtensionSlugs:
- 'field-to-input'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - easy-wordpress-bulk-transform-and-update
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - simplest-wordpress-content-translation
# - tailored-wordpress-automator
# - unhindered-wordpress-email-notifications
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Replace post slug in posts
---

After changing the slug of a post, execute this query to convert all content to point to the new URL.

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
query ExportData(
  $oldPostSlug: String!
  $newPostSlug: String!
) {
  siteURL: optionValue(name: "siteurl")

  oldPostURL: _strAppend(
    after: $__siteURL,
    append: $oldPostSlug
  ) @export(as: "oldPostURL")

  newPostURL: _strAppend(
    after: $__siteURL,
    append: $newPostSlug
  ) @export(as: "newPostURL")
}

mutation ReplaceOldWithNewSlugInPosts
  @depends(on: "ExportData")
{
  posts(
    filter: {
      search: $oldPostURL
    },
    pagination: {
      limit: -1
    }
  ) {
    id
    rawContent
    adaptedRawContent: _strReplace(
      search: $oldPostURL
      replaceWith: $newPostURL
      in: $__rawContent
    )
    update(input: {
      contentAs: { html: $__adaptedRawContent }
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
        rawContent
      }
    }
  }
}
```
