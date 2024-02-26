---
title: Defining the allow/denylist for meta values
description: We can retrieve meta values for custom posts, users, comments, and taxonomies (tags and categories), by querying fields 'metaValue' and 'metaValues' from the corresponding type.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 425
---

We can retrieve meta values for custom posts, users, comments, and taxonomies (tags and categories), by querying fields `metaValue` (for a single value) and `metaValues` (for an array of values) from the corresponding type:

- `Post.metaValue`
- `Post.metaValues`
- `GenericCustomPost.metaValue`
- `GenericCustomPost.metaValues`
- `User.metaValue`
- `User.metaValues`
- `Comment.metaValue`
- `Comment.metaValues`
- `PostTag.metaValue`
- `PostTag.metaValues`
- `PostCategory.metaValue`
- `PostCategory.metaValues`
- `GenericTag.metaValue`
- `GenericTag.metaValues`
- `GenericCategory.metaValue`
- `GenericCategory.metaValues`

We can also filter results for custom posts, users, comments, and taxonomies (tags and categories) based on meta, via the input field `metaQuery`.

For both querying and filtering, meta values may be public or private. For instance, user meta includes entry `wp_capabilities`, which is private, while `description` is public. And then there is `last_name`, which may be public or private depending on the application.

The Gato GraphQL plugin does not impose which meta keys are public and which are private; this must be explicitly configured. By default, the list of allowed meta keys is empty.

## Meta value response

When querying for a meta key whose access is not allowed in the corresponding Settings page, then the query returns an error.

For instance, executing this query:

```graphql
{
  post(by: { id: 1 }) {
    id
    metaValue(key: "nothingHere")
  }
}
```

Returns:

```json
{
  "errors": [
    {
      "message": "There is no meta with key 'nothingHere'",
      "extensions": {
        "type": "Post",
        "id": 1,
        "field": "metaValue(key:\"nothingHere\")"
      }
    }
  ],
  "data": {
    "post": {
      "id": 1,
      "metaValue": null
    }
  }
}
```

If the meta key does not exist for the queried object, or its value is empty, the response is `null`. Otherwise, the response is the meta value.

## Configuring the allowed meta keys

This is the description for module "Custom Post Meta". For the Users, Comments and Taxonomies modules, the procedure is similar.

We must configure the list of meta keys that can be queried via the meta fields.

Each entry can either be:

- A regex (regular expression), if it's surrounded by `/` or `#`, or
- The full meta key, otherwise

For instance, any of these entries match meta key `"_edit_last"`:

- `_edit_last`
- `/_edit_.*/`
- `#_edit_([a-zA-Z]*)#`

There are 2 places where this configuration can take place, in order of priority:

1. Custom: In the corresponding Schema Configuration
2. General: In the Settings page

In the Schema Configuration applied to the endpoint, select option `"Use custom configuration"` and then input the desired entries:

<a href="/assets/guides/upstream/schema-configuration-custompost-meta-entries.png" target="_blank">![Defining the entries in the Schema Configuration](/assets/guides/upstream/schema-configuration-custompost-meta-entries.png "Defining the entries in the Schema Configuration")</a>

Otherwise, the entries defined in the "Schema Custom Post Meta" tab from the Settings will be used:

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/settings-custompost-meta-entries.png" target="_blank">![Defining the entries in the Settings](/assets/guides/upstream/settings-custompost-meta-entries.png "Defining the entries in the Settings")</a>

</div>

There are 2 behaviors, "Allow access" and "Deny access":

- **Allow access:** only the configured entries can be accessed, and no other can<br/>
- **Deny access:** the configured entries cannot be accessed, all other entries can

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/schema-configuration-custompost-meta-behavior.png" target="_blank">![Defining the access behavior](/assets/guides/upstream/schema-configuration-custompost-meta-behavior.png "Defining the access behavior")</a>

</div>
