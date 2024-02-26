---
title: GraphQL clients
description: This is a compilation and overview of some of the most popular clients to interact with GraphQL.
# image: /assets/GatoGraphQL-logo-suki.png
order: 200
---

This is a compilation and overview of some of the most popular clients to interact with GraphQL.

## GraphiQL

[GraphiQL](https://github.com/graphql/graphiql/tree/main/packages/graphiql) is the IDE to execute GraphQL queries par excellence. Initially released together with GraphQL, it made it immediately evident how GraphQL could offer a development experience superior to the one from existing APIs, by combining in a single place a client to execute queries against the GraphQL server, and an explorer to browse the schema documentation.

![GraphiQL](/assets/guides/downstream/resources/graphiql.png "GraphiQL")

Among others, GraphiQL offers the following features:

- Tabs
- Custom headers
- Syntax highlighting
- Intelligent type ahead of fields, arguments, types, and more
- Real-time error highlighting and reporting for queries and variables
- Automatic query and variables completion
- Automatic addition of required fields to queries
- Documentation explorer, search, with markdown support
- Query History using local storage
- Themes

There is a demo available in [graphql.org/swapi-graphql](http://graphql.org/swapi-graphql). Compose a GraphQL query aided by the editor, press on the "Execute Query" button at the center of the two panes, and see the response to the query.

## Voyager

The [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) is the quintessential interactive schema visualizer, showing (as they mention in their docs) the "graph behind GraphQL".

![Voyager](/assets/guides/downstream/resources/voyager.png "Voyager")

It comes with these features:

- Quick navigation on graph.
- Left panel which provides more detailed information about every type.
- "Skip Relay" option that simplifies graph by removing Relay wrapper classes.
- Ability to choose any type to be a root of the graph.

There is a live demo at [ivangoncharov.github.io/graphql-voyager](https://ivangoncharov.github.io/graphql-voyager/).

## DociQL

[DociQL](https://github.com/wayfair/dociql) provides a command to generate beautiful static HTML5 documentation from a GraphQL endpoint. After running the command, the result will be a directory including HTML, CSS and JS files that we must copy to our webserver, to display the documentation for our GraphQL schema.

The generated documentation, by default, displays a single-page layout with 3 columns, with links to all types on the left column, a description on the center, and an example query on the right:

![DociQL](/assets/guides/downstream/resources/dociql-docs.png "DociQL")

It comes with these features:

- Uses the introspection query to fetch a schema of GraphQL and generates documentation on the fly.
- Generates an example request and response with "Try it now" links.
- Allows the user to define use cases and group them by domain.
- Configurable through Handlebars templates and SCSS styles.
- Markdown support within API descriptions.
- Responsive HTML5 and CSS3 layout that works on all devices and screen sizes.
- Partial docs, embeddable within an existing website.

There is a demo for the generated documentation available at [wayfair.github.io/dociql](https://wayfair.github.io/dociql/).

## SpectaQL

[SpectaQL](https://github.com/anvilco/spectaql) builds on top of DociQL to better adapt it for GraphQL. It provides a theme that displays only GraphQL-relevant information, removing content from the Swagger/OpenAPI domain (for instance, it discards the "Response Content-Types: application/json" and "Response Example (200 OK)" messages shown in the query example).

![SpectaQL](/assets/guides/downstream/resources/spectaql-docs.png "SpectaQL")

SpectaQL also allows to input the GraphQL schema source using several options:

- From a live endpoint using the introspection query.
- From a file containing an introspection query result.
- From a file, files or glob leading to the schema definitions in SDL.

There is a demo of the generated documentation at [useanvil.com/docs/api/graphql/reference](https://www.useanvil.com/docs/api/graphql/reference).

## Postman

[Postman](https://www.postman.com/) is an API platform for building and using APIs. While not built specifically for GraphQL, Postman can be used to execute GraphQL queries, and streamline collaboration to create GraphQL APIs.

![Postman](/assets/guides/downstream/resources/postman.png "Postman")

Postman includes tools that help accelerate the API lifecycle, including design, testing, documentation, and mocking of the APIs. And we can organize the APIs through workspaces, to collaborate with teammates spread across the world.

## Altair

[Altair](https://github.com/altair-graphql/altair) is yet another GraphQL Client IDE, similar to Postman but specific to GraphQL.

![Altair](/assets/guides/downstream/resources/altair.png "Altair")

In addition to all the features offered by any GraphQL client IDE, Altair also offers environments, so that we can switch from using APIs for local, staging and production environments, and query collections, to easily share with teammembers.

<!-- ## Playground

Similar to GraphiQL, and first released not long afterwards, the [GraphQL Playground](https://github.com/graphql/graphql-playground) is another graphical interactive IDE to execute GraphQL queries, and explore the documentation of the schema.

![Playground](/assets/guides/downstream/resources/playground.png "Playground")

It used to offer several features absent in GraphiQL:

- Tabs
- Interactive, multi-column schema documentation
- Automatic schema reloading
- Configuration of HTTP headers
- Apollo Tracing support

However, many of these features (most notable tabs) have been added to GraphiQL from v2.0, and as such there the Playground client has been deprecated. -->