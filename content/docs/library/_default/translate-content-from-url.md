---
title: Translate content from URL
description: Fetch the content from any URL, and translate it with Google Translate
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedTutorialLessonSlugs:
- 'translating-content-from-url'
referencedExtensionSlugs:
- 'google-translate'
- 'http-client'
predefinedPersistedQueryTitleInPlugin: Translate content from URL
---

This query translates the content from the provided URL.

```graphql
query TranslateContentFromURL(
  $url: URL!
  $fromLang: String!
  $toLang: String!
) {
  _sendHTTPRequest(input: {
    url: $url,
    method: GET
  }) {
    body
    translated: body @strTranslate(
      from: $fromLang
      to: $toLang
    )
  }
}
```
