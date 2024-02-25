---
title: "Regex search and replace multiple strings in a post"
metaDesc: "Search and replace multiple strings in the post's title, excerpt and content"
socialImage: /assets/GatoGraphQL-logo-suki.png
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
predefinedPersistedQueryTitleInPlugin: Regex replace strings in post
---

This query retrieves a post, replaces all matches of a list of regex strings with a list of strings in the post's content and title, and stores the post again.

```graphql
query GetPostData(
  $postId: ID!
  $searchRegex: [String!]!,
  $replaceWith: [String!]!
) {
  post(by: { id: $postId }, status: any) {
    title
    adaptedPostTitle: _strRegexReplaceMultiple(
      searchRegex: $searchRegex
      replaceWith: $replaceWith
      in: $__title
    )
      @export(as: "adaptedPostTitle")

    rawContent
    adaptedRawContent: _strRegexReplaceMultiple(
      searchRegex: $searchRegex
      replaceWith: $replaceWith
      in: $__rawContent
    )
      @export(as: "adaptedRawContent")
  }
}

mutation RegexSearchAndReplaceStringsInPost($postId: ID!)
  @depends(on: "GetPostData")
{
  updatePost(input: {
    id: $postId,
    title: $adaptedPostTitle,
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
