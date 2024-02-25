---
title: "@include"
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 2300
---

`@include` is a standard GraphQL directive, used for conditional fetching: the result is included only if the provided condition is `true`.

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
        query: 'query GetPosts(\n  $includeExcerpt: Boolean!\n) {\n  posts(pagination: { limit: 5 }) {\n    id\n    title\n    excerpt @include(if: $includeExcerpt)\n  }\n}',
        variables: '{\n  "includeExcerpt": true\n}',
        defaultVariableEditorOpen: true
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>
