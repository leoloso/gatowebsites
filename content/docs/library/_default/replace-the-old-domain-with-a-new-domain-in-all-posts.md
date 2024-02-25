---
title: Replace the old domain with a new domain in all posts
description: Convert all content to point to the new URL for the site
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'adapting-content-in-bulk'
- 'search-replace-and-store-again'
- 'site-migrations'
referencedExtensionSlugs:
- 'field-to-input'
- 'multiple-query-execution'
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
predefinedPersistedQueryTitleInPlugin: Replace domain in posts
---

This query first filters all posts containing `"https://my-old-domain.com"` in its content, and replaces this string with `"https://my-new-domain.com"`.

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
mutation ReplaceOldWithNewDomainInPosts(
  $oldDomain: String!,
  $newDomain: String!
) {
  posts(
    filter: {
      search: $oldDomain
    },
    pagination: {
      limit: -1
    }
  ) {
    id
    rawContent
    adaptedRawContent: _strReplace(
      search: $oldDomain
      replaceWith: $newDomain
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
