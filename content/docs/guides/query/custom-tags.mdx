---
title: Custom Tags
description: Examples of queries to fetch custom tag taxonomy data.
# image: /assets/GatoGraphQL-logo-suki.png
order: 660
---

📣 **Note:** Read more in guide [Working with Custom Tags](../../interact/working-with-custom-tags).

These are examples of queries to fetch custom tag taxonomy data.

## Taxonomies unmapped to the schema

Retrieve tags with taxonomy `"product-tag"`:

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

## Retrieving tags associated to a custom post

Type `GenericCustomPost` has field `tags`, to retrieve the custom tags added to the custom post:

```graphql
query {
  customPosts(
    filter: { customPostTypes: "product" }
  ) {
    __typename

    ... on GenericCustomPost {
      tags(taxonomy: "product-tag") {
        __typename
        id
        name
        taxonomy
      }
    }
  }
}
```

## Filtering custom posts by tag

To retrieve the custom posts with a given tag or tags, we can use inputs `filter.tagIDs` or `filter.tagSlugs` and `filter.tagTaxonomy`:

```graphql
query {
  customPostsByTagIDs: customPosts(
    filter: {
      tagIDs: [26, 28],
      tagTaxonomy: "product-tag"
    }
  ) {
    id
    title
  }

  customPostsByTagSlugs: customPosts(
    filter: {
      tagSlugs: ["tango", "rock"],
      tagTaxonomy: "product-tag"
    }
  ) {
    id
    title
  }
}
```
