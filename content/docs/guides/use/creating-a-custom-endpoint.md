---
title: Creating a custom endpoint
metaDesc: Gato GraphQL supports custom endpoints, to retrieve and post data for a custom schema (containing only a subset of the available types) and user validation rules, as to deal with the needs from different users and applications.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 100
---

In addition to the single endpoint, Gato GraphQL also supports custom endpoints, to retrieve and post data for a custom schema (containing only a subset of the available types) and user validation rules, as to deal with the needs from different users and applications.

We can create as many custom endpoints as needed.

For instance, we can create a custom endpoint for:

- Some specific client or user, under `/graphql/my-client/`
- A group of users with more access to features (such as PRO users), under `/graphql/pro-users/`
- Provide data to our mobile app, under `/graphql/mobile-app/`
- Give access to some 3rd-party API, under `/graphql/external-api/`
- Others

<a href="/assets/guides/upstream/custom-endpoint.png" target="_blank">![Custom Endpoint editor](/assets/guides/upstream/custom-endpoint.png "Custom Endpoint editor")</a>

## Executing the custom endpoint in an application

Please follow the instructions on guide [Connecting to the GraphQL server from a client](../../intro/connecting-to-the-graphql-server-from-a-client/).

## Accessing all custom endpoints

<!-- **Note:** A custom endpoint is implemented as a Custom Post Type (with name `"graphql-endpoint"`). So it is operated the same way as with posts in the WordPress admin. -->

Clicking on "Custom Endpoints" on the plugin's menu, it displays the list of all the created custom endpoints:

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/custom-endpoints-page.png" target="_blank">![Custom Endpoints in the admin](/assets/guides/upstream/custom-endpoints-page.png "Custom Endpoints in the admin")</a>

</div>

## Creating a new custom endpoint

Click on button "Add New GraphQL endpoint" to open the WordPress editor:

<a href="/assets/guides/upstream/new-custom-endpoint.png" target="_blank">![Creating a new Custom Endpoint](/assets/guides/upstream/new-custom-endpoint.png "Creating a new Custom Endpoint")</a>

Give it a title, make sure the permalink is the desired one, select the schema configuration, and adjust the options. When ready, click on the `Publish` button, and the custom endpoint is created, using the configured permalink as endpoint URL.

Links to the endpoint (and source and clients) are shown on the "Custom Endpoint Overview" sidebar panel:

<a href="/assets/guides/upstream/custom-endpoint-overview.png" target="_blank">![Custom Endpoint Overview](/assets/guides/upstream/custom-endpoint-overview.png "Custom Endpoint Overview")</a>

### Schema configuration

Defining what elements the schema contains, and what access will users have to it, is defined in the schema configuration.

So we must create a [create a schema configuration](../creating-a-schema-configuration/), and then select it from the dropdown (or use none, or the default one):

<a href="/assets/guides/upstream/select-schema-configuration.png" target="_blank">![Selecting the schema configuration](/assets/guides/upstream/select-schema-configuration.png "Selecting the schema configuration")</a>

### Private endpoints

By setting the status of the Custom Endpoint as `private`, the endpoint can only be accessed by the admin user. This prevents our data from being unintentionally shared with users who should not have access to the data.

For instance, we can create private Custom Endpoints that help manage the application, such as retrieving data to create reports with our metrics.

![Private Custom Endpoint](/assets/guides/upstream/private-custom-endpoint.png "Private Custom Endpoint")

### Password-protected endpoints

If we create a Custom Endpoint for a specific client, we can now assign a password to it, to provide an additional level of security that only that client will access the endpoint.

![Password-protected Custom Endpoint](/assets/guides/upstream/password-protected-custom-endpoint.png "Password-protected Custom Endpoint")

When first accessing a password-protected endpoint (whether accessing the endpoint directly, or its GraphiQL or Interactive Schema clients), we encounter a screen requesting the password:

![Password-protected Custom Endpoint: First access](/assets/guides/upstream/password-protected-custom-endpoint-unauthorized.png "Password-protected Custom Endpoint: First access")

Once the password is provided and validated, only then the user will access the intended endpoint or client:

![Password-protected Custom Endpoint: After authorization](/assets/guides/upstream/password-protected-custom-endpoint-authorized.png "Password-protected Custom Endpoint: After authorization")

### Creating an endpoint hierarchy

Please read the instructions on [creating an API hierarchy](../creating-an-api-hierarchy/).

### Disabling the custom endpoint

In the options, set "Enabled" to `false` to disable the custom endpoint.

This feature can be useful when making the custom endpoint be part of an API hierarchy, to provide a common behavior to its child custom endpoints, but without needing itself be executed.

### Describing the custom endpoint

Use the "Excerpt" field, from the Document settings panel, to give a description to the custom endpoint.

Find more information in guide [Adding a description to the API](../../config/adding-a-description-to-the-api/).

## Endpoint clients

Each custom endpoint has its own set of clients to interact with.

### GraphiQL client

Add `?view=graphiql` to the endpoint to access its GraphiQL client:

