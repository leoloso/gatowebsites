---
title: Similarities between WordPress hooks and GraphQL directives
description: A GraphQL directive is similar to a WordPress hook, in that it is a function that modifies the value of a field, thus augmenting some other functionality.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 800
---

A WordPress application is highly extensible through plugins and the use of [hooks](https://developer.wordpress.org/plugins/hooks/) (actions and filters) to modify the behavior of some piece of code (whether by WordPress core, the theme or plugins). Hooks are simple pieces of code that can override a value, or execute an action, whenever triggered.

In this example, filter `block_categories` allows to modify the block categories enabled in the WordPress editor:

```php
\add_filter(
  'block_categories',
  function(array $categories): array
  {
    return [
      ...$categories,
      [
        'slug' => 'graphql-api-access-control',
        'title' => __('Access Control for GraphQL', 'graphql-api'),
      ],
    ];
  }
);
```

Hooks are simple, versatile and powerful; they can be abused, but well implemented, they make the application greatly extensible in ways that the developer did not plan in advance.

## GraphQL directives as hooks

[Directives](https://graphql.org/learn/queries/#directives) can be considered the equivalent to GraphQL as hooks are to WordPress.

Similar to a WordPress hook, a directive is a function that modifies the value of a field, thus augmenting some other functionality. As its counterpart, it is simple, versatile and powerful.

For instance, let's say we retrieve a list of post titles with this query:

```graphql
query {
  posts {
    title
  }
}
```

These results are in English. How can we translate them to French? With a directive `@strTranslate` applied on field `title`, which gets the value of the field as an input, calls the Google Translate API to translate it, and returns this output, as in this query:

```graphql
query {
  posts {
    title @strTranslate(from: "en", to: "fr")
  }
}
```

The use case for extensibility is clear: given a value for field `title`, we can modify it in any desired way through a directive. In this case, its modification is the translation to French through `@strTranslate`, but it could also be converting it to upper/lower case through `@strUpperCase` and `@strLowerCase`, or anything else.
