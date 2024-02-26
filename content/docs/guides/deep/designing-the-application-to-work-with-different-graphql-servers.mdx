---
title: Designing the application to work with different GraphQL servers
description: A GraphQL query acts an interface between the client and the server, allowing us to seamlessly swap one GraphQL server with another one.
# image: /assets/GatoGraphQL-logo-suki.png
order: 300
---

"Coding against interfaces, not implementations" is the practice of invoking a functionality not directly, but through a contract which enumerates what inputs are required and what the expected output is, while hiding how the implementation is done. This strategy helps decouple the application from a specific implementation, provider or stack, enabling to swap among them without having to change the application code.

We can we execute this strategy with GraphQL too. GraphQL can act as the middleman between the application and the server, allowing us to execute all needed modifications on the GraphQL queries only, keeping the business logic untouched.

A GraphQL query acts an interface between the client and the server. When executing a query, the GraphQL server will process it and return the required data to the client. Where does the data come from? How was it obtained? The client doesn't know, and doesn't care.

![The GraphQL query acts as an interface between client and server](/assets/guides/downstream/recipes/query-interface.png "The GraphQL query acts as an interface between client and server")

The response to the query will have the same shape as the query. For this GraphQL query:

```graphql
{
  post(by: { id: 1 }) {
    id
    title
  }
}
```

...the response will be:

```json
{
  "data": {
    "post": {
      "id": 1,
      "title": "Hello world!"
    }
  }
}
```

Given the same query with different parameters, the returned data will be different, but the shape will be constant. This means that, as long as the query doesn't change, the application does not need to change its logic regarding how to read and process the data, and similarly it won't matter which GraphQL server is executing the query.

And so we can seamlessly swap one GraphQL server with another one.

## Queries depend on the GraphQL schema

Now, the last paragraph is a bit too hopeful, because the GraphQL may need to change depending on the GraphQL server. To be more precise, the query is based on the GraphQL schema, and if different servers expose different schemas then the query will be different too.

