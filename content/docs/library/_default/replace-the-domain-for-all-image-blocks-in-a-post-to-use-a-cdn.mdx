---
title: Replace the domain for all image blocks in a post (to use a CDN)
description: "Update image URLs to route them via a CDN"
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
# referencedTutorialLessonSlugs:
# - 'modifying-and-storing-again-the-image-urls-from-all-image-blocks-in-a-post'
# referencedExtensionSlugs:
# - 'field-on-field'
# - 'field-response-removal'
# - 'field-to-input'
# - 'field-value-iteration-and-manipulation'
# - 'multiple-query-execution'
# - 'php-functions-via-schema'
---

This query modifies the URL of images in the `core/image` blocks in a post, replacing `mysite.com` (provided via variable `$domain`) to `cdn.mysite.com` (provided via variable `$cdnDomain`), as to start serving those assets from a CDN.

```graphql
query InitializeEmptyVariables {
  emptyArray: _echo(value: [])
    @export(as: "coreImageURLItems")
    @export(as: "coreImageURLReplacementsFrom")
    @export(as: "coreImageURLReplacementsTo")
    @remove
}

# Extract all the image URLs from the `core/image` blocks, and export them under `$coreImageURLItems`
query FetchData(
  $postID: ID!
  $domain: String!
  $cdnDomain: String!
)
  @configureWarningsOnExportingDuplicateVariable(enabled: false)
  @depends(on: "InitializeEmptyVariables")
{
  post(by: { id: $postID }, status: any ) {
    rawContent
      @export(as: "rawContent")

    coreImage: blockFlattenedDataItems(
      filterBy: { include: "core/image" }
    )
      @underEachArrayItem
        @underJSONObjectProperty(
          by: { key: "attributes" }
        )
          @underJSONObjectProperty(
            by: { key: "url" }
            failIfNonExistingKeyOrPath: false
          )
            @export(
              as: "coreImageURLItems"
            )
  }
  
  searchRegex: _sprintf(
    string: "#^https?://%s/(.*)\\.(jpe?g|png|gif|avif|webp)$#",
    values: [$domain]
  )
    @export(as: "searchRegex")
    
  replaceWith: _sprintf(
    string: "https://%s/$1.$2",
    values: [$cdnDomain]
  )
    @export(as: "replaceWith")
}

# Convert the URLs and place the results under `$transformations`
query TransformData
  @depends(on: "FetchData")
{
  transformations: _echo(value: {
    coreImageURL: {
      from: $coreImageURLItems,
      to: $coreImageURLItems,
    },
  })
    @underEachJSONObjectProperty
      @underJSONObjectProperty(by: { key: "to" })
        @underEachArrayItem
          @strRegexReplace(
            searchRegex: $searchRegex,
            replaceWith: $replaceWith
          )
    @export(as: "transformations")
}

# Escape the regex patterns and their replacements
query EscapeRegexStrings
  @depends(on: "TransformData")
{  
  escapedRegexStrings: _echo(value: $transformations)
    @underEachJSONObjectProperty
      @underJSONObjectProperty(by: { key: "from" })
        @underEachArrayItem
          @strReplaceMultiple(
            search: [
              "\\",
              "^",
              "$",
              "|",
              "[",
              "]",
              "(",
              ")",
              "{",
              "{",
              "#",
              "?",
              ".",
              "*",
              "+"
            ],
            replaceWith: [
              "\\\\",
              "\\^",
              "\\$",
              "\\|",
              "\\[",
              "\\]",
              "\\(",
              "\\)",
              "\\{",
              "\\}",
              "\\#",
              "\\?",
              "\\.",
              "\\*",
              "\\+"
            ]
          )
    @underEachJSONObjectProperty
      @underJSONObjectProperty(
        by: { key: "to" }
        affectDirectivesUnderPos: [1, 3],
      )
        @underEachArrayItem
          @strRegexReplace(
            searchRegex: "#\\$(\\d+)#",
            replaceWith: "\\\\\\$1"
          )
        @underEachArrayItem(
          passValueOnwardsAs: "value"
        )
          @applyField(
            name: "_sprintf",
            arguments: {
              string: "$1%s$2",
              values: [$value]
            },
            setResultInResponse: true
          )
    @export(as: "escapedRegexTransformations")
}

# Generate the regex patterns, and assign them to `$coreImageURLReplacementsFrom`
query CreateRegexReplacements
  @depends(on: "EscapeRegexStrings")
{  
  regexReplacements: _echo(value: $escapedRegexTransformations)
    @underJSONObjectProperty(
      by: { key: "coreImageURL" }
      affectDirectivesUnderPos: [1, 5]
    )
      @underJSONObjectProperty(
        by: { key: "from" }
        affectDirectivesUnderPos: [1, 3],
      )
        @underEachArrayItem(
          passValueOnwardsAs: "value"
        )
          @applyField(
            name: "_sprintf",
            arguments: {
              string: "#(<!-- wp:image .*?-->\\n?.*<img .*?src=\\\")%s(\\\".*>.*\\n?<!-- /wp:image -->)#",
              values: [$value]
            },
            setResultInResponse: true
          )
        @export(
          as: "coreImageURLReplacementsFrom",
        )
      @underJSONObjectProperty(
        by: { key: "to" }
      )
        @export(
          as: "coreImageURLReplacementsTo",
        )
}

# Execute the regex search and replace, export the results under `$transformedRawContent`
query ExecuteRegexReplacements
  @depends(on: "CreateRegexReplacements")
{  
  transformedRawContent: _echo(value: $rawContent)
    @strRegexReplaceMultiple(
      limit: 1,
      searchRegex: $coreImageURLReplacementsFrom,
      replaceWith: $coreImageURLReplacementsTo
    )
    
    @export(as: "transformedRawContent")
}

# Execute the mutation to update the post
mutation ReplaceDomainOnPostCoreImageBlocksToUseCDN($postID: ID!)
  @depends(on: "ExecuteRegexReplacements")
{
  updatePost(input: {
    id: $postID,
    contentAs: {
      html: $transformedRawContent
    }
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
