---
title: Configuring what URLs can be HTTP-requested
# isPRO: true
metaDesc: Configuring the list of URLs that can be queried via the HTTP client fields added to the GraphQL schema.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 3410
---

With the [HTTP Client](../../../extensions/http-client/) extension, the GraphQL schema is provided with global fields to execute HTTP requests against a webserver and fetch their response:

- `_sendJSONObjectItemHTTPRequest`
- `_sendJSONObjectItemHTTPRequests`
- `_sendJSONObjectCollectionHTTPRequest`
- `_sendJSONObjectCollectionHTTPRequests`
- `_sendHTTPRequest`
- `_sendHTTPRequests`
- `_sendGraphQLHTTPRequest`
- `_sendGraphQLHTTPRequests`

We must configure the list of URLs that we can connect to.

<!-- By default, this list is initially empty. (Unless the unsafe default settings to [build static sites](../building-static-sites) are enabled, in which case any URL is allowed by default.) -->

Each entry can either be:

- A regex (regular expression), if it's surrounded by `/` or `#`, or
- The complete URL, otherwise

For instance, any of these entries match URL `"https://gatographql.com/recipes/"`:

- `https://gatographql.com/recipes/`
- `#https://gatographql.com/recipes/?#`
- `#https://gatographql.com/.*#`
- `/https:\\/\\/gatographql.com\\/(\S+)/`

There are 2 places where this configuration can take place, in order of priority:

1. Custom: In the corresponding Schema Configuration
2. General: In the Settings page

In the Schema Configuration applied to the endpoint, select option `"Use custom configuration"` and then input the desired entries:

![Defining the entries for the Schema Configuration](/assets/guides/upstream-pro/http-requests-schema-configuration-entries.png "Defining the entries for the Schema Configuration")

Otherwise, the entries defined in the "Send HTTP Request Fields" tab from the Settings will be used:

<div class="img-width-1024" markdown=1>

![Defining the entries for the Settings](/assets/guides/upstream-pro/http-requests-settings-entries.png "Defining the entries for the Settings")

</div>

There are 2 behaviors, "Allow access" and "Deny access":

- **Allow access:** only the configured entries can be accessed, and no other can
- **Deny access:** the configured entries cannot be accessed, all other entries can

<div class="img-width-1024" markdown=1>

![Defining the access behavior](/assets/guides/upstream-pro/http-requests-settings-behavior.png "Defining the access behavior")

</div>