For instance, a GraphQL server that uses the [Cursor Connections Specification](https://relay.dev/graphql/connections.htm) may execute the following query:

```graphql
{
  categories(first: 10000) {
    edges {
      node {
        categoryId
        description
        id
        name
        slug
      }
    }
  }
}
```

And another server which uses WordPress-like pagination (such as Gato GraphQL) will execute the same query like this:

```graphql
{
  postCategories(pagination: { limit: 10000 }) {
    id
    description
    globalID
    name
    slug
  }
}
```

We can appreciate the differences between the two queries:

| Feature | Server #1 | Server #2 |
| -- | -- | -- |
| Post categories field | `categories` | `postCategories` |
| Field arg to limit number of results | `first` | `pagination.limit` |
| An object's field `id` represents | its unique global ID | its unique ID for its type |
| Shape of the query | deeper because of `edges.node` | flatter |

Replacing the query from the first server with the equivalent one from the second server inside the application will alone not work. That's because the logic will still access the data from the response according to the shape and fields from the original query.

One possible solution is to also replace the logic to retrieve the data in the client. For instance, the following logic:

```js
const categories = data?.data.categories.edges.map(({ node = {} }) => node);
```

...can be replaced like this:

```js
const categories = data?.data.postCategories;
```

But that is exactly what we want to avoid. We want to keep the changes to the bare minimum, modifying only the interface (the GraphQL query), and keeping the business logic unmodified.

Fortunately, it is possible to bridge the differences by modifying the GraphQL queries only, following these steps:

1. Keeping the GraphQL queries dettached from the application
2. Adapting the field names via aliases
3. Adapting the shape of the response via a `self` field

Let's see how, via these 3 steps, we can adapt an application to point to a different GraphQL server.

## Keeping the GraphQL queries dettached from the application

Dettaching the GraphQL queries from the application logic involves:

- Storing each GraphQL query (or a bunch of them) on a separate file, and all of them in a specific folder
- Exporting the queries and importing them into the application

For instance, we can place every GraphQL query in a separate file under `src/data`, and export it:

```js
// file `src/data/categories.js`
export const QUERY_ALL_CATEGORIES = gql`
  {
    categories(first: 10000) {
      edges {
        node {
          databaseId
          description
          id
          name
          slug
        }
      }
    }
  }
`;
```

The application can then import and use the GraphQL query:

```js
import { QUERY_ALL_CATEGORIES } from 'data/categories';

export async function getAllCategories() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CATEGORIES,
  });

  const categories = data?.data.categories.edges.map(({ node = {} }) => node);

  return {
    categories,
  };
}
```

Thanks to this set-up, all the modifications must only be carried out on the files under `src/data`.

## Adapting the field names via aliases

A [field alias](https://graphql.org/learn/queries/#aliases) can be used to rename a field in the response from the second GraphQL server to the name of that field in the first server.

This way, fields `postCategories`, `id` and `globalID` can be retrieved using the names expected by the application: `categories`, `categoryId` and `id` respectively:

```graphql
{
  categories: postCategories(pagination: { limit: 10000 }) {
    categoryId: id
    description
    id: globalID
    name
    slug
  }
}
```

Please notice that field `categories` has argument `first`, while its corresponding field `postCategories` uses argument `pagination.limit`. However, because the field arguments are not reflected in the name of the field in the response, we do not need to worry about them.

## Adapting the shape of the response via a `self` field

The final challenge is a bit trickier: we need to modify the shape of the response, appending the extra levels for `edges` and `node` coming from the Cursor Connections spec.

To achieve this, we will introduce a `self` field to all types in the GraphQL schema, which echoes back the same object where it is applied:

```graphql
type QueryRoot {
  self: QueryRoot!
}

type Post {
  self: Post!
}

type User {
  self: User!
}
```

The `self` field allows to append extra levels to the query without leaving the queried object. Running this query:

```graphql
{
  __typename
  self {
    __typename
  }
  
  post(by: { id: 1 }) {
    self {
      id
      __typename
    }
  }
  
  user(by: { id: 1 }) {
    self {
      id
      __typename
    }
  }
}
```

...produces this response:

```json
{
  "data": {
    "__typename": "QueryRoot",
    "self": {
      "__typename": "QueryRoot"
    },
    "post": {
      "self": {
        "id": 1,
        "__typename": "Post"
      }
    },
    "user": {
      "self": {
        "id": 1,
        "__typename": "User"
      }
    }
  }
}
```

Now, we can use `self` to artificially append the `nodes` and `edge` levels:

```graphql
{
  categories: self {
    edges: postCategories(pagination: { limit: 10000 }) {
      node: self {
        categoryId: id
        description
        id: globalID
        name
        slug
      }
    }
  }
}
```

The type of the object in the GraphQL schema for `edges` and for `self` is obviously different. But that doesn't matter to the application, because it doesn't interact with the actual object modeled in the GraphQL server. Instead, it receives the data as a JSON object, and that piece of data for a field coming from either a `PostConnection` or a `Post` object will be the same.

Please notice that the `categories` field is resolved via `self` and `edges` is resolved via `postCategories`, and not the other way around. This is to keep the cardinality of the returned elements match the one defined by the fields using the Cursor Connections spec:

```graphql
type RootQuery {
  categories: RootQueryToCategoryConnection
}

type RootQueryToCategoryConnection {
  edges: [RootQueryToCategoryConnectionEdge]
}

type RootQueryToCategoryConnectionEdge {
  node: Category
}
```

If the adapted GraphQL query were the other way around (i.e. querying `categories: postCategories` and `edges: self`), accessing the data would fail, because `data.categories` would be an array, so `data.categories.edges` would throw an error when executing:

```js
const categories = data?.data.categories.edges.map(({ node = {} }) => node);
```

## Adapting all queries

After applying the same strategy to all the GraphQL queries in `src/data`, the application can easily swap from one GraphQL server to another one.
