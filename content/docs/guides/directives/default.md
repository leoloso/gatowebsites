---
title: "@default"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1600
---

The `@default` directive sets the default value for a field, for whenever it is `null` or empty.

With `null` (default condition):

<div id="graphiql-1st" class="graphiql-client"></div>

With empty value:

<div id="graphiql-2nd" class="graphiql-client"></div>

<script type="application/javascript">
window.addEventListener('DOMContentLoaded', () => {
  const graphQLFetcher = graphQLParams =>
    fetch(getGraphQLEndpointURL(graphQLParams), getGraphQLOptions(graphQLParams, 'include'))
      .then(response => response.json())
      .catch(() => response.text());

  ReactDOM.render(
    React.createElement(
      GraphiQL,
      {
        fetcher: graphQLFetcher,
        docExplorerOpen: false,
        response: GRAPHQL_RESPONSE_TEXT,
        query: 'query GetFeaturedImages {\n  posts(pagination: { limit: 10 }) {\n    id\n    title\n    hasFeaturedImage\n    featuredImage @default(value: 1505) {\n      id\n      src\n    }\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );

  ReactDOM.render(
    React.createElement(
      GraphiQL,
      {
        fetcher: graphQLFetcher,
        docExplorerOpen: false,
        response: GRAPHQL_RESPONSE_TEXT,
        query: 'query GetUserWebsites {\n  users(pagination: { limit: 3 }, sort: { order: ASC, by: ID }) {\n    id\n    name\n    websiteURL @default(\n      value: "(No website)",\n      condition: IS_EMPTY\n    )\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-2nd'),
  );
});
</script>
