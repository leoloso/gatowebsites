---
title: "Search and replace multiple strings in all posts"
description: "Search and replace multiple strings in the posts' title, excerpt and content"
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'adapting-content-in-bulk'
- 'search-replace-and-store-again'
referencedExtensionSlugs:
- 'field-response-removal'
- 'field-to-input'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - simplest-wordpress-content-translation
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Replace strings in posts
---

Update multiple posts with a single operation, searching/replacing content.

Given the posts indicated by variable `$postIds`, this query will replace all the strings in `$search` with those in `$replace`, in the post's title, excerpt and content.

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
query TransformAndExportData(
  $postIds: [ID!]!
  $search: [String!]!
  $replace: [String!]!
) {
  posts: posts(
    filter: { ids: $postIds }
    pagination: { limit: -1 }
    sort: { by: ID, order: ASC }
  ) {
    id
    rawTitle
    rawContent
    rawExcerpt
      @strReplaceMultiple(
        search: $search
        replaceWith: $replace
        affectAdditionalFieldsUnderPos: [1, 2]
      )
      @deferredExport(
        as: "postAdaptedSources"
        type: DICTIONARY
        affectAdditionalFieldsUnderPos: [1, 2]
      )
  }
}

query AdaptDataForMutationInput
  @depends(on: "TransformAndExportData")
{
  postInputs: _echo(value: $postAdaptedSources)
    @underEachJSONObjectProperty(
      passValueOnwardsAs: "adaptedSource",
      affectDirectivesUnderPos: [1, 2, 3, 4]
    )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $adaptedSource,
          by: {
            key: "rawTitle"
          }
        },
        passOnwardsAs: "adaptedTitle"
      )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $adaptedSource,
          by: {
            key: "rawExcerpt"
          }
        },
        passOnwardsAs: "adaptedExcerpt"
      )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $adaptedSource,
          by: {
            key: "rawContent"
          }
        },
        passOnwardsAs: "adaptedContent"
      )
      @applyField(
        name: "_echo",
        arguments: {
          value: {
            title: $adaptedTitle,
            excerpt: $adaptedExcerpt,
            contentAs: {
              html: $adaptedContent
            }
          }
        },
        setResultInResponse: true
      )
    @export(as: "postInputs")
}

mutation SearchAndReplaceStringsInAllPosts(
  $postIds: [ID!]!
)
  @depends(on: "AdaptDataForMutationInput")
{
  adaptedPosts: posts(
    filter: { ids: $postIds }
    pagination: { limit: -1 }
    sort: { by: ID, order: ASC }
  ) {
    id
    postInput: _objectProperty(
      object: $postInputs,
      by: { key: $__id }
    ) @remove
    update(input: $__postInput) {
      status
      errors {
        __typename
        ...on ErrorPayload {
          message
        }
      }
      post {
        title
        content
        excerpt
      }
    }
  }
}
```
