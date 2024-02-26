---
title: Adding a custom tag taxonomy to the schema
description: Custom Post Types defined by any theme or plugin can have their own tag taxonomy associated to them, and added to the GraphQL schema.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 410
---

We can add tags to posts in WordPress (i.e. using the taxonomy with name `"post_tag"`). This is already mapped in the GraphQL schema via the `PostTag`, associated to a `Post` entry.

Custom Post Types defined by any theme or plugin (such as `"product"`) can likewise have their own tag taxonomy associated to them (such as `"product-tag"`). As these tag taxonomies don't ship their own specific type for the GraphQL schema (that would require an extension via PHP code), these are resolved via the `GenericTag` type.

We use fields `tag` and `tags` to fetch tag data, which must indicate which taxonomy they refer to via mandatory field argument `taxonomy`. The result is of the union type `TagUnion`, which includes entries from either `PostTag` or `GenericTag` (depending on the entry's taxonomy).

![`TagUnion` type](/assets/guides/upstream/interactive-schema-tag-union.png "`TagUnion` type")

## Configuring the queryable tag taxonomies

The tag taxonomies that can be queried must be explicitly configured. This can be done in 2 places.

In the Schema Configuration applied to the endpoint, by selecting option `"Use custom configuration"` under "Customize configuration, or use default from Settings?" and then selecting the desired items:

![Selecting the allowed tag taxonomies in the Schema Configuration](/assets/guides/upstream/tags-schema-configuration-queryable-taxonomies.png "Selecting the allowed tag taxonomies in the Schema Configuration")

_This list contains all the "non-hierarchical" taxonomies which are associated to queryable custom posts, i.e. those selected in "Included custom post types" in the Settings for "Custom Posts". Each tag taxonomy's associated custom post types is shown under `(CPT: ...)`. If your desired tag taxonomy does not appear here, make sure that all of its associated custom post types are in that allowlist._

Otherwise, if selecting option `"Use configuration from Settings"`, the value defined under section "Included tag taxonomies" in the Settings page for `Schema Custom Posts` is used:

<div class="img-width-1024" markdown=1>

![Selecting the allowed tag taxonomies in the Settings](/assets/guides/upstream/tags-settings-queryable-taxonomies.png "Selecting the allowed tag taxonomies in the Settings")

</div>

## Additional configuration

Through the Settings for `Schema Tags`, we can also define:

- The default number of elements to retrieve (i.e. when field argument `limit` is not set) when querying for a list of any tag taxonomy
- The maximum number of elements that can be retrieved in a single query execution

<div class="img-width-1024" markdown=1>

![Settings for Tag limits](/assets/guides/upstream/settings-tags-limits.png "Settings for Tag limits")

</div>
