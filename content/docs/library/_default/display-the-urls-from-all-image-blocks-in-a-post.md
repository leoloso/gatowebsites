---
title: Display the URLs from all image blocks in a post
description: Extract the URL property for all core/image blocks in a post (including inner blocks)
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'retrieving-structured-data-from-blocks'
referencedExtensionSlugs:
- 'field-on-field'
- 'field-value-iteration-and-manipulation'
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
predefinedPersistedQueryTitleInPlugin: Fetch image URLs in blocks
---

This query fetches the data for all blocks in the post (including inner blocks) while filtering them by `core/image` type, and extracts the URL property from each.

```graphql
query GetImageBlockImageURLs($postId: ID!) {
  post(by: { id: $postId }, status: any) {
    coreImageURLs: blockFlattenedDataItems(
      filterBy: { include: "core/image" }
    )
      @underEachArrayItem(
        passValueOnwardsAs: "blockDataItem"
      )
        @applyField(
          name: "_objectProperty"
          arguments: {
            object: $blockDataItem,
            by: {
              path: "attributes.url"
            }
          }
          setResultInResponse: true
        )
      @arrayUnique
  }
}
```
