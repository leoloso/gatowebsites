---
title: Events Manager
description: "Integration with the Events Manager plugin, to fetch event data."
# image: /assets/product-logos/GatoGraphQL-suki-extension.png
order: 800
shopProductTestModeURL: https://shop.gatographql.com/checkout/buy/b103557f-48eb-4017-8b9c-4460493e8a20
shopProductURL: https://shop.gatographql.com/checkout/buy/526b6bc1-0c17-479a-a7b6-285ed20eb148
productPrices:
- 24.99
- 49.99
- 99.99
---

Integration with the <a href="https://wordpress.org/plugins/events-manager/" target="_blank">Events Manager</a> plugin, to fetch event data.

```graphql
query {
  events {
    id
    title
    content
    startDate
    endDate
    isAllDay
    location {
      id
      name
      address
      city
      coordinates
    }
  }
}
```

<!-- ## Bundles including extension

- [“All in One Toolbox for WordPress” Bundle](../../bundles/all-in-one-toolbox-for-wordpress) -->
