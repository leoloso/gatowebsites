---
title: 'Translate a post from the "Classic editor"'
description: 'Query to translate a "Classic editor" post to the desired language'
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedExtensionSlugs:
- 'field-value-iteration-and-manipulation'
- 'google-translate'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - simplest-wordpress-content-translation
predefinedPersistedQueryTitleInPlugin: Translate post (Classic editor)
---

This query translates a "Classic editor" post to the desired language.

Depending on the `$update` parameter, the translation will either be saved under the same post, or as a new post.

```graphql
query FetchData($postId: ID!)
{
  post(by: { id: $postId }, status: any) {
    title
    rawContent
    rawExcerpt
      @export(
        as: "dataToTranslate",
        affectAdditionalFieldsUnderPos: [1, 2]
      )
  }
}

query TranslateData(
  $toLang: String!
)
  @depends(on: "FetchData")
{  
  translations: _echo(value: $dataToTranslate)
    @underEachJSONObjectProperty
      @strTranslate(to: $toLang)
    @underJSONObjectProperty(by: { key: "title" })
      @export(as: "translatedTitle")
    @underJSONObjectProperty(by: { key: "rawContent" })
      @export(as: "translatedRawContent")
    @underJSONObjectProperty(by: { key: "rawExcerpt" })
      @export(as: "translatedRawExcerpt")
}

mutation TranslateClassicEditorPost(
  $postId: ID!
  $update: Boolean! = false
)
  @depends(on: "TranslateData")
{
  createPost(input: {
    title: $translatedTitle,
    contentAs: {
      html: $translatedRawContent
    },
    excerpt: $translatedRawExcerpt,
    status: draft
  })
    @skip(if: $update)
  {
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
      slug
      rawContent
      rawExcerpt
    }    
  }

  updatePost(input: {
    id: $postId,
    title: $translatedTitle,
    contentAs: {
      html: $translatedRawContent
    },
    excerpt: $translatedRawExcerpt
  })
    @include(if: $update)
  {
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
      rawExcerpt
    }    
  }
}
```
