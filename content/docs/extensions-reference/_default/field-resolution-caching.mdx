---
title: Field Resolution Caching
description: "Cache and retrieve the response for expensive field operations."
# image: /assets/product-logos/GatoGraphQL-suki-extension.png
order: 1200
# shopProductTestModeURL: https://shop.gatographql.com/checkout/buy/7cf373db-5d40-4679-b564-535c8d23cb74
# shopProductURL: https://shop.gatographql.com/checkout/buy/b851cd2a-6fcf-4437-919b-81c86e3100d5
# productPrices:
# - 4.99
# - 9.99
# - 19.99
# bundles:
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

Addition of the `@cache` directive to the GraphQL schema, which stores the result from a field in disk for a requested amount of time. When executing the same field within that time span, the cached value is returned.

Add `@cache` to the field to cache in the GraphQL query, specifying for how much time (in seconds) must the result be cached.

This directive can boost performance when executing expensive operations (such as when interacting with external APIs), as we can cache and reuse their response.

## Example

The `@strTranslate` connects to the Google Translate API. By using `@cache(time: 10)`, the translated value for the `title` field will be cached for 10 seconds, and executing the same query again within this time span will avoid connecting to Google Translate, resulting in a very fast resolution.

<!-- @todo Un-comment here when FeedbackCategories::LOG is enabled and documented, and `@traceExecutionTime` is supported -->
<!-- A log entry will indicate if the field is being retrieved from the cache. -->

```graphql
query {
  posts(pagination:{ limit: 3 }) {
    id
    title
      @strTranslate(from: "en", to: "es")
      @cache(time: 10)
  }
}
```

<!-- @todo Un-comment here when FeedbackCategories::LOG is enabled and documented, and `@traceExecutionTime` is supported -->
<!-- Use `@traceExecutionTime` to log the difference in field resolution time:

```graphql
query {
  posts(pagination:{ limit: 3 }) {
    id
    title
      @strTranslate(from: "en", to: "es")
      @cache(time: 10)
      @traceExecutionTime
  }
}
```
-->

<!-- ## Bundles including extension

- [“All in One Toolbox for WordPress” Bundle](../../bundles/all-in-one-toolbox-for-wordpress)
- [“Tailored WordPress Automator” Bundle](../../bundles/tailored-wordpress-automator) -->

<!-- ## Tutorial lessons referencing extension

- [Retrieving data from an external API](../../tutorial/retrieving-data-from-an-external-api) -->
