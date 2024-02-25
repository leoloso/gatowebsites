---
title: Conditional Field Manipulation
summary: "Apply a directive on a field only if some condition is met."
socialImage: /assets/product-logos/GatoGraphQL-suki-extension.png
order: 500
shopProductTestModeURL: https://shop.gatographql.com/checkout/buy/87898187-fe40-4d23-917b-7a5ba56da027
shopProductURL: https://shop.gatographql.com/checkout/buy/d1b5055d-7c98-465b-a6bd-81afdc5a24f1
productPrices:
- 9.99
- 19.99
- 39.99
bundles:
- automated-content-translation-and-sync-for-wordpress-multisite
- better-wordpress-webhooks
- easy-wordpress-bulk-transform-and-update
- private-graphql-server-for-wordpress
- responsible-wordpress-public-api
- selective-content-import-export-and-sync-for-wordpress
- simplest-wordpress-content-translation
- tailored-wordpress-automator
- versatile-wordpress-request-api
---

Addition of meta directives `@if` and `@unless` to the GraphQL schema, to conditionally execute a nested directive on the field.

<!-- ## Description

📣 _Please read the documentation for module "Composable Directives" to understand what meta directives are, and how to use them._

This extension introduces these meta-directives into the GraphQL schema:

1. `@if`
2. `@unless` -->

## @if

`@if` executes its nested directives only if a condition has value `true`.

In this query, users `"Leo"` and `"Peter"` get their names converted to upper case, since they are in the "special user" array, while `"Martin"` does not:

```graphql
query {
  users {
    name
      @passOnwards(as: "userName")
      @applyField(
        name: "_inArray"
        arguments: {
          value: $userName
          array: ["Leo", "John", "Peter"]
        }
        passOnwardsAs: "isSpecialUser"
      )
      @if(
        condition: $isSpecialUser
      )
        @strUpperCase
  }
}
```

...producing:

```json
{
  "data": {
    "users": [
      {
        "name": "LEO"
      },
      {
        "name": "Martin"
      },
      {
        "name": "PETER"
      }
    ]
  }
}
```

## @unless

Similar to `@if`, but it executes the nested directives when the condition is `false`.

In this query, it is user `"Martin"` who gets the name converted to upper case, while the other ones do not:

```graphql
query {
  users {
    name
      @passOnwards(as: "userName")
      @applyField(
        name: "_inArray"
        arguments: {
          value: $userName
          array: ["Leo", "John", "Peter"]
        }
        passOnwardsAs: "isSpecialUser"
      )
      @unless(
        condition: $isSpecialUser
      )
        @strUpperCase
  }
}
```

...producing:

```json
{
  "data": {
    "users": [
      {
        "name": "Leo"
      },
      {
        "name": "MARTIN"
      },
      {
        "name": "Peter"
      }
    ]
  }
}
```

<!-- ## Bundles including extension

- [“All in One Toolbox for WordPress” Bundle](../../bundles/all-in-one-toolbox-for-wordpress)
- [“Tailored WordPress Automator” Bundle](../../bundles/tailored-wordpress-automator)
- [“Simplest WordPress Content Translation” Bundle](../../bundles/simplest-wordpress-content-translation)
- [“Responsible WordPress Public API” Bundle](../../bundles/responsible-wordpress-public-api) -->

<!-- ## Tutorial lessons referencing extension

- [Bulk translating block content in multiple posts to a different language](../../tutorial/bulk-translating-block-content-in-multiple-posts-to-a-different-language)
- [Transforming data from an external API](../../tutorial/transforming-data-from-an-external-api)
- [Filtering data from an external API](../../tutorial/filtering-data-from-an-external-api)
- [Importing a post from another WordPress site](../../tutorial/importing-a-post-from-another-wordpress-site) -->
