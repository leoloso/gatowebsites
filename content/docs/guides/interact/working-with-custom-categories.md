---
title: Working with Custom Categories
description: This is how to query category data from the GraphQL schema.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 170
---

We can add categories to posts in WordPress (i.e. using the taxonomy with name `"category"`). This is already mapped in the GraphQL schema via the [`PostCategory` type](../../query/post-categories), associated to a `Post` entry.

Likewise, a custom post type, defined by any theme or plugin (such as `"product"`), can have its own taxonomy category associated to it (such as `"product-cat"`). As these custom post types are not mapped to the GraphQL schema, they are [resolved via type `GenericCustomPost`](../../query/custom-posts), and their categories are resolved as `GenericCategory`.

We use fields `category` and `categories` to fetch category data, which must indicate which taxonomy they refer to via mandatory field argument `taxonomy`. The result is of the union type `CategoryUnion`, which includes entries from either `PostCategory` or `GenericCategory` (depending on the entry's taxonomy).

For instance, this query retrieves categories with taxonomy `"product-category"`:

```graphql
query {
  categories(taxonomy: "product-category") {
    __typename

    ...on Category {
      count
      description
      id
      name
      slug
      url
    }
    
    ...on GenericCategory {
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

## Allowing access to unmapped category taxonomies

The category taxonomies accessible via the `GenericCategory` type must be explicitly configured in the plugin Settings page, as explained in guide [Adding a custom category taxonomy to the schema](../../config/adding-a-custom-category-taxonomy-to-the-schema).
