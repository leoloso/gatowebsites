---
title: "@skip"
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 3000
---

`@skip` is a standard GraphQL directive, used for conditional fetching: the result is excluded when the provided condition is `true`.

It is mostly used with variables, to provide conditions as either `true` or `false`:

<div id="graphiql-1st" class="graphiql-client"></div>

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
        query: 'query GetPosts(\n  $skipContent: Boolean!\n) {\n  posts(pagination: { limit: 5 }) {\n    id\n    title\n    content @skip(if: $skipContent)\n  }\n}',
        variables: '{\n  "skipContent": true\n}',
        defaultVariableEditorOpen: true
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>
