---
title: Field to Input
# isPRO: true
description: With Field to Input, we can obtain the value of a field, manipulate it, and input it into another field, all within the same query.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 830
templateEngineOverride: md
---

📣 **Note:** This feature is unlocked by the [Field to Input](../../../extensions/field-to-input/) extension.

Obtain the value of a field, manipulate it, and input it into another field, all within the same query.

```graphql
query {
  posts {
    excerpt

    # Referencing previous field with name "excerpt"
    isEmptyExcerpt: _isEmpty(value: $__excerpt)

    # Referencing previous field with alias "isEmptyExcerpt"
    isNotEmptyExcerpt: _not(value: $__isEmptyExcerpt)
  }
}
```
