---
title: Custom Posts
description: Examples of queries to fetch custom post data.
# image: /assets/GatoGraphQL-logo-suki.png
order: 200
---

📣 **Note:** Read more in guide [Working with Custom Posts](../../interact/working-with-custom-posts).

These are examples of queries to fetch custom post data.

## CPTs mapped to the schema

Fetch custom posts with CPTs `"post"` and `"page"`:

```graphql
query {
  customPosts(filter: { customPostTypes: ["post", "page"] }) {
    ...CustomPostProps
    ...PostProps
    ...PageProps
  }
}

fragment CustomPostProps on CustomPost {
  __typename
  title
  excerpt
  url
  dateStr(format: "d/m/Y")
}

fragment PostProps on Post {
  tags {
    id
    name
  }
}

fragment PageProps on Page {
  author {
    id
    name
  }
}
```

## CPTs not mapped to the schema

Fetch custom posts for a variety of CPTs (which must be enabled to be queryable via Settings):

```graphql
query {
  customPosts(
    filter:{
      customPostTypes: [
        "page",
        "nav_menu_item",
        "wp_block",
        "wp_global_styles"
      ]
    }
  ) {
    ... on CustomPost {
      id
      title
      customPostType
      status
    }
    __typename
  }
}
```

## Filtering CPTs by a custom taxonomy

Fetch custom posts filtering by category:

```graphql
query {
  customPosts(
    filter: {
      categoryIDs: [26, 28],
      categoryTaxonomy: "product-cat"
    }
  ) {
    ... on CustomPost {
      id
      title
    }
    ... on GenericCustomPost {
      categories(taxonomy: "product-cat") {
        id
      }
    }
  }
}
```
