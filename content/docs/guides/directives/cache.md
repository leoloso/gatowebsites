---
title: "@cache"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1500
---

The `@cache` directive stores the result from a field in disk for a requested amount of time. When executing the same field within that time span, the cached value is returned.

This directive is useful to avoid the execution of expensive operations, such as when interacting with external APIs.

In this example, a call to Google Translate is cached for 10 seconds. Execute the query twice within this time span, to observe the difference in field resolution time. A log entry will indicate if the field is being retrieved from the cache:

<div id="graphiql-1st" class="graphiql-client"></div>

<script type="application/javascript">
window.addEventListener('DOMContentLoaded', () => {
  const graphQLFetcher = graphQLParams =>
    fetch(
      getGraphQLEndpointURL(graphQLParams, 'actions[]=show-logs'),
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
        query: 'query {\n  posts(pagination: { limit: 3 }) {\n    id\n    title\n      @strTranslate(from:\"en\", to:\"es\")\n      @cache(time: 10)\n      @traceExecutionTime\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>
