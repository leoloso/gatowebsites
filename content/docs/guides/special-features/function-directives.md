---
title: Function Directives
isPRO: true
metaDesc: The GraphQL schema is provided with directives which expose functionalities commonly found in programming languages (such as PHP).
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 915
templateEngineOverride: md
---

📣 **Note:** This feature is unlocked by the [PHP Functions via Schema](../../../extensions/php-functions-via-schema/) extension.

The GraphQL schema is provided with directives which expose functionalities commonly found in programming languages (such as PHP).

Directive fields are useful for manipulating the data once it has been retrieved, allowing us to transform a field value in whatever way it is required, and granting us powerful data import/export capabilities.

For instance, this query:

```graphql
query {
  posts {
    title @strUpperCase
  }
}
```

...will produce this response:

```json
{
  "data": {
    "posts": [
      {
        "title": "HELLO WORLD!"
      },
      {
        "title": "LOVELY WEATHER"
      }
    ]
  }
}
```
