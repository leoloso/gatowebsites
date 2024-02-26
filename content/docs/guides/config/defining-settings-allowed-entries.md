---
title: Defining the Setting's allowed entries
description: Configuring the list of entries that can be queried from the wp_options table in WordPress, via the optionValue fields added to the GraphQL schema.
# image: /assets/GatoGraphQL-logo-suki.png
order: 440
---

With the Schema Settings module, you can retrieve the settings from the site (stored in table `wp_options`), by querying fields `optionValue`, `optionValues` and `optionObjectValue`.

These fields have a different signature:

- `optionValue: AnyBuiltInScalar`
- `optionValues: [AnyBuiltInScalar]`
- `optionObjectValue: JSONObject`

For instance, this query retrieves the site's URL:

```graphql
{
  homeURL: optionValue(name: "home")
}
```

For security reasons, which options can be queried must be explicitly configured.

## Settings response

When executing any "optionValue" field, if access to the option name is not allowed in the Settings, the query returns an error.

For instance, executing this query:

```graphql
{
  optionValue(name: "nonExistentOption")
}
```

Returns:

```json
{
  "errors": [
    {
      "message": "There is no option with name 'nonExistentOption'",
      "extensions": {
        "type": "Root",
        "id": "root",
        "field": "optionValue(name:\"nonExistentOption\")"
      }
    }
  ],
  "data": {
    "option": null
  }
}
```

Otherwise, the response is the value for the settings with the specified name.

## Configuring the allowed options

We must configure the list of option names that can be queried.

Each entry can either be:

- A regex (regular expression), if it's surrounded by `/` or `#`, or
- The full option name, otherwise

For instance, any of these entries match meta key `"siteurl"`:

- `siteurl`
- `/site.*/`
- `#site([a-zA-Z]*)#`

There are 2 places where this configuration can take place, in order of priority:

1. Custom: In the corresponding Schema Configuration
2. General: In the Settings page

In the Schema Configuration applied to the endpoint, select option `"Use custom configuration"` and then input the desired entries:

<a href="/assets/guides/upstream/schema-configuration-settings-entries.png" target="_blank">![Defining the entries for the Schema Configuration](/assets/guides/upstream/schema-configuration-settings-entries.png "Defining the entries for the Schema Configuration")</a>

Otherwise, the entries defined in the "Settings" tab from the Settings will be used:

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/settings-settings-entries.png" target="_blank">![Defining the entries in the Settings](/assets/guides/upstream/settings-settings-entries.png "Defining the entries in the Settings")</a>

</div>

There are 2 behaviors, "Allow access" and "Deny access":

- **Allow access:** only the configured entries can be accessed, and no other can<br/>
- **Deny access:** the configured entries cannot be accessed, all other entries can

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/schema-configuration-settings-behavior.png" target="_blank">![Defining the access behavior](/assets/guides/upstream/schema-configuration-settings-behavior.png "Defining the access behavior")</a>

</div>

## Default options

When the plugin is installed, the following options are pre-defined to be accessible:

- `"siteurl"`
- `"home"`
- `"blogname"`
- `"blogdescription"`
- `"WPLANG"`
- `"posts_per_page"`
- `"date_format"`
- `"time_format"`
- `"blog_charset"`
