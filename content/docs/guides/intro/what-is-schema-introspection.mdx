---
title: What is schema introspection
description: "Schema introspection is GraphQL's mechanism to provide information about the schema, which is retrieved using the same GraphQL language."
# image: /assets/GatoGraphQL-logo-suki.png
order: 700
---

Schema introspection is GraphQL's mechanism to provide information about the schema, which is retrieved using the same GraphQL language. It is thanks to introspection that clients such as [GraphiQL](../intro-to-the-graphiql-client) and [GraphQL Voyager](../intro-to-the-voyager-client) can help us interact with the GraphQL schema.

These clients always execute the same introspection query to obtain the full data for the schema:

```graphql
query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    subscriptionType {
      name
    }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
```
