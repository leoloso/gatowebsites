---
title: Output extensions
metaDesc: "Gato GraphQL's 'Proactive Feedback' feature extends the response of the GraphQL API to offer additional information: Deprecations and Warnings."
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 500
---

The GraphQL spec describes in detail how the response must be formatted, which involves defining what top-level entries must be used in the returned map: the queried data is added under entry `data`, and the errors under entry `errors`.

But sometimes we need to output some additional information, such as logs, warnings or suggestions. These entries are not covered by the spec, and we are banned to add them under their own top-level entry. Instead, the GraphQL spec provides a special location which we can fill as we desire, to pass whatever custom data we want: the top-level `extensions` entry.

As explained in the [Response Format section](https://spec.graphql.org/draft/#sec-Response-Format):

> The response map may also contain an entry with key `extensions`. This entry, if set, must have a map as its value. This entry is reserved for implementors to extend the protocol however they see fit, and hence there are no additional restrictions on its contents.

Gato GraphQL's "Proactive Feedback" feature makes use of this capability to extend the response of the GraphQL API to offer additional information:

- Deprecations
- Warnings
<!-- - Logs
- Notices
- Suggestions -->

We can then provide additional information to our users, to indicate potential improvements to the query:

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

<!-- We can then proactively provide suggestions to our users, like this:

```json
{
  "extensions": {
    "suggestions": [
      {
        "message": "Want to be on the bleeding edge? Check out our new endpoint /graphql/nightly/"
      }
    ]
  },
  "data": {
  }
}
``` -->
