---
title: "@passOnwards"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 2700
---

Add directive `@passOnwards` to make the field's resolved value available to subsequent directives via a dynamic variable. It is the equivalent of the [Field to Input](../../schema/using-field-to-input) feature, but allowing to reference the field value within a directive argument.

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
        query: '{\n  posts {\n    id\n    hasComments\n    notHasComments: hasComments\n      @passOnwards(as: "postHasComments")\n      @applyFunction(\n        name: "_not"\n        arguments: {\n          value: $postHasComments\n        },\n        setResultInResponse: true\n      )\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>
