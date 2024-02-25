---
title: "@export"
isPRO: true
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1900
---

The `@export` directive enables to share data across multiple queries, when executed all at once via the "multiple query execution" feature.

In this query, a user's name is exported, and used to search for posts containing that string in the following query. Execute the `GetPostsContainingAuthorName` operation to execute all queries together:

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
        query: 'query GetAuthorName($authorID: ID! = 1) {\n  user(by: { id: $authorID }) {\n    name @export(as: \"authorName\")\n  }\n}\n\nquery GetPostsContainingAuthorName @depends(on: "GetAuthorName") {\n  posts(filter: { search: $authorName }) {\n    id\n    title\n  }\n}',
        variables: null,
        defaultVariableEditorOpen: false
      }
    ),
    document.getElementById('graphiql-1st'),
  );
});
</script>

