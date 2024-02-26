---
title: Post Tags
description: Examples of queries to fetch post tag data.
# image: /assets/GatoGraphQL-logo-suki.png
order: 600
---

These are examples of queries to fetch post tag data.

## Fetching tags

List of post tags, ordering them by name, and showing their post count:

```graphql
query {
  postTags(
    sort: { order: ASC, by: NAME }
    pagination: { limit: 50 }
  ) {
    id
    name
    url
    postCount
  }
}
```

All tags in a post:

```graphql
query {
  post(by: { id: 1 }) {
    tags {
      id
      name
      url
    }
  }
}
```

Tag names in posts:

```graphql
query {
  posts {
    id
    title
    tagNames
  }
}
```

A list of predefined tags:

```graphql
query {
  postTags(filter: { ids: [66, 70, 191] }) {
    id
    name
    url
  }
}
```

Filtering tags by name:

```graphql
query {
  postTags(filter: { search: "oo" }) {
    id
    name
    url
  }
}
```

Counting tag results:

```graphql
query {
  postTagCount(filter: { search: "oo" })
}
```

Paginating tags:

```graphql
query {
  postTags(
    pagination: {
      limit: 5,
      offset: 5
    }
  ) {
    id
    name
    url
  }
}
```

Fetching meta values:

```graphql
query {
  postTags(
    pagination: { limit: 5 }
  ) {
    id
    name
    metaValue(
      key: "someKey"
    )
  }
}
```

## Setting tags on a post

Mutation:

```graphql
mutation {
  setTagsOnPost(
    input: {
      id: 1499, 
      tags: ["api", "development"]
    }
  ) {
    status
    errors {
      __typename
      ... on ErrorPayload {
        message
      }
    }
    postID
    post {
      tags {
        id
      }
      tagNames
    }
  }
}
```

Nested mutation:

```graphql
mutation {
  post(by: { id: 1499 }) {
    setTags(
      input: {
        tags: ["api", "development"]
      }
    ) {
      status
      errors {
        __typename
        ... on ErrorPayload {
          message
        }
      }
      postID
      post {
        tags {
          id
        }
        tagNames
      }
    }
  }
}
```
