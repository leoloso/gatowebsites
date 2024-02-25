---
title: Deprecation Notifier
summary: "Send deprecations in the response to the query (and not only when doing introspection)."
socialImage: /assets/product-logos/GatoGraphQL-suki-extension.png
order: 600
shopProductTestModeURL: https://shop.gatographql.com/checkout/buy/4f79d7ce-583b-46b6-93f4-893a8f500754
shopProductURL: https://shop.gatographql.com/checkout/buy/3d19b445-776b-4478-a4ce-c0f79073924b
productPrices:
- 4.99
- 9.99
- 19.99
bundles:
- responsible-wordpress-public-api
---

Send deprecations in the response to the query (and not only when doing introspection), under the top-level entry `extensions`.

## Description

Whenever a deprecated field is queried, a deprecation message is returned in that same GraphQL response, under the top-level entry `extensions`.

This alerts users of our APIs to upgrade their use of the schema, even when they are not paying attention to the introspection query.

For instance, running this query, where field `isPublished` is deprecated:

```graphql
query {
  posts {
    title
    isPublished
  }
}
```

...will produce this response:

```json
{
  "extensions": {
    "deprecations": [
      {
        "message": "Use 'isStatus(status:published)' instead of 'isPublished'",
        "extensions": {
          ...
        }
      }
    ]
  },
  "data": {
    "posts": [
      ...
    ]
  }
}
```

<!-- ## Bundles including extension

- [“All in One Toolbox for WordPress” Bundle](../../bundles/all-in-one-toolbox-for-wordpress)
- [“Responsible WordPress Public API” Bundle](../../bundles/responsible-wordpress-public-api) -->
