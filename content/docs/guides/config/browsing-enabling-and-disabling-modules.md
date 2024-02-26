---
title: Browsing, enabling and disabling modules
description: All functionality in Gato GraphQL is provided through modules, and these can be enabled and disabled.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 100
---

All functionality in Gato GraphQL is provided through modules. Access them by clicking on "Modules" on the plugin's menu:

<a href="/assets/guides/downstream/modules.png" target="_blank">![Modules](/assets/guides/downstream/modules.png "Modules")</a>

Every module can be either enabled or disabled. Their state is visible in the table:

- Enabled modules have a colored background
- Disabled modules have a white background

## Enabling/disabling a module

When hovering the mouse over the name of a disabled module, a link `"Enable"` will be made visible. Clicking on it will enable the module:

<a href="/assets/guides/downstream/enabling-module.gif" target="_blank">![Enabling a module](/assets/guides/downstream/enabling-module.gif "Enabling a module")</a>

Likewise, hovering the mouse over the name of an enabled module, a link `"Disable"` will be made visible. Clicking on it will disable the module.

### In batch

Alternatively, we can select the checkbox for every module, and select `"Enable"` or `"Disable"` from the "Bulk actions" dropdown:

<a href="/assets/guides/downstream/disabling-modules-in-bulk.gif" target="_blank">![Disabling modules in bulk](/assets/guides/downstream/disabling-modules-in-bulk.gif "Disabling modules in bulk")</a>

### Disabling modules in public and private endpoints

Disabling modules allows us to either remove some functionality from the GraphQL server (eg: the single endpoint), or remove some element from the GraphQL schema (eg: a type, a field, or a directive).

"Schema modules" are those modules that add types/fields/directives to the GraphQL schema (to be found under categories "Schema Type" and "Schema Directive" in the Modules page). We can increase the security of the GraphQL API by disabling all the "Schema modules" that are not needed, as data that must not be consumed is never exposed in first place.

For instance, when disabling the "Users" module, the user fields (`QueryRoot.users`, `Post.author`, and others) will be removed from the GraphQL schema.

As such, disabling endpoints (as explained in the previous section) always takes effect in the public endpoints:

- Single endpoint
- Custom endpoints
- Persisted queries

However, we may only want to limit access to the "Schema modules" to visitors (i.e. on public endpoints), but not to the admin of the site on private endpoints, as to not restrict the ability to access the full GraphQL schema for executing internal tasks.

The private endpoints are:

- Endpoint `wp-admin/edit.php?page=graphql_api&action=execute_query` (which powers the admin's GraphiQL and Interactive Schema clients, and can be invoked in the WordPress editor to feed data to blocks)
- Custom private endpoints (also used to feed data to blocks, but allowing to lock its configuration via PHP hooks)
- GraphQL queries executed internally (via class `GraphQLServer` in PHP)

To have the "Schema modules" also be disabled on the private endpoints, we must configure it on "Plugin Configuration > Private Endpoints" tab on the Settings page, by checking item "Disable "Schema modules" in the private endpoints?"

<a href="/assets/guides/downstream/disabling-modules-in-private-endpoints.png" target="_blank">![Disabling modules in bulk](/assets/guides/downstream/disabling-modules-in-private-endpoints.png "Disabling modules in bulk")</a>

## Module dependencies

Every module can have a dependency on another module. In that case, if the depended-upon module is disabled, its dependants also get disabled.

This information is visible on column `"Depends on"` on the modules table:

<a href="/assets/guides/downstream/module-dependencies.png" target="_blank">![Module dependencies](/assets/guides/downstream/module-dependencies.png "Module dependencies")</a>

For instance, if module "Schema Configuration" is disabled, module "Schema Namespacing" will also be disabled.

## Filtering modules

Modules are grouped by categories:

- Plugin Management
- Endpoint
- Schema Configuration
- Access Control
- Versioning
- User Interface
- Performance
- Operational
- Client
- Schema Type 

Clicking on any category, will only display the corresponding modules.

<a href="/assets/guides/downstream/filtering-modules.gif" target="_blank">![Filtering modules](/assets/guides/downstream/filtering-modules.gif "Filtering modules")</a>

## Viewing the module's documentation

We can read the documentation for a module by clicking on link `"View details"` below the module's description:

<a href="/assets/guides/downstream/viewing-module-documentation.gif" target="_blank">![Viewing module documentation](/assets/guides/downstream/viewing-module-documentation.gif "Viewing module documentation")</a>

## Accessing the module's settings

When hovering on the module's name, a link `"Settings"` will become visible (unless the module has no settings).

Clicking on it will open the Settings page, focused on the module's tab:

<a href="/assets/guides/downstream/accessing-module-settings.gif" target="_blank">![Accessing a module's settings](/assets/guides/downstream/accessing-module-settings.gif "Accessing a module's settings")</a>
