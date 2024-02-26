---
title: Namespacing the schema to avoid conflicts
description: Namespacing in GraphQL helps avoid naming collisions on the GraphQL schema, happening when two types, fields or directives have the same name.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 300
---

Developers publishing plugins on the [WordPress directory](https://wordpress.org/plugins/) do not know in advance who will use their plugins, or what configuration/environment the site will have, including what other plugins may be installed. As a consequence, the plugin must be prepared for conflicts, and attempt to prevent them beforehand.

One of the ways for WordPress plugins to avoid conflicts is via PHP namespacing. Namespaces are widely used within the PHP community, following the PHP Standard Recommendation [`PSR-4`](https://www.php-fig.org/psr/psr-4/) to enable [Composer autoloading](https://getcomposer.org/doc/01-basic-usage.md#autoloading). PHP packages must include the vendor's name, as `"vendor-name/package-name"`, and the corresponding namespace is present on the PHP code:

```php
<?php
namespace VendorName\PackageName\ClassName;
```

Namespacing can make sense also within the context of GraphQL, to avoid the following potential conflicts happening on the schema:

- Having two types with the same name
- Having two fields on the same type with the same name
- Having two directives with the same name

Namespacing has been [requested for the GraphQL spec](https://github.com/graphql/graphql-spec/issues/163):

> At the moment all GraphQL types share one global namespace. This is also true for all of the fields in mutation/subscription type. It can be a concern for bigger projects which may contain several loosely-coupled parts in a GraphQL schema.

However, Lee Byron (one of the creators of GraphQL while working at Facebook) believes that adding namespacing to the spec is not warranted. In [this comment](https://github.com/graphql/graphql-spec/issues/163#issuecomment-271367691), he explains how Facebook manages the thousands of types in its GraphQL schema without conflict:

> We avoid naming collisions in two ways:
>
> 1. integration tests.
>
> We don't allow any commit to merge into our repository that would result in a broken GraphQL schema. [...]
>
> 2. Common naming patterns.
>
> We have common patterns for naming things which naturally avoid collision problems. [...]

But the fact that this strategy works for Facebook, does not mean it will work in WordPress: as Facebook controls all inputs to its GraphQL schema, it can then afford to follow a procedure to name the entities, making sure that no conflict arises. But a WordPress site relies heavily on 3rd party plugins, and it does not control how these plugins are produced.

For instance, if a site uses plugins WooCommerce and Easy Digital Downloads, and they both have a type named `Product` for the GraphQL schema, there will be a conflict. The only resource for the site owner is to reach out to one of the companies and ask them to modify their code. This is not prevention, but correction, and it's unreliable.

Namespacing can then give WordPress site owners the peace of mind that their code will always work. If two types have the name `Product`, the site's admin can enable namespacing in the GraphQL schema, and these types will automatically be renamed to `WooCommerce_Product` and `EDD_Product`, avoiding the conflict.

As an added benefit, namespacing makes the GraphQL schema more elegant: if WooCommerce wanted to be sure no conflict will ever arise with its plugin, then it must "namespace" its types on the type name itself: `WCProduct`, `WCDownload` and `WCPayment` (or, to be absolutely confident it will always work, it might call them `WooCommerceProduct`, `WooCommerceDownload` and `WooCommercePayment`). Thanks to namespacing, these types can have the more natural names `Product`, `Download` and `Payment`.
