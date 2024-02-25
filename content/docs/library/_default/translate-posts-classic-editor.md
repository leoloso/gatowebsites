---
title: 'Translate posts (in bulk) from the "Classic editor"'
description: 'Query to translate multiple "Classic editor" posts to the desired language, executing a single call to the Google Translate API'
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedExtensionSlugs:
- 'field-on-field'
- 'field-response-removal'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'google-translate'
- 'multiple-query-execution'
- 'php-functions-via-schema'
predefinedPersistedQueryTitleInPlugin: Translate posts (Classic editor)
---

This query translates multiple "Classic editor" posts at once (in bulk), while executing a single call to the Google Translate API containing all text to translate from all the posts.

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
query FetchData($postIds: [ID!]!)
{
  posts(filter: { ids: $postIds, status: any } ) {
    title
    rawContent
    rawExcerpt
      @export(
        as: "dataToTranslate",
        affectAdditionalFieldsUnderPos: [1, 2]
        type: DICTIONARY
      )
  }
}

query TranslateData(
  $toLang: String!
)
  @depends(on: "FetchData")
{  
  translatedData: _echo(value: $dataToTranslate)
    @underEachJSONObjectProperty
      @underEachJSONObjectProperty
        @strTranslate(to: $toLang)
    @export(as: "translatedData")
}

query GenerateMutationInputs
  @depends(on: "TranslateData")
{  
  postInputs: _echo(value: $translatedData)
    @underEachJSONObjectProperty(
      passValueOnwardsAs: "postTranslatedData"
      affectDirectivesUnderPos: [1, 2, 3, 4]
    )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $postTranslatedData,
          by: {
            key: "title",
          }
        },
        passOnwardsAs: "postTranslatedTitle"
      )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $postTranslatedData,
          by: {
            key: "rawExcerpt",
          }
        },
        passOnwardsAs: "postTranslatedRawExcerpt"
      )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $postTranslatedData,
          by: {
            key: "rawContent",
          }
        },
        passOnwardsAs: "postTranslatedRawContent"
      )
      @applyField(
        name: "_echo",
        arguments: {
          value: {
            title: $postTranslatedTitle,
            excerpt: $postTranslatedRawExcerpt,
            contentAs: {
              html: $postTranslatedRawContent
            }
          }
        },
        setResultInResponse: true
      )
    @export(as: "postInputs")
}

mutation TranslateClassicEditorPosts($postIds: [ID!]!)
  @depends(on: "GenerateMutationInputs")
{
  updatePosts: posts(filter: { ids: $postIds, status: any } ) {
    id
    postInput: _objectProperty(
      object: $postInputs,
      by: {
        key: $__id
      }
    )
      @remove
    update(input: $__postInput) {
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
        rawExcerpt
        rawContent
      }
    }
  }
}
```
