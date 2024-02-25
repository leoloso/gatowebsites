---
title: Caching the GraphQL schema (when doing introspection)
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 31800
hidden: true
---

When module "Schema Introspection Cache" is enabled, the generated schema for each custom endpoint and persisted query will be cached to disk. This allows the server to reuse an already-generated schema from a previous request, thus speeding up its execution.

## When caching doesn't work

Caching the schema can not work when the API is private, because the schema metadata can change depending on the user accessing it (eg: some users can be denied access to some field).

If the API is public, though, the schema metadata is unique, and available to everyone, hence it can be safely cached.

As a consequence, if module "Public/Private Schema" is enabled, module "Schema Introspection Cache" will be automatically disabled.
