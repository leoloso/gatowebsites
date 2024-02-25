---
title: Restricting fields to the WordPress admin
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 300
draft: true
hidden: true
---

There are 2 endpoints in the wp-admin:

1. `GATOGRAPHQL_ADMIN_ENDPOINT`
2. `GATOGRAPHQL_ADMIN_FIXEDSCHEMA_ENDPOINT`

Which one to use, must be explicitly set when calling `fetchGraphQLQuery`.

## GATOGRAPHQL_ADMIN_ENDPOINT

This GraphQL schema is modified by user preferences:

- Disabled types/directives are not in the schema
- Nested mutations enabled or not
- Schema namespaced or not
- etc

## GATOGRAPHQL_ADMIN_FIXEDSCHEMA_ENDPOINT

This endpoint must be used by Gutenberg blocks which require some field that must necessarily be enabled (such as `User.roles`, which is enabled with the "Schema Expose Admin Data" module).

This GraphQL schema is not modified by user preferences:

- All types/directives are always in the schema
- The “sensitive” data elements (fields and input fields) are in the schema
- Nested mutations enabled, without removing the redundant fields in the Root
- No namespacing
