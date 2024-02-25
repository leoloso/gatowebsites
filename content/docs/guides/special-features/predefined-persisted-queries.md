---
title: Predefined Persisted Queries
metaDesc: Gato GraphQL ships with predefined Persisted queries, which tackle several admin tasks that are common to many WordPress sites.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 56
---

[Persisted queries](../persisted-queries) are composed, stored and executed already within the wp-admin, making it easy for admins to execute and automate tasks on their sites. They are similar to WP-CLI commands, however using GraphQL queries instead.

There are admin tasks which are common to many WordPress sites, including:

- Duplicating posts
- Replacing strings in posts
- Replacing and old domain with a new domain in posts
- Inserting a block in posts in bulk
- Removing a block from posts in bulk
- Translating posts
- Importing a post from another WordPress site
- Exporting a post into another WordPress site

Gato GraphQL ships with a number of predefined Persisted Queries, to tackle all these tasks and many more.

<div class="img-width-1024" markdown=1>

![Predefined Persisted Queries](/assets/guides/downstream/predefined-persisted-queries.png "Predefined Persisted Queries")

</div>

The predefined Persisted Queries are published as `private`, so they are not publicly exposed. These can be executed from within the wp-admin, by a logged-in user with the corresponding capability.

(There are also some "webhook" predefined persisted queries, however these have status `draft`, so they are also not exposed publicly.)

Every predefined Persisted Query contains the GraphQL query to execute for that task, documentation on what inputs must be provided, and a notice of which extensions are required (if any):

<div class="img-width-1024" markdown=1>

![Persisted Query in the Editor](/assets/guides/downstream/predefined-persisted-query-editor.png "Persisted Query in the Editor")

</div>

If the Persisted Query requires some specific configuration (such as "nested mutations"), a corresponding Schema Configuration is also created and defined accordingly.

The Persisted Query is executed either:

- Straight from the GraphiQL client, passing the inputs as variables
- By loading the Persisted Query's URL in the browser, passing the inputs as URL params
