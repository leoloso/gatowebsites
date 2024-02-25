---
title: Exposing “sensitive” data
metaDesc: The GraphQL schema must strike a balance between public and private data, as to avoid exposing private information in a public API.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 210
---

The GraphQL schema must strike a balance between public and private data, as to avoid exposing private information in a public API.

By default, all fields in the GraphQL schema can only access public data. For instance, `posts` can only retrieve posts with status `"publish"`.

In addition, we can configure the schema to expose “sensitive” data, via special fields, input fields and enum values. These elements are expected to be used by the admin only, and must be explicitly enabled for a specific custom endpoint or persisted query, in order for it to fetch private data.

For instance, field argument `posts(filter:)` will contain an additional input field `status`, which allows us to retrieve non-published posts (eg: posts with status `"pending"`, `"draft"` or `"trash"`) for any user:

```graphql
query {
  # These are published posts only
  publicPosts: posts {
    id
    title
  }

  # Input field `posts(filter.status:)` must be enabled
  privatePosts: posts(
    filter:{
      status: [draft]
    }
  ) {
    id
    title
  }
}
```
