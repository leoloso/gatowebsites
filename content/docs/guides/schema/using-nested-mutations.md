---
title: Using nested mutations
description: Nested mutations enable to perform mutations on a type other than the root type in GraphQL.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 200
---

Nested mutations enable to perform mutations on a type other than the root type in GraphQL.

The query below executes a standard mutation, using the mutation field `updatePost` from the root type:

```graphql
mutation {
  updatePost(input: {
    id: 5,
    title: "New title"
  }) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    post {
      title
    }
  }
}
```

The query from above can also be executed through a nested mutation, where the post object is first queried through field `post`, and then mutation field `update`, which belongs to type `Post`, is applied on the post object:

```graphql
mutation {
  post(by: {id: 5}) {
    update(input: {
      title: "New title"
    }) {
      status
      post {
        title
      }
    }
  }
}
```

Mutations can also be nested, modifying data on the result from another mutation:

```graphql
mutation {
  createPost(input: {
    title: "First title"
  }) {
    status
    postID
    post {
      update(input: {
        title: "Second title",
        contentAs: { html: "Some content" }
      }) {
        status
        post {
          title
          content
          addComment(input: {
            commentAs: { html: "My first comment" }
          }) {
            status
            commentID
            comment {
              content
              date
            }
          }
        }
      }
    }
  }
}
```

### Simplified root type

Nested mutations change the root type, from `QueryRoot` and `MutationRoot`, to a single `Root` type handling both queries and mutations:

<a href="/assets/guides/upstream/schema-docs-nested-mutation.png" target="_blank">![Nested mutations in the schema docs](/assets/guides/upstream/schema-docs-nested-mutation.png "Nested mutations in the schema docs")</a>

### Visualizing mutation fields

Use the [Voyager client](../../intro/intro-to-the-voyager-client/) to visualize which are the mutation fields.

With nested mutations, every type in the schema can contain both query and mutation fields. To differentiate them, the mutation field's description is prepended with label `"[Mutation] "`.

For instance, these are the fields for type `Root`:

<a href="/assets/guides/upstream/mutation-desc-in-graphiql-docs.png" target="_blank">![Description for type Root in the GraphiQL docs](/assets/guides/upstream/mutation-desc-in-graphiql-docs.png "Description for type Root in the GraphiQL docs")</a>

## Using nested mutations in the endpoints

There are 2 levels in which we can define if the schema will use nested mutations or not. In order of priority:

### 1. On the schema configuration

Making a custom endpoint or persisted query use nested mutations, can be defined through the corresponding schema configuration:

<a href="/assets/guides/upstream/schema-configuration-mutation-scheme.png" target="_blank">![Mutation scheme in the schema configuration](/assets/guides/upstream/schema-configuration-mutation-scheme.png "Mutation scheme in the schema configuration")</a>

### 2. Default mode, defined in the Settings

If the schema configuration has value `"Default"`, it will use the mode defined in the Settings:

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/settings-nested-mutations-default.png" target="_blank">![Settings for nested mutations](/assets/guides/upstream/settings-nested-mutations-default.png "Settings for nested mutations")</a>

</div>

## Configuring nested mutations

There are three behaviors we can choose for the schema:

### 1. Do no enable nested mutations

This option disables nested mutations (using the standard behavior instead) for the schema.

### 2. Enable nested mutations, keeping all mutation fields in the root

When nested mutations are enabled, mutation fields may be added two times to the schema:

- once under the `Root` type
- once under the specific type

For instance:

- `Root.updatePost`
- `Post.update`

With this option, the "duplicated" mutation fields from the root type are kept.

### 3. Enable nested mutations, removing the redundant mutation fields from the root

Same option as above, but removing the "duplicated" mutation fields from the root type.

For instance:

- `Root.updatePost` is removed
- `Post.update` is available

## GraphQL spec

This functionality is currently not part of the GraphQL spec, but it has been requested:

- <a href="https://github.com/graphql/graphql-spec/issues/252" target="_blank">Issue #252 - Proposal: Serial fields (nested mutations)</a>
