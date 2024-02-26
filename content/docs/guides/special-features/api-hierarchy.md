---
title: API Hierarchy
description: An API may expose several endpoints which are somehow related to each other, and which may execute a similar query. Through the API Hierarchy we can define a structure for endpoints.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 60
---

An API may expose several endpoints which are somehow related to each other, and which may execute a similar query. This is the case, for instance, when creating endpoints that exposes the data in one language or another.

Through the **API Hierarchy** we can define a structure for endpoints, so that we can produce:

- `/graphql/posts/english/`
- `/graphql/posts/french/`

In this case, a parent query `posts` can provide the GraphQL query, and its descendant queries `english` and `french` provide the variables to customize the query.

<a href="/assets/guides/upstream/api-inheritance.png" target="_blank">![API inheritance](/assets/guides/upstream/api-inheritance.png "API inheritance")</a>
