---
title: "@strTranslate"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 4300
---

The `@strTranslate` directive translates content to the requested language, using the Google Translate API:

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
        query: 'query TranslateTitle {\n  posts(pagination: { limit: 3 }) {\n    id\n    title\n    translated: title\n      @strTranslate(from: "en", to: "fr")\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>



