---
title: Managing who can edit the schema
# isPRO: true
description: With Schema Editing Access, we can enable to grant non-admin users access to create and manage endpoints.
# image: /assets/GatoGraphQL-logo-suki.png
order: 1900
---

With the [Schema Editing Access](../../../extensions/schema-editing-access/) extension, we can enable to grant non-admin users access to create and manage endpoints.

<!-- Following the same <a href="https://wordpress.org/support/article/roles-and-capabilities/#summary-of-roles" target="_blank">scheme as when editing posts in WordPress</a>, where users with different roles (`subscriber`, `contributor`, `author` and `editor`) have access to different capabilities:

| Role | Capabilities |
| --- | --- |
| Editor | Can publish and manage posts including the posts of other users |
| Author | Can publish and manage their own posts |
| Contributor | Can write and manage their own posts but cannot publish them |
| Subscriber | Can only read posts | -->

Decide what users can edit the schema by selecting the appropriate configuration from the dropdown in the "Plugin Configuration > Schema Editing Access" tab on the Settings page:

- `Users with capability: "manage_graphql_schema"`
- `Users with role: "administrator"`
- `Users with any role: "administrator", "editor"`
- `Users with any role: "administrator", "editor", "author"`

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream-pro/settings-schema-editing-access.png" target="_blank">![Configuring the schema editing access in the Settings](/assets/guides/upstream-pro/settings-schema-editing-access.png "Configuring the schema editing access in the Settings")</a>

</div>
