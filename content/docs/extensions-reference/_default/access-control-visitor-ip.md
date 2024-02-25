---
title: "Access Control: Visitor IP"
metaDesc: "Grant access to the schema based on the visitor's IP address (Access Control extension is required)."
socialImage: /assets/product-logos/GatoGraphQL-suki-extension.png
order: 200
shopProductTestModeURL: https://shop.gatographql.com/checkout/buy/a62a717d-d0b7-4b9d-ad1b-c3ca0bdaca45
shopProductURL: https://shop.gatographql.com/checkout/buy/98eec2b5-a2a5-41a6-b962-6360ffe929b5
productPrices:
- 14.99
- 29.99
- 59.99
bundles:
- better-wordpress-webhooks
- responsible-wordpress-public-api
---

Grant access to the schema based on the visitor's IP address (Access Control extension is required).

## Description

In the Access Control editor, a new rule "Visitor IP" is made available:

![Access Control: Visitor IP rule](/assets/extensions/upstream-pro/acl-rule-visitor-ip.png "Access Control: Visitor IP rule")

We configure the rule with the list of IP addresses that can either access, or are denied access to, the schema elements.

Each entry can either be:

- A regex (regular expression), if it's surrounded by `/` or `#`, or
- The full IP address, otherwise

For instance, any of these entries match IP address `"203.23.88.100"`:

- `203.23.88.100`
- `#^203\.23\.[0-9]{1,3}\.[0-9]{1,3}$#`

And under Behavior, select if to "Allow access" or "Deny access" to the schema for those entries.

![Adding entries in the Visitor IP block](/assets/extensions/upstream-pro/acl-rule-visitor-ip-block.png "Adding entries in the Visitor IP block")

When access is denied, the response will contain an error message like this one (in the public mode):

```json
{
  "errors": [
    {
      "message": "The client IP address must satisfy constraint '#^255\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$#' to access field 'karma' for type 'Comment' (your IP address is '172.19.0.2')",
      "locations": [
        {
          "line": 15,
          "column": 5
        }
      ]
    }
  ]
}
```

<!-- ## Bundles including extension

- [“All in One Toolbox for WordPress” Bundle](../../bundles/all-in-one-toolbox-for-wordpress)
- [“Responsible WordPress Public API” Bundle](../../bundles/responsible-wordpress-public-api) -->
