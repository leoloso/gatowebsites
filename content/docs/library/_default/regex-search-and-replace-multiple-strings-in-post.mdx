---
title: "Regex search and replace multiple strings in a post"
description: "Search and replace multiple strings in the post's title, excerpt and content"
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
# referencedTutorialLessonSlugs:
# - 'search-replace-and-store-again'
# referencedExtensionSlugs:
# - 'field-to-input'
# - 'multiple-query-execution'
# - 'php-functions-via-schema'
# predefinedPersistedQueryTitleInPlugin: Regex replace strings in post
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
