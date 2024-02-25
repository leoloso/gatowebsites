---
title: Insert a block in all posts
metaDesc: Identify the nth block of a given type in all posts, and place a custom block right after it
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'inserting-removing-a-gutenberg-block-in-bulk'
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
predefinedPersistedQueryTitleInPlugin: Insert block in posts
---

This query identifies the nth block of a given type (`"wp:paragraph"` by default) in all posts, and places the provided custom block's HTML content right after it.

Variable `$injectBlockMarkup` must receive the full HMTL markup for the block (with quotes escaped for the JSON input). Eg:

```html
<!-- mycompany:black-friday-campaign-video --><figure class=\"wp-block-video\"><video controls src=\"https://mysite.com/videos/BlackFriday2023.mp4\"></video></figure><!-- /mycompany:black-friday-campaign-video -->
```

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
query CreateRegex(
  $searchBlockType: String! = "wp:paragraph"
  $injectAfterBlockCount: Int = 1
  $injectBlockMarkup: String!
) {
  endingBlockMarkup: _sprintf(
    string: "<!-- /%s -->",
    values: [$searchBlockType]
  )
    @remove
  endingBlockMarkupArray: _arrayPad(
    array: [],
    length: $injectAfterBlockCount,
    value: $__endingBlockMarkup
  )
    @remove
  regexString: _arrayJoin(
    array: $__endingBlockMarkupArray,
    separator: "[\\s\\S]+"
  )
    @remove
  regex: _sprintf(
    string: "#(%s)#U",
    values: [$__regexString]
  )
    @export(as: "regex")
    @remove
  replaceWith: _sprintf(
    string: "$1%s",
    values: [$injectBlockMarkup]
  )
    @export(as: "replaceWith")
    @remove
}

mutation InsertBlockInAllPosts
  @depends(on: "CreateRegex")
{
  posts: posts(
    pagination: { limit: -1 }
  ) {
    id
    rawContent
    adaptedRawContent: _strRegexReplace(
      in: $__rawContent,
      searchRegex: $regex,
      replaceWith: $replaceWith,
      limit: 1
    )
    update(input: {
      contentAs: { html: $__adaptedRawContent },
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
