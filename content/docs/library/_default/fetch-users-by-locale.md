---
title: Fetch users by locale
description: Retrieve all users with a certain locale, providing a regex to identify them
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'searching-wordpress-data'
predefinedPersistedQueryTitleInPlugin: Fetch users by locale
---

This query retrieves all users with a certain locale, providing a regex to identify them.

For instance, provide variable `$localeRegex` with value `"es_[A-Z]+"` to fetch users with the Spanish locale (`es_AR` for Argentina, `es_ES` for Spain, etc).

```graphql
query FetchUsersByLocale(
  $localeRegex: String!
) {
  usersByLocale: users(
    filter: { metaQuery: {
      key: "locale",
      compareBy: {
        stringValue: {
          value: $localeRegex
          operator: REGEXP
        }
      }
    }},
    pagination: { limit: -1 }
  ) {
    id
    name
    locale: metaValue(key: "locale")
  }
}
```
