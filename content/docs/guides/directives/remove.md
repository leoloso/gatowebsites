---
title: "@remove"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 2800
---

The `@remove` directive removes the output of the field:

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
        query: 'query GetFeaturedImages {\n  posts(pagination: { limit: 10 }) {\n    id\n    title\n    hasFeaturedImage\n    featuredImage @remove(condition: IS_NULL) {\n      src\n    }\n    sourceFeaturedImage: featuredImage {\n      src\n    }\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>
