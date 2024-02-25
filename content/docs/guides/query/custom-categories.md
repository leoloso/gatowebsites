---
title: Custom Categories
metaDesc: Examples of queries to fetch custom category taxonomy data.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 670
---

📣 **Note:** Read more in guide [Working with Custom Categories](../../interact/working-with-custom-categories).

These are examples of queries to fetch custom category taxonomy data.

## Taxonomies unmapped to the schema

Retrieve categories with taxonomy `"product-category"`:

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

## Retrieving categories associated to a custom post

Type `GenericCustomPost` has field `categories`, to retrieve the custom categories added to the custom post:

```graphql
query {
  customPosts(
    filter: { customPostTypes: "product" }
  ) {
    __typename

    ... on GenericCustomPost {
      categories(taxonomy: "product-cat") {
        __typename
        id
        name
        taxonomy
      }
    }
  }
}
```

## Filtering custom posts by category

To retrieve the custom posts with a given category or categories, we can use inputs `filter.categoryIDs` and `filter.categoryTaxonomy`:

```graphql
query {
  customPostsByCat: customPosts(
    filter: {
      categoryIDs: [26, 28],
      categoryTaxonomy: "product-category"
    }
  ) {
    id
    title
  }
}
```
