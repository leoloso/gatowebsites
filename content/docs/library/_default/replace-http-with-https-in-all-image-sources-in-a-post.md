---
title: 'Replace "http" with "https" in all image sources in a post'
description: Switch to incorporating SSL when loading images in your site
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'search-replace-and-store-again'
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
predefinedPersistedQueryTitleInPlugin: 'Replace "http" with "https" in image sources in post'
---

This query replaces all `http` URLs with `https` in the image sources from the post's HTML.

```graphql
query GetPostData($postId: ID!) {
  post(by: { id: $postId }, status: any) {
    id
    rawContent
    adaptedRawContent: _strRegexReplace(
      searchRegex: "/<img(\\s+)?([^>]*?\\s+?)?src=([\"'])http:\\/\\/(.*?)/"
      replaceWith: "<img$1$2src=$3https://$4$3"
      in: $__rawContent
    )
      @export(as: "adaptedRawContent")
  }
}

mutation ReplaceHttpWithHttpsInImageSources($postId: ID!)
  @depends(on: "GetPostData")
{
  updatePost(input: {
    id: $postId,
    contentAs: { html: $adaptedRawContent },
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
      title
      rawContent
    }
  }
}
```