<!-- The module `GraphiQL for Custom Endpoints` must be enabled. -->

<a href="/assets/guides/upstream/custom-endpoint-graphiql.png" target="_blank">![Custom endpoint's GraphiQL client](/assets/guides/upstream/custom-endpoint-graphiql.png "Custom endpoint's GraphiQL client")</a>

The GraphiQL client can also be opened when editing the Custom Endpoint, under sidebar panel "Custom Endpoint Overview":

![Custom endpoint's link to the GraphiQL client in the editor](/assets/guides/upstream/custom-endpoint-overview-graphiql.png "Custom endpoint's link to the GraphiQL client in the editor")

Likewise, the client can be opened from the Custom Endpoints list page, on link "GraphiQL" when hovering on the entry:

<div class="img-width-1024" markdown=1>

![Custom endpoint's link to the GraphiQL client in the list](/assets/guides/upstream/custom-endpoints-actions-graphiql.png "Custom endpoint's link to the GraphiQL client in the list")

</div>

To disable the GraphiQL client, set option "Expose GraphiQL client?" to `false` in the Custom Endpoint editor.

### Interactive Schema (Voyager) client

Add `?view=schema` to the endpoint to access its Interactive Schema client, to visualize and interact with the endpoint's schema:

<!-- The module `Interactive Schema for Custom Endpoints` must be enabled. -->

<a href="/assets/guides/upstream/custom-endpoint-interactive-schema.png" target="_blank">![Custom endpoint's Voyager client](/assets/guides/upstream/custom-endpoint-interactive-schema.png "Custom endpoint's Voyager client")</a>

The Interactive Schema client can also be opened when editing the Custom Endpoint, under sidebar panel "Custom Endpoint Overview":

![Custom endpoint's link to the Interactive Schema client in the editor](/assets/guides/upstream/custom-endpoint-overview-interactive-schema.png "Custom endpoint's link to the Interactive Schema client in the editor")

Likewise, the client can be opened from the Custom Endpoints list page, on link "Interactive Schema" when hovering on the entry:

<div class="img-width-1024" markdown=1>

![Custom endpoint's link to the Interactive Schema client in the list](/assets/guides/upstream/custom-endpoints-actions-interactive-schema.png "Custom endpoint's link to the Interactive Schema client in the list")

</div>

To disable the Interactive Schema client, set option "Expose the Interactive Schema client?" to `false` in the Custom Endpoint editor.

## Testing the endpoint before publishing online

A custom endpoint with status `draft` or `pending` is available to the schema editor users only.  This gives them the ability to:

- Execute GraphQL queries against it
- Access the endpoint's GraphiQL and Voyager clients

Then, we can create a custom endpoint, assign a Schema Configuration, publish it as `draft` or `pending`, and test it (eg: checking that its Access Control rules are appropriate).

Once approved, only then we set its status as `publish`, making the custom endpoint available to everyone.

## Viewing the source

Appending `?view=source` to the endpoint, it will show the endpoint's configuration (as long as the user is logged-in and the user role has access to it):

<a href="/assets/guides/upstream/custom-endpoint-source.png" target="_blank">![Custom endpoint source](/assets/guides/upstream/custom-endpoint-source.png "Custom endpoint source")</a>

---

## Configuration in the WordPress editor

These are the inputs in the body of the editor:

| Input | Description |
| --- | --- |
| **Title** | Custom endpoint's title |
| **Schema configuration** | From the dropdown, select the schema configuration that applies to the custom endpoint, or one of these options:<ul><li>`"Default"`: the schema configuration is the one selected on the plugin's Settings</li><li>`"None"`: the custom endpoint will be unconstrained</li><li>`"Inherit from parent"`: Use the same schema configuration as the parent custom endpoint.<br/>This option is available when module `"API Hierarchy"` is enabled, and the custom endpoint has a parent query (selected on the Document settings)</li></ul> |
| **Options** | Customize the behavior of the custom endpoint: <ul><li>**Enabled?:** If the custom endpoint is enabled.<br/>It's useful to disable a custom endpoint it's a parent query in an API hierarchy</li><li>**Expose GraphiQL client?:** Enable/disable attaching a GraphiQL client to the endpoint, accessible under `?view=graphiql`</li><li>**Expose the Interactive Schema client?:** Enable/disable attaching an Interactive schema client to the endpoint, accessible under `?view=schema`</li><li>**Inherit query from ancestor(s)?:** Use the same query as the parent custom endpoint.<br/>This option is available when module `"API Hierarchy"` is enabled, and the custom endpoint has a parent query (selected on the Document settings)</li></ul> |

These are the inputs in the Document settings:

| Input | Description |
| --- | --- |
| **Permalink** | The endpoint under which the custom endpoint will be available |
| **Categories** | Can categorize the custom endpoint.<br/>Eg: `mobile`, `app`, etc |
| **Excerpt** | Provide a description for the custom endpoint.<br/>This input is available when module `"Excerpt as Description"` is enabled |
| **Page attributes** | Select a parent custom endpoint.<br/>This input is available when module `"API Hierarchy"` is enabled |
