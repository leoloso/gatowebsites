---
title: Scripting capabilities via meta directives
# isPRO: true
description: Where can applying a directive to modify the behavior of another directive prove useful.
# image: /assets/GatoGraphQL-logo-suki.png
order: 3700
---

Let's say we have a directive `@strTitleCase` which can be applied on the field in the query, transforming its value from `"hello world!"` to `"Hello World!"`, so it makes sense to apply it on fields of type `String` only.

When running this query:

```graphql
{
  post(by: { id: 1 }) {
    title @strTitleCase
  }
}
```

...it will produce:

```json
{
  "data": {
    "post": {
      "title": "Hello World!"
    }
  }
}
```

Now, let's say that the field type is `[String]` (or `[String!]`), as in this case:

```graphql
type Post {
  categoryNames: [String!]
}
```

What should happen when applying directive `@strTitleCase` on field `categoryNames` when running this query?

```graphql
{
  post(by: { id: 1 }) {
    categoryNames @strTitleCase
  }
}
```

Ideally, the response will be a transformation of every `String` value inside the array:

```json
{
  "data": {
    "post": {
      "categoryNames": [
        "Software",
        "Web Development",
        "Mobile App"
      ]
    }
  }
}
```

To make that happen, the directive resolver for `@strTitleCase` will need to check if the input is an array, and proceed accordingly (this PHP code is an example, the actual method in the plugin is different):

```php
function applyDirective(mixed $value, array $schemaDef): mixed
{
  // Convert each item in an array to title case
  if ($schemaDef['isArray']) {
    return array_map(ucwords(...), $value);
  }

  // Convert the String value to title case
  return ucwords($value);
}
```

That's not very difficult. But then, what would happen if the field is an array of array of `String`, i.e. `[[String]]`? Even though a bit more difficult, the directive can deal with it also:

```php
function applyDirective(mixed $value, array $schemaDef): mixed
{
  // Convert each item in an array of arrays to title case
  if ($schemaDef['isArrayOfArrays']) {
    return array_map(
      fn (array $array) => array_map(ucwords(...), $array),
      $value
    );
  }

  // Convert each item in an array to title case
  if ($schemaDef['isArray']) {
    return array_map(ucwords(...), $value);
  }

  // Convert the String value to title case
  return ucwords($value);
}
```

And then, what if it is a `[[[String]]]` or `[[[[String]]]]`? It starts getting difficult to implement.

Worse still, this additional logic boilerplate would need be implemented for any directive that could be applied on arrays. For instance, to implement a directive `@strUpperCase`, this extra logic will be required too:

```php
function applyDirective(mixed $value, array $schemaDef): mixed
{
  // Convert each item in an array of arrays to uppercase
  if ($schemaDef['isArrayOfArrays']) {
    return array_map(
      fn (array $array) => array_map(strtoupper(...), $array),
      $value
    );
  }

  // Convert each item in an array to uppercase
  if ($schemaDef['isArray']) {
    return array_map(strtoupper(...), $value);
  }

  // Convert the String value to uppercase
  return strtoupper($value);
}
```

It doesn't look very pretty, right?

## Solution: modifying the input to a directive via another directive

This is where applying a directive to modify the behavior of another directive can prove useful.

Instead of dealing with every possible exponent of arrays for the field (i.e. `String`, `[String]`, `[[String]]`, `[[[String]]]`, etc), `@strTitleCase` can just deal with the base case `String`:

```php
function applyDirective(mixed $value, array $schemaDef): mixed
{
  // The input will always be `String`
  // Convert the String value to title case
  return ucwords($value);
}
```

And then, another directive `@underEachArrayItem` can modify its behavior, by:

1. Converting the single input of type `[String]` with an array of inputs of type `String`
2. Iterating the items in this array and, for each, invoke and apply the downstream directive (`@strTitleCase`), which will then receive an input of type `String`
3. Converting back the array of `String` values into a single `[String]` value

