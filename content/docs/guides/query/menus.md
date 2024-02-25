---
title: Menus
metaDesc: Examples of queries to fetch menu data.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 800
---

These are examples of queries to fetch menu data.

## Fetching menus

Fetch a specific menu, and the raw data of its entries:

```graphql
{
  menu(by: { id: 176 }) {
    itemDataEntries
  }
}
```

Fetch all menus, nesting queries to select the properties from the items:

```graphql
{
  menus {
    id
    name
    slug
    count
    locations
    items {
      ...MenuItemProps
      children {
        ...MenuItemProps
        children {
          ...MenuItemProps
        }
      }
    }
  }
}
fragment MenuItemProps on MenuItem {
  classes
  description
  id
  objectID
  parentID
  target
  title
  url
}
```

Filtering and paginating menus:

```graphql
{
  menus(pagination: { limit: 1, offset: 1}, filter: { search: "all" }) {
    id
    name
    slug
  }
  menuCount(filter: { search: "all" })
}
```
