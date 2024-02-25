---
title: Display all links in all posts
description: Extract all links added in the HTML source for all posts
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedExtensionSlugs:
- 'conditional-field-manipulation'
- 'field-on-field'
- 'field-response-removal'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'php-functions-via-schema'
predefinedPersistedQueryTitleInPlugin: Fetch post links
---

This query displays all links added to all posts.

It finds all `<a href="(...)">(...)</a>` strings in all posts, and lists them down in the response as `{ href: (...), text: (...) }`.

```graphql
query GetPostLinks {
  posts(pagination: { limit: -1 }) {
    id
    title
    
    # Get the post content, and identify the links
    rawContent
      @remove
    adaptedRawContent: _strRegexReplace(
      searchRegex: "#<a.*(?=href=\"([^\"]*)\")[^>]*>([^<]*)<\/a>#i",
      replaceWith: "*****|||||$1|||||$2*****",
      in: $__rawContent
    )
      @remove
    
    # Extract the links into an object { href: ..., text: ...}
    links: _strSplit(
      string: $__adaptedRawContent,
      separator: "*****"
    )
      @underEachArrayItem(
        passValueOnwardsAs: "entry"
        affectDirectivesUnderPos: [1, 2, 3]
      )
        @applyField(
          name: "_strStartsWith"
          arguments: {
            search: "|||||"
            in: $entry
          }
          passOnwardsAs: "isMatch"
        )
        @applyField(
          name: "_not"
          arguments: {
            value: $isMatch
          }
          passOnwardsAs: "isNotMatch"
        )
        @if(
          condition: $isNotMatch
        )
          @setNull
    
      @arrayFilter
    
      @underEachArrayItem(
        passValueOnwardsAs: "match"
        affectDirectivesUnderPos: [1, 2, 3, 4]
      )
        @applyField(
          name: "_strSplit"
          arguments: {
            separator: "|||||"
            string: $match
          }
          passOnwardsAs: "matchSplit"
        )
        @applyField(
          name: "_arrayItem"
          arguments: {
            array: $matchSplit
            position: 1
          }
          passOnwardsAs: "matchHref"
        )
        @applyField(
          name: "_arrayItem"
          arguments: {
            array: $matchSplit
            position: 2
          }
          passOnwardsAs: "matchText"
        )
        @applyField(
          name: "_echo"
          arguments: {
            value: {
              href: $matchHref
              text: $matchText
            }
          }
          setResultInResponse: true
        )
  }
}
```
