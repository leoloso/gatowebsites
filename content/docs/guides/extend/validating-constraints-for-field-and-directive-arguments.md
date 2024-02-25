---
title: Validating constraints for field and directive arguments
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1150
draft: true
---

Resolvers for fields and directives can now validate constraints on the argument values.

For instance, if field Root.posts has a maximum limit of 100 items, and we execute the following query:

```graphql
{
  posts(
    pagination: {
      limit: 150
    }
  ) {
    id
  }
}
```

... then we get an error:

```graphql
{
  "errors": [
    {
      "message": "The value for input field 'limit' in input object 'PostPaginationInput' cannot be above '100', but '150' was provided",
      "extensions": {
        "type": "QueryRoot",
        "field": "posts(pagination:{limit:150})"
      }
    }
  ],
  "data": {
    "posts": null
  }
}
```
