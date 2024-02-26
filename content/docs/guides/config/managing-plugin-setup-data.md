---
title: "Managing the plugin's setup data"
description: Enable/disable installing predefined custom endpoints and persisted queries
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1890
---

A list of predefined persisted queries and custom endpoints, handling common admin tasks, are created by the plugin upon activation and version updates.

Examples include persisted queries to:

- Duplicate posts
- Replace strings in posts
- Replace and old domain with a new domain in posts
- Insert a block in posts
- Remove a block from posts
- Translate posts
- Import a post from another WordPress site
- Export a post into another WordPress site

We can disable the plugin from installing this setup data. For instance, if we only use Gato GraphQL to power headless sites, these persisted queries may not be needed.

## Settings to enable or disable installing the setup data

An option to enable/disable the installation of the setup data is in the Settings page, under "Plugin Configuration > General > Plugin setup: Install Persisted Queries for common admin tasks?":

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/settings-plugin-setup-data.png" target="_blank">![Manage installing setup data in the Settings](/assets/guides/upstream/settings-plugin-setup-data.png "Manage installing setup data in the Settings")</a>

</div>

Alternatively, we can define this constant in `wp-config.php`:

```php
define( 'GATOGRAPHQL_INSTALL_PLUGIN_SETUP_DATA', false );
```
