---
title: "'Enum String' types"
description: "Gato GraphQL implements a custom 'Enum String' type, which is a String type that can only receive a value from a pre-defined set, similar to an Enum."
# image: /assets/GatoGraphQL-logo-suki.png
order: 300
---

Certain pieces of information can only have a value from a predefined set, which should ideally be modeled using an `Enum` type. However, enum types have the limitation that its values can't include the `"-"` char, and there are ocassions when this can't be avoided.

For instance, it would make sense to have a `CustomPostEnum` enum type, listing all the custom post types that can be queried (i.e. those registered in the site, and which have been allowed to be queried). However, custom post types can include the `"-"` char in their names, as in the `"some-custom-cpt"` example below:

```graphql
{
  customPosts(
    filter: {
      customPostTypes: ["post", "product", "some-custom-cpt"]
    }
  ) {
    # ...
  }
}
```

Because of this limitation, this type cannot be an enum type. Instead, Gato GraphQL implements it as a custom "Enum String" type, which is a `String` type that can only receive a value from a pre-defined set, similar to an `Enum`.

Examples of `EnumString` types implemented in the GraphQL schema include:

- `CustomPostEnumString`
- `TagTaxonomyEnumString`
- `CategoryTaxonomyEnumString`
- `MenuLocationEnumString`

## Introspection: Querying the possible values for the "Enum String" types

We can retrieve the list of accepted values for each `EnumString` type via introspection:

```graphql
query EnumStringTypePossibleValues {
  __schema {
    types {
      name
      extensions {
        # This will print the enum-like "possible values" for EnumString type resolvers, or `null` otherwise
        possibleValues
      }
    }
  }
}
```
