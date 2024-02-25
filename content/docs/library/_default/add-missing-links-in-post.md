---
title: 'Add missing links in post'
description: Search for URLs which have no link in the post's HTML content and add a link around them
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
predefinedPersistedQueryTitleInPlugin: Add missing links in post
---

This query does a regex search and replace to add missing links in the post's HTML content.

All URLs which are not surrounded by an anchor tag, such as:

```html
<p>Visit my website: https://mysite.com.</p>
```

...are added the correspondig `<a>` tag around them (while also removing the domain from the text, and adding a target to open in a new window), becoming:

```html
<p>Visit my website: <a href="https://mysite.com" target="_blank">mysite.com</a>.</p>
```

```graphql
query GetPostData($postId: ID!) {
  post(by: { id: $postId }, status: any) {
    id
    rawContent
    adaptedRawContent: _strRegexReplace(
      searchRegex: "#\\s+((https?)://(\\S*?\\.\\S*?))([\\s)\\[\\]{},;\"\\':<]|\\.\\s|$)#i"
      replaceWith: "<a href=\"$1\" target=\"_blank\">$3</a>$4"
      in: $__rawContent
    )
      @export(as: "adaptedRawContent")
  }
}

mutation AddMissingLinksInPost($postId: ID!)
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
