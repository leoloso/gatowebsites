---
title: Removing types from the schema
isPRO: true
metaDesc: "Two ways to remove types from the schema, whether for all endpoints, or for specific endpoints."
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 3260
---

There are two ways to remove types from the schema:

1. In all endpoints, by disabling the corresponding "schema type" module
2. In specific endpoints, by disabling access to the corresponding connection fields

## 1. Disabling types for all endpoints

_(This can be done in the standard plugin, no need for extensions.)_

Similar to functionality, GraphQL schema types are provided via modules. When browsing all modules in the Modules page, we can filter the schema type ones by clicking on the "Schema Type" category:

<a href="/assets/guides/downstream/schema-type-modules.png" target="_blank">![Schema type modules](/assets/guides/downstream/schema-type-modules.png "Schema type modules")</a>

To remove a type from the schema, we then disable the corresponding module, as explained in guide [Browsing, enabling and disabling modules](../../config/browsing-enabling-and-disabling-modules/).

This will remove the type in all schemas.

For instance, if we don't need comments on the site, we can remove the `Comment` type by disabling module "Comments".

## 2. Disabling types for some specific endpoint

We can also remove a schema type by [disabling access to all fields which return that type](../removing-fields-and-directives-from-the-schema/). To do this, we must add the access control rule "Disable access" for the field in some access control list (ACL), make it private, and assign the ACL to the corresponding schema configuration.

This will remove the type only for the selected schemas.

For instance, if we don't need comments on the site, we can remove the `Comment` type by disabling access to all fields from the `Commentable` interface (which is implemented by all types having comments, such as `Post`, `Page`, `CustomPost`, etc).
