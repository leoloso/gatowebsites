---
title: Working with Custom Tags
metaDesc: This is how to query tag data from the GraphQL schema.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 160
---

We can add tags to posts in WordPress (i.e. using the taxonomy with name `"post_tag"`). This is already mapped in the GraphQL schema via the [`PostTag` type](../../query/post-tags), associated to a `Post` entry.

Likewise, a custom post type, defined by any theme or plugin (such as `"product"`), can have its own taxonomy tag associated to it (such as `"product-cat"`). As these custom post types are not mapped to the GraphQL schema, they are [resolved via type `GenericCustomPost`](../../query/custom-posts), and their tags are resolved as `GenericTag`.

We use fields `tag` and `tags` to fetch tag data, which must indicate which taxonomy they refer to via mandatory field argument `taxonomy`. The result is of the union type `TagUnion`, which includes entries from either `PostTag` or `GenericTag` (depending on the entry's taxonomy).

For instance, this query retrieves tags with taxonomy `"product-tag"`:

```graphql
query {
  tags(taxonomy: "product-tag") {
    __typename

    ...on Tag {
      count
      description
      id
      name
      slug
      url
    }
    
    ...on GenericTag {
      taxonomy   
      customPostCount
      customPosts {
        __typename
        ...on CustomPost {
          id
          title
        }
      }
    }
  }
}
```

## Allowing access to unmapped tag taxonomies

The tag taxonomies accessible via the `GenericTag` type must be explicitly configured in the plugin Settings page, as explained in guide [Adding a custom tag taxonomy to the schema](../../config/adding-a-custom-tag-taxonomy-to-the-schema).