We can then execute this query:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames @underEachArrayItem @strTitleCase
  }
}
```

This gif shows `@underEachArrayItem` in action:

![Adding @underEachArrayItem to modify another directive](/assets/guides/downstream/deep/foreach-uppercase-directives.gif "Adding @underEachArrayItem to modify another directive")

The beauty of this solution is that it decouples the depth of the array from the implementation of the directive. If the input is of type `[[String]]`, all we need to do is add an additional `@underEachArrayItem`, which will modify the `@underEachArrayItem` that modifies the intended directive:

```graphql
{
  customerAllNames @underEachArrayItem @underEachArrayItem @strTitleCase
}
```

...producing:

```json
{
  "data": {
    "customerAllNames": [
      [
        "John",
        "Edward",
        "Stevenson"
      ],
      [
        "Samantha",
        "Perkins"
      ],
      [
        "Michael",
        "Edward",
        "Higgs"
      ]
    ]
  }
}
```

So, as we can appreciate, a directive modifying a directive can also happen on a pipeline of directives, where one of them affects a downstream directive, and they are themselves modified by an upstream directive.

We call `@underEachArrayItem` a "meta-directive": a directive that modifies the behavior of another directive. In doing so, it's giving the developer "meta-scripting" capabilities, to add some programming logic inside the GraphQL query.

## Formatting the GraphQL query

Since [white spaces do not add semantic value](https://spec.graphql.org/draft/#sec-White-Space), we can format the query and SDL to better convey the nesting:

```graphql
{
  customerAllNames
    @underEachArrayItem
      @underEachArrayItem
        @strTitleCase
}
```

## Defining a pipeline of nested directives

How does `@underEachArrayItem` know that it must modify the behavior of `@strTitleCase`? In the previous example, it was because it was placed right before it. But what should happen when we have yet another directive right after them?

For instance, in this query:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames
      @underEachArrayItem
        @strTitleCase
        @strTranslate(to: "es")
  }
}
```

...`@underEachArrayItem` should also modify the behavior of directive `@strTranslate`, since this directive must also be applied to a `String`, producing this response:

```json
{
  "data": {
    "post": {
      "categoryNames": [
        "Software",
        "Desarrollo web",
        "Aplicación movil"
      ]
    }
  }
}
```

However, a directive placed afterwards could also need be applied to the array, and not to the individual `String` value. For instance, directive `@arrayPad` below adds missing entries in an array with default values, so it should not be affected by `@underEachArrayItem`:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames
      @underEachArrayItem
        @strTitleCase
      @arrayPad(length: 5, value: "undefined")
  }
}
```

...producing this response:

```json
{
  "data": {
    "post": {
      "categoryNames": [
        "Software",
        "Web Development",
        "Mobile App",
        "undefined",
        "undefined"
      ]
    }
  }
}
```

In order to distinguish between the two situations, we introduce argument `affectDirectivesUnderPos` to `@underEachArrayItem`, which defines the relative position of the directives that must be affected, as an array of `Int`.

In the query below, `@underEachArrayItem` knows it needs to be applied on `@strTitleCase` and `@strTranslate`, since they are placed on relative positions `1` and `2` from itself:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames
      @underEachArrayItem(affectDirectivesUnderPos: [1, 2])
        @strTitleCase
        @strTranslate(to: "es")
  }
}
```

In this other query, `@underEachArrayItem` is applied only on `@strTitleCase` (relative position `1`) but not on `@arrayPad`:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames
      @underEachArrayItem(affectDirectivesUnderPos: [1])
        @strTitleCase
      @arrayPad(length: 5, value: "undefined")
  }
}
```

The default value for `affectDirectivesUnderPos` is set to `[1]`, so if not specified, the directive will always be applied to the directive right after it. The query above is then equivalent to this one:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames
      @underEachArrayItem
        @strTitleCase
      @arrayPad(length: 5, value: "undefined")
  }
}
```

We can define any combination of directives being affected by the meta directive, and others not:

```graphql
{
  post(by: { id: 1 }) {
    categoryNames
      @underEachArrayItem(affectDirectivesUnderPos: [1, 2])
        @strTitleCase
        @strTranslate(to: "es")
      @arrayPad(length: 5, value: "undefined")
  }
}
```
