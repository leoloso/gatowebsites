---
title: Deprecating fields
# isPRO: true
description: Versioning a GraphQL schema involves deprecating fields, i.e. telling the user that the field should not be used anymore, and what other field to replace it with.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 600
---

Versioning a GraphQL schema involves deprecating fields, i.e. telling the user that the field should not be used anymore, and what other field to replace it with.

In addition to deprecating fields through code, Gato GraphQL provides a user interface to configure what fields to deprecate, and how.

The configuration is created through a field deprecation list, and delivered to custom endpoints and persisted queries via the schema configuration.

## Accessing all field deprecation lists

Clicking on "Field Deprecation Lists" on the plugin's menu, it displays the list of all the created field deprecation lists:

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream-pro/field-deprecation-lists.png" target="_blank">![Field Deprecation Lists in the admin](/assets/guides/upstream-pro/field-deprecation-lists.png "Field Deprecation Lists in the admin")</a>

</div>

## Creating a new field deprecation list

Click on button "Add New Field Deprecation List" to open the WordPress editor:

<a href="/assets/guides/upstream-pro/field-deprecation-list.png" target="_blank">![Creating an Field Deprecation List](/assets/guides/upstream-pro/field-deprecation-list.png "Creating an Field Deprecation List")</a>

Give the field deprecation list a title, add entries with fields, and configure the deprecation message. When ready, click on the `Publish` button. Then, the new field deprecation list becomes available to the schema configuration.

The field will be marked as deprecated in the schema and, in addition, the deprecation message will be displayed in the response when querying a deprecated field (if module **Deprecation Notifier** is enabled).

### Field Deprecation entries

Every Field Deprecation List contains one or many entries, each of them with the following elements:

- The fields to deprecate
- The deprecation message

<a href="/assets/guides/upstream-pro/field-deprecation-entry.png" target="_blank">![Access control entry](/assets/guides/upstream-pro/field-deprecation-entry.png "Access control entry")</a>

#### Selecting fields from interfaces

In addition to fields from types, we can also select fields from interfaces. In this case, the deprecation is executed on these fields from all types implementing the interface.

<div class="img-width-430" markdown=1>

<a href="/assets/guides/upstream/selecting-field-from-interface.png" target="_blank">![Selecting a field from an interface](/assets/guides/upstream/selecting-field-from-interface.png "Selecting a field from an interface")</a>

</div>

### Describing the field deprecation list

Use the "Excerpt" field, from the Document settings panel, to give a description to the field deprecation list.

Find more information in guide [Adding a description to the API](../../config/adding-a-description-to-the-api/).

## Using the field deprecation list

After creating the field deprecation list, we can have the Custom Endpoint or Persisted Query use it by [editing the corresponding Schema Configuration](../../use/creating-a-schema-configuration/), and selecting the ACL from the list under block "Field Deprecation Lists".

<a href="/assets/guides/upstream-pro/schema-config-field-deprecation-lists.png" target="_blank">![Selecting a Field Deprecation List in the Schema Configuration](/assets/guides/upstream-pro/schema-config-field-deprecation-lists.png "Selecting a Field Deprecation List in the Schema Configuration")</a>

If not customizing the configuration, the default Field Deprecation Lists defined on the Settings page, under tab "Field Deprecation", will be used:

<a href="/assets/guides/upstream-pro/settings-field-deprecation-lists.png" target="_blank">![Selecting the default Field Deprecation Lists in the Settings page](/assets/guides/upstream-pro/settings-field-deprecation-lists.png "Selecting the default Field Deprecation Lists in the Settings page")</a>
