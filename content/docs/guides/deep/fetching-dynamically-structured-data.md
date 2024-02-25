---
title: Fetching dynamically-structured data
metaDesc: In WordPress, we can fetch nested levels of data (i.e. entities which contain children items of the same type). How do we deal with this situation in GraphQL?
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 200
---

In WordPress, we can fetch nested levels of data, i.e. entities which contain children items of the same type. For instance, a menu contains items which can have subitems, and those subitems can themselves contain subitems, and so on for several levels. Similarly, a comment can have responses which can, themselves, have responses.

Let's see how to work with menus in GraphQL. Fetching the menu data in GraphQL involves querying the items inside the menu for all the different levels. For instance, in the query below, the menu has 3 levels, and we use fragment `MenuItemProps` to fetch the same fields (`id`, `label` and `url`) for all the menu items at all levels:

```graphql
query GetMenu {
  menu(by: { id: 176 }) {
    id
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
  id
  label
  url
}
```

As it can be appreciated, the number of levels is reflected in the GraphQL query. Because the menu in the application has 3 levels, the GraphQL query has 3 levels of nesting.

However, in WordPress the creation of the menu is not decided in advance, but it is configured by the site's admin via the Menu screen (that is, when not using a "block theme"), and stored in the DB:

![Creating menus in WordPress](/assets/guides/downstream/recipes/wp-menus-page.png "Creating menus in WordPress")

This presents a problem: when adding an extra level to the menu via the user interface, we must also add an extra level to the GraphQL query, or otherwise the new level will not be displayed on the site.

There are 2 ways to deal with this issue. The simpler one is to create the GraphQL query fetching more levels than those needed initially, so there is room to keep adding levels later on. For instance, if the application needs 3 levels, the GraphQL query could nevertheless fetch data for 6 (or 10 or 20) levels, giving us enough space to expand the menu until we hit the limit:

```graphql
query GetMenu {
  menu(by: { id: 176 }) {
    id
    items {
      ...MenuItemProps
      children {
        ...MenuItemProps
        children {
          ...MenuItemProps
          children {
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
    }
  }
}

fragment MenuItemProps on MenuItem {
  id
  label
  url
}
```

The second solution is to use field `Menu.itemDataEntries` which will produce a structured `JSONObject` with the whole of the menu data, including all levels and sublevels:

```graphql
query GetMenu {
  menu(by: { id: 176 }) {
    id
    itemDataEntries
  }
}
```

The response to this query looks like this:

```json
{
  "data": {
    "menu": {
      "id": 176,
      "itemDataEntries": [
        {
          "id": 735,
          "objectID": "6",
          "parentID": null,
          "label": "About The Tests",
          "url": "https://mywpsite.com/about/",
          "children": [
            {
              "id": 1451,
              "objectID": "1133",
              "parentID": "735",
              "label": "Page Image Alignment",
              "url": "https://mywpsite.com/about/page-image-alignment/",
              "children": []
            },
            {
              "id": 1452,
              "objectID": "1134",
              "parentID": "735",
              "label": "Page Markup And Formatting",
              "url": "https://mywpsite.com/about/page-markup-and-formatting/",
              "children": []
            }
          ]
        },
        {
          "id": 739,
          "objectID": "174",
          "parentID": null,
          "label": "Level 1",
          "url": "https://mywpsite.com/level-1/",
          "children": [
            {
              "id": 740,
              "objectID": "173",
              "parentID": "739",
              "label": "Level 2",
              "url": "https://mywpsite.com/level-1/level-2/",
              "children": [
                {
                  "id": 741,
                  "objectID": "172",
                  "parentID": "740",
                  "label": "Level 3",
                  "url": "https://mywpsite.com/level-1/level-2/level-3/",
                  "children": []
                },
                {
                  "id": 1453,
                  "objectID": "747",
                  "parentID": "740",
                  "label": "Level 3a",
                  "url": "https://mywpsite.com/level-1/level-2/level-3a/",
                  "children": []
                },
                {
                  "id": 1454,
                  "objectID": "748",
                  "parentID": "740",
                  "label": "Level 3b",
                  "url": "https://mywpsite.com/level-1/level-2/level-3b/",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 742,
          "objectID": "146",
          "parentID": null,
          "label": "Lorem Ipsum",
          "url": "https://mywpsite.com/lorem-ipsum/",
          "children": []
        }
      ]
    }
  }
}
```

This method has the advantage that the data retrieved is completely driven by the user interface, reflecting what is stored in the DB as is, so the application would never need be updated when adding extra levels to the menu, whether 2 or 20 of them.

However, this method has the clear disadvantage that we lose the strong typing from GraphQL: instead of receiving a menu item with strongly typed fields `url` as a `URL`, `label` as a `String`, `objectID` as an `ID`, and so on, we get a plain object that will not be understood by the GraphQL tools and clients, such as Apollo client or Relay. Hence, we won't really make the most out of GraphQL's benefits.

## Fetching WordPress settings data

Another issue is when we need to fetch entities which are driven by the user interface and stored in the DB. That's the case with settings in WordPress, where the names of the options are dynamically created by themes and plugins, so these are not known in advance to the GraphQL server, and meta values, which can also be defined by themes and plugins, and so they are not by default mapped to the GraphQL schema.

For this reason, the schema produced by Gato GraphQL does not hardcode the option names and their types, but these are accessed via an `optionValue` field (and also `optionValues` and `optionObjectValue`) which receives the name of the option, and returns a value of any possible built-in type (as represented by `AnyBuiltInScalar`):

```graphql
type Root {
  optionValue(name: String!): AnyBuiltInScalar
}
```

Since not all options are meant to be exposed via the API, the site's admin must explicitly add them to the allowlist, either by their full name or a regex, in the plugin settings:

<div class="img-width-1024" markdown=1>

![Adding options to the allowlist in the Settings page](/assets/guides/upstream/settings-settings-entries.png "Adding options to the allowlist in the Settings page")

</div>

Now, the query can fetch the whitelisted options:

```graphql
{
  siteURL: optionValue(name: "home")
  siteName: optionValue(name: "blogname")
  siteDescription: optionValue(name: "blogdescription")
}
```

If there is an extra option that is needed by the application, it can be made immediately available to the API just by adding a corresponding entry to the allowlist in the Settings page.
