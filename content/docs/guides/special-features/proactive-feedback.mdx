---
title: Proactive feedback
description: Use the top-level entry 'extensions' to send data concerning deprecations and warnings in the response to the query.
# image: /assets/GatoGraphQL-logo-suki.png
order: 500
---

Use the top-level entry `extensions` to send data concerning deprecations and warnings in the response to the query.

For instance, the following query exports two fields using the same dynamic variable name `"prop"`, which generates a warning:

```graphql
query {
  posts {
    excerpt @export(as: "prop")
    content @export(as: "prop")
  }
}
```

The response will include section `warnings` (under `extensions`) with a corresponding message:

```json
{
  "extensions": {
    "warnings": [
      {
        "message": "Dynamic variable with name 'props' had already been set, had its value overridden",
        "locations": [
          {
            "line": 4,
            "column": 25
          }
        ]
      }
    ]
  },
  "data": {
    "posts": {
      "excerpt": "Hello world!",
      "Content": "<p>Hello world!</p>"
    }
  }
}
```

## Deprecations

Deprecations are returned in the same query involving deprecated fields, and not only when doing introspection.

## Warnings

Warning are issues which can be considered non-blocking, i.e. they enhance the query but do not break it.
