---
title: Comments
description: Examples of queries to fetch and add comments.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 500
---

These are examples of queries to fetch and add comments.

## Fetching comments

Comments from a post:

```graphql
query {
  post(by: { id: 1 }) {
    comments {
      id
      content
      author {
        name
      }
      parent {
        id
      }
    }
  }
}
```

Comments and their responses, for multiple levels:

```graphql
query {
  post(by: { id: 1499 }) {
    comments(pagination: { limit: 5 }) {
      ...CommentFields
      responses {
        ...CommentFields
        responses {
          ...CommentFields
        }
      }
    }
  }
}

fragment CommentFields on Comment {
  id
  date
  content
}
```

Filtering comments:

```graphql
{
  posts {
    title
    comments(
      filter: { search: "insight" }
    ) {
      id
      content
    }
  }
}
```

Counting comment results:

```graphql
{
  posts {
    id
    commentCount
  }
}
```

Paginating comments:

```graphql
{
  posts {
    id
    comments(
      pagination: {
        limit: 3,
        offset: 3
      }
    ) {
      id
      date
      content
    }
  }
}
```

All comments on the site from a specific user:

```graphql
{
  commentCount(filter: { authorIDs: [1], parentID: null })
  comments(filter: { authorIDs: [1], parentID: null }, pagination: { limit: -1 }) {
    id
    date
    content
  }
}
```

A specific comment:

```graphql
{
  comment(by: { id: 272 }) {
    id
    date
    content
    author {
      id
      name
    }
  }
}
```

Fetching meta values:

```graphql
{
  posts {
    id
    comments{
      id
      metaValue(
        key:"someKey"
      )
    }
  }
}
```

## Adding a comment

Logged-in or non-logged-in users can add comments:

```graphql
mutation {
  addCommentToCustomPost(
    input: { customPostID: 1459, commentAs: { html: "Lovely tango!" } }
  ) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    commentID
    comment {
      date
      content
      author {
        id
        name
      }
    }
  }
}
```

We can also use nested mutations:

```graphql
mutation {
  post(by: { id: 1459 }) {
    id
    title
    addComment(input: { commentAs: { html: "Lovely tango!" } }) {
      status
      errors {
        __typename
        ...on ErrorPayload {
          message
        }
      }
      commentID
      comment {
        date
        content
        author {
          id
          name
        }
      }
    }
  }
}
```

## Replying to a comment

Similar to adding a comment, but also providing argument `parentCommentID`:

```graphql
mutation {
  addCommentToCustomPost(
    input: {
      customPostID: 1459
      parentCommentID: 272
      commentAs: { html: "Hi to you too" }
    }
  ) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    commentID
    comment {
      date
      content
      author {
        id
        name
      }
    }
  }
}
```

Or use the more specific `replyComment` field:

```graphql
mutation {
  replyComment(input: { parentCommentID: 272, commentAs: { html: "Hi to you too" } }) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    commentID
    comment {
      date
      content
      author {
        id
        name
      }
    }
  }
}
```

Or navigate to the parent comment using nested mutations:

```graphql
mutation {
  post(by: { id: 1459 }) {
    comments(filter: { ids: 272 }) {
      id
      content
      reply(input: { commentAs: { html: "Everything good?" } }) {
        status
        errors {
          __typename
          ...on ErrorPayload {
            message
          }
        }
        commentID
        comment {
          date
          content
        }
      }
    }
  }
}
```
