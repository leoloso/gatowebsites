---
title: Strategies for versioning fields and directives
description: Gato GraphQL allows fields and directives to receive argument 'versionConstraint', to choose what specific version of the field or directive to use.
# image: /assets/GatoGraphQL-logo-suki.png
order: 610
---

_Please read first guide [Evolving the schema via field versioning](../evolving-the-schema-via-field-versioning/), which explains the "field versioning" feature in Gato GraphQL_.

Gato GraphQL allows fields and directives to receive argument `versionConstraint`, to choose what specific version (i.e. implementation) of the field/directive to use:

```graphql
query GetPosts {
  posts(versionConstraint: "^1.0") {
    id
    title(versionConstraint: ">=2.1")
    excerpt @strUpperCase(versionConstraint: "~1.5.3")
  }
}
```

What should happen when we do not specify the `versionConstraint` argument? For instance, to which version should field `surname` in the query below resolve to?

```graphql
query GetSurname {
  account(id: 1) {
    # Which version should be used? 1.0.0? 2.0.0?
    surname
  }
}
```

We have two concerns here:

1. Deciding which is the default version to use when none is provided
2. Informing the client that there are several versions to choose from

Before tackling these concerns, we need to find out how well GraphQL provides contextual feedback when running a query.

## Providing contextual feedback when running queries

We need to point out a less-than-ideal circumstance with GraphQL right now: it doesn't offer good contextual information when running queries. This is evident concerning deprecations, where deprecation data is shown only [through introspection](http://spec.graphql.org/June2018/#sec-Deprecation) by querying fields `isDeprecated` and `deprecationReason` on the `Field` and `Enum` types:

```graphql
{
  __type(name: "Account") {
    name
    fields {
      name
      isDeprecated
      deprecationReason
    }
  }
}
```

The response will be:

```json
{
  "data": {
    "__type": {
      "name": "Account",
      "fields": [
        {
          "name": "id",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "name",
          "isDeprecated": false,
          "deprecationReason": null
        },
        {
          "name": "surname",
          "isDeprecated": true,
          "deprecationReason": "Use `personSurname`"
        },
        {
          "name": "personSurname",
          "isDeprecated": false,
          "deprecationReason": null
        }
      ]
    }
  }
}
```

However, when running a query involving a deprecated field…

```graphql
query GetSurname {
  account(id: 1) {
    surname
  }
}
```

...the deprecation information will not appear in the response:

```json
{
  "data": {
    "account": {
      "surname": "Owens"
    }
  }
}
```

This means that the developer executing the query must actively execute introspection queries to find out whether the schema was upgraded and any field deprecated. That may happen… once in a long while? Quite possibly never?

It would be a great improvement towards revising outdated queries if the GraphQL API provided deprecation information when executing queries that involve deprecated fields. This information may ideally be given under a new top-level entry `deprecations`, appearing after `errors` and before `data` (following the spec's suggestion for the [response format](http://spec.graphql.org/June2018/#sec-Response-Format)).

Since a `deprecations` top-level entry is not part of the spec, Gato GraphQL's "Proactive Feedback" feature adds support for better feedback in the response to the query by using the wildcard top-level entry `extensions`, which allows extending the protocol as needed:

![Deprecation information on the query response](/assets/guides/downstream/deep/versioning-deprecation.png "Deprecation information on the query response")

## Publicizing versions through warnings

We have just learnt that the GraphQL server can use the `extensions` top-level entry to provide deprecations. We can use this same methodology for adding a `warnings` entry, in which we inform the developer that a field has been versioned. We do not provide this information always; only when the query involves a field which has been versioned, and the `versionConstraint` argument is absent.

## Defining the default version for a field

There are several approaches we can employ, including:

1. Make `versionConstraint` mandatory
2. Use the old version by default until a certain date, on which the new version becomes the default
3. Use the latest version by default and encourage the query developers to explicitly state which version to use

Let's explore each of these strategies and see their responses when running this query:

```graphql
query GetSurname {
  account(id: 1) {
    surname
  }
}
```

### 1. Make `versionConstraint` mandatory

This is the most obvious one: forbid the client from not specifying the version constraint by making the field argument mandatory. Then, whenever not provided, the query will return an error.

Running the query will respond with:

```json
{
  "errors": [
    {
      "message": "Argument 'versionConstraint' in field 'surname' cannot be empty"
    }
  ],
  "data": {
    "account": {
      "surname": null
    }
  }
}
```

### 2. Use the old version by default until a certain date on which the new version becomes the default

Keep using the old version until a certain date, when the new version will become the default. While in this transition period, ask the query developers to explicitly add a version constraint to the old version before that date through the new `extensions.warnings` entry in the query.

Running the query could respond with:

```json
{
  "extensions": {
    "warnings": [
      {
        "message": "Field 'surname' has a new version: '2.0.0'. This version will become the default one on January 1st. We advise you to use this new version already and test that it works fine; if you find any problem, please report the issue in https://github.com/mycompany/myproject/issues. To do the switch, please add the 'versionConstraint' field argument to your query (using Composer's semver constraint rules; see https://getcomposer.org/doc/articles/versions.md#writing-version-constraints): surname(versionConstraint:\"^2.0\"). If you are unable to switch to the new version, please make sure to explicitly point to the current version '1.0.0' before January 1st: surname(versionConstraint:\"^1.0\"). In case of doubt, please contact us at name@company.com.",
    ]
  },
  "data": {
    "account": {
      "surname": "Owens"
    }
  }
}
```

### 3. Use the latest version and encourage the users to explicitly state which version to use

Use the latest version of the field whenever the `versionConstraint` is not set, and encourage the query developers to explicitly define which version must be used, showing the list of all available versions for that field through a new `extensions.warnings` entry:

Running the query could respond with:

```json
{
  "extensions": {
    "warnings": [
      {
        "message": "Field 'surname' has more than 1 version. Please add the 'versionConstraint' field argument to your query to indicate which version to use (using Composer's semver constraint rules; see https://getcomposer.org/doc/articles/versions.md#writing-version-constraints). To use the latest version, use: surname(versionConstraint:\"^2.0\"). Available versions: '2.0.0', '1.0.0'.",
    ]
  },
  "data": {
    "account": {
      "surname": "Owens"
    }
  }
}
```

## Versioning directives

We can use the same strategies to version directives. For instance, when running the query without providing the version constraint:

```graphql
query {
  post(by: { id: 1 }) {
    title @strTitleCase
  }
}
```

It could assume a default version to use and produces a warning message for the developer to revise the query:

![Querying a versioned directive without version constraints](/assets/guides/downstream/deep/versioning-directive-default.png "Querying a versioned directive without version constraints")
