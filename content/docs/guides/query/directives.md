---
title: Directives
metaDesc: Examples of directives provided via Gato GraphQL extensions.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 2000
---

Directives are provided via Gato GraphQL extensions. Here are only a few examples.

## Operation directives

Create an operation pipeline via `@depends`, and execute one of its operations conditionally, based on some dynamic value, via `@skip` and `@include`:

```graphql
query CheckIfPostExists($id: ID!) {
  # Initialize the dynamic variable to `false`
  postExists: _echo(value: false)
    @export(as: "postExists")

  post(by: { id: $id }) {
    # Found the Post => Set dynamic variable to `true`
    postExists: _echo(value: true)
      @export(as: "postExists")
  }
}

mutation ExecuteOnlyIfPostExists
  @depends(on: "CheckIfPostExists")
  @include(if: $postExists)
{
  # Do something...
}
```

## Field directives

Transform a field to lower case via `@strLowerCase`:

```graphql
{
  posts(pagination: { limit: 3 }) {
    id
    title @strLowerCase
  }
}
```

Provide a default value for the field via `@default`:

```graphql
query GetFeaturedImages {
  posts(pagination: { limit: 10 }) {
    id
    title
    hasFeaturedImage
    featuredImage @default(value: 1505) {
      id
      src
    }
  }
}
```

Remove the field output from the response via `@remove`:

```graphql
query GetFeaturedImages {
  posts(pagination: { limit: 10 }) {
    id
    title
    hasFeaturedImage
    featuredImage @remove(condition: IS_NULL) {
      src
    }
    sourceFeaturedImage: featuredImage {
      src
    }
  }
}
```

Apply a function field on some field value, via `@passOnwards` and `@applyFunction`:

```graphql
{
  posts {
    id
    hasComments
    notHasComments: hasComments
      @passOnwards(as: "postHasComments")
      @applyFunction(
        name: "_not"
        arguments: {
          value: $postHasComments
        },
        setResultInResponse: true
      )
  }
}
```
