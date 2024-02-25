---
title: "Security: Avoid exposing credentials used in the query"
isPRO: true
metaDesc: Unless our GraphQL API is not publicly exposed, we must be careful for the GraphQL query to not expose private data.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 400
---

Unless our GraphQL API is not publicly exposed (such as when building a static site), we must be careful for the GraphQL query to not expose private data:

- In the response of the query
- In the output when an error happens
- In the logs

For instance, the following query that uses field `_env` (provided by module **Environment Fields**):

```graphql
{
  githubAccessToken: _env(name: "GITHUB_ACCESS_TOKEN")
}
```

...will directly print the credentials in the response:

```json
{
  "data": {
    "githubAccessToken": "{some access token}"
  }
}
```

We can use several features in the plugin to make the GraphQL query secure:

- **Field to Input** to inject the environment value into another field via a dynamic variable
- **@remove Directive** to avoid printing the environment variable's value on the output
- **Send HTTP Request Fields** to directly connect to an external service already from within the GraphQL query

For instance, the following query connects to the GitHub REST API using a private access token:

```graphql
{
  githubAccessToken: _env(name: "GITHUB_ACCESS_TOKEN")
    # This directive will remove this entry from the output
    @remove

  # Create the authorization header to send to GitHub
  authorizationHeader: _sprintf(
    string: "Bearer %s",
    # "Field to Input" feature to access value from the field above
    values: [$__githubAccessToken]
  )
    # Do not print in output
    @remove
  
  # Use the field from "Send HTTP Request Fields" to connect to GitHub
  gitHubArtifactData: _sendJSONObjectCollectionHTTPRequest(
    input: {
      url: "https://api.github.com/repos/GatoGraphQL/GatoGraphQL/actions/artifacts",
      options: {
        headers: [
          {
            name: "Accept"
            value: "application/vnd.github+json"
          },
          {
            name: "Authorization"
            # "Field to Input" feature to access value from the field above
            value: $__authorizationHeader
          },
        ]
      }
    }
  )
}
```

In this query, fields `githubAccessToken` and `authorizationHeader` (which contain sensitive data) are both removed from the output, and field `gitHubArtifactData` will already print the results of the API call, without leaking any of its inputs (eg: an error will print the string `"$__authorizationHeader"` instead of the variable's value).
