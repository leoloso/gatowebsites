---
title: Explaining nested mutations
metaDesc: "Nested mutations enable applying a mutation to the result of another operation, whether a query or mutation."
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 200
---

[Mutations](https://graphql.org/learn/queries/#mutations) are operations that can alter data in the GraphQL server, such as when creating a post, updating the user's name, adding a comment to a post, or others.

In GraphQL, mutations are exposed under the `MutationRoot` type only, like this:

```graphql
type MutationRoot {
  createPost(id: ID!, title: String!, content: String): Post!
  updateUserName(userID: ID!, newName: String!): User!
  addCommentToPost(postID: ID!, comment: String!, userID: ID): Comment!
}
```

(The GraphQL schema in this guide is to illustrate the examples; it is different from the schema provided in the plugin.)

With this schema, modifying the user's name is achieved like this:

```graphql
mutation {
  updateUserName(userID: 37, newName: "Peter") {
    name
  }
}
```

Mutations are exposed in the mutation root object type only to enforce that they are executed serially, as [explained in the GraphQL spec](https://spec.graphql.org/draft/#sec-Mutation):

> It is expected that the top level fields in a mutation operation perform side‐effects on the underlying data system. Serial execution of the provided mutations ensures against race conditions during these side‐effects.

The term "serial execution" is opposed to "parallel execution", which is otherwise the recommended behavior to resolve fields.

For instance, in the query below, it doesn't matter which field (if `name` or `email`) the GraphQL server resolves first, and these can be resolved in parallel:

```graphql
query {
  user(by: { id: 37 }) {
    name
    email
  }
}
```

Mutations alter data, though, so the order in which fields are resolved does matter, hence they must be executed serially (or, otherwise, they could produce race conditions).

For instance, the two queries below will produce different results:

```graphql
# Query 1: after execution, user name will be "John"
mutation {
  updateUserName(userID: 37, newName: "Peter") {
    name
  }
  updateUserName(userID: 37, newName: "John") {
    name
  }
}

# Query 2: after execution, user name will be "Peter"
mutation {
  updateUserName(userID: 37, newName: "John") {
    name
  }
  updateUserName(userID: 37, newName: "Peter") {
    name
  }
}
```

The consequence of exposing mutations only through `MutationRoot` is that this type becomes heavily bloated, containing fields with nothing in common among themselves other than having to be executed serially (which is a technical matter, not an interface design decision).

## The case for nested mutations

From the mutations above, only `createPost` truly lives under the `MutationRoot` type, because it is creating a new element out of nowhere. Mutations `updateUserName` and `addCommentToPost`, though, can perfectly have equivalent operations applied on an existing entity from another type:

```graphql
type User {
  updateName(newName: String!): User!
}

type Post {
  addComment(comment: String!, userID: ID): Comment!
}
```

With this schema, modifying the user's name could be achieved like this:

```graphql
mutation {
  user(ID: 37) {
    updateName(newName: "Peter") {
      name
    }
  }
}
```

This feature is called "nested mutations": applying a mutation to the result of another operation, whether a query or mutation.

Please notice how using nested mutations makes the GraphQL schema more elegant:

- While operation `MutationRoot.updateUserName` must receive the `ID` of the user, its equivalent operation `User.updateName` must not, since it is already executed on a user entity
- Field name is shortened from `updateUserName` to `updateName`

In addition, the GraphQL service becomes simpler and more understandable, since we can navigate among entities in the graph to modify their data in the same way as to query their data.

Nested mutations can go down multiple levels. For instance, we can add a comment on a newly created post, all within a single query:

```graphql
mutation {
  createPost(ID: 37, title: "Hello world!", content: "Just another post") {
    id
    addComment(comment: "Lovely post") {
      id
    }
  }
}
```

From this, nested mutations can also improve performance by reducing round-trip latency, from executing multiple queries to mutate several elements, to executing a single query.

## Why nested mutations is not part of the spec

The GraphQL spec is meant to work for all implementations of GraphQL servers for any language. However, its driving force is JavaScript through `graphql-js`, the reference implementation.

In other words, any feature that cannot be supported by `graphql-js` will not be part of the specification.

Since JavaScript supports [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), parallel resolution of fields was feasible, and parallelism became one of the fundamental principles when first designing `graphql-js`, as manifest in [DataLoader](https://github.com/graphql/dataloader) (the data fetching layer), whose batching functions return JavaScript promises.

The advantages of parallel execution for performance are too many, and nested mutations cannot work with parallelism. It has been decided that it would not be worth trading parallel execution for nested mutations.

## Nested mutations and performance

For plugin Gato GraphQL, fields are always resolved serially, and the order in which they are resolved is deterministic. (This characteristic does not affect the query resolution performance, as the server first transforms the graph in the query into a component model, which is resolved in an optimal linear time).

Which means that the plugin can support nested mutations, providing all of its benefits, and suffering none of its consequences.

## GraphQL spec

This functionality is currently not part of the GraphQL spec, but it has been requested in:

- <a href="https://github.com/graphql/graphql-spec/issues/252" target="_blank">issue #252 - Proposal: Serial fields (nested mutations)</a>.
