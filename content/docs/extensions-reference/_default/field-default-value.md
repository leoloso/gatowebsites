---
title: Field Default Value
summary: "Set a field to some default value (whenever it is null or empty)."
socialImage: /assets/product-logos/GatoGraphQL-suki-extension.png
order: 900
shopProductTestModeURL: https://shop.gatographql.com/checkout/buy/107a5b42-6f5b-4c0f-8d1d-2c203318c4d4
shopProductURL: https://shop.gatographql.com/checkout/buy/c21e9bec-91db-4b69-b5d3-4497cff0fdd0
productPrices:
- 4.99
- 9.99
- 19.99
bundles:
- better-wordpress-webhooks
- easy-wordpress-bulk-transform-and-update
- private-graphql-server-for-wordpress
- responsible-wordpress-public-api
- selective-content-import-export-and-sync-for-wordpress
- tailored-wordpress-automator
- versatile-wordpress-request-api
---

`@default` directive, to set a value to null or empty fields.

## Description

Directive `@default` accepts two arguments:

1. `value`: the default value, from any scalar type (string, boolean, integer, float or ID).
2. `condition`: if the field must be null or empty, via enum values `IS_NULL` or `IS_EMPTY`. By default it is null.

In the example below, when a post does not have a featured image, field `featuredImage` returns `null`:

```graphql
{
  post(by: { id: 1 }) {
    featuredImage {
      id
      src
    }
  }
}
```

```json
{
  "data": {
    "post": {
      "featuredImage": null
    }
  }
}
```

By using `@default`, we can then retrieve some default image:

```graphql
{
  post(by: { id: 1 }) {
    featuredImage @default(value: 55) {
      id
      src
    }
  }
}
```

```json
{
  "data": {
    "post": {
      "featuredImage": {
        "id": 55,
        "src": "http://mysite.com/wp-content/uploads/my-default-image.png"
      }
    }
  }
}
```

<!-- ## Bundles including extension

- [“All in One Toolbox for WordPress” Bundle](../../bundles/all-in-one-toolbox-for-wordpress)
- [“Tailored WordPress Automator” Bundle](../../bundles/tailored-wordpress-automator)
- [“Responsible WordPress Public API” Bundle](../../bundles/responsible-wordpress-public-api) -->

<!-- ## Tutorial lessons referencing extension

- [Transforming data from an external API](../../tutorial/transforming-data-from-an-external-api) -->
