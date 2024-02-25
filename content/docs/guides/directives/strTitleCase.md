---
title: "@strTitleCase"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 4200
---

Directive to manipulate strings, changing them to title case:

<div id="graphiql-1st" class="graphiql-client"></div>

<script type="application/javascript">
window.addEventListener('DOMContentLoaded', () => {
  const graphQLFetcher = graphQLParams =>
    fetch(
      getGraphQLEndpointURL(graphQLParams),
      getGraphQLOptions(graphQLParams, 'include')
    )
      .then(response => response.json())
      .catch(() => response.text());

  ReactDOM.render(
    React.createElement(
      GraphiQL,
      {
        fetcher: graphQLFetcher,
        docExplorerOpen: false,
        response: GRAPHQL_RESPONSE_TEXT,
        query: '{\n  posts(pagination: { limit: 3 }) {\n    id\n    title @strTitleCase\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>

