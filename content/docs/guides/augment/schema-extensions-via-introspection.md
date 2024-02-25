---
title: "Schema extensions via introspection"
metaDesc: "Custom metadata attached to schema elements can be queried via field 'extensions' when doing introspection."
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 100
---

Custom metadata attached to schema elements can be queried via field `extensions` when doing introspection.

All introspection elements of the schema implement this field, each of them returning an object of a corresponding "`Extensions`" type, which exposes the custom properties for that element.

The GraphQL schema looks like this:

```graphql
# Using "_" instead of "__" in introspection type name to avoid errors in graphql-js
type _SchemaExtensions {
  # Is the schema being namespaced?
  isNamespaced: Boolean!
}

extend type __Schema {
  extensions: _SchemaExtensions!
}

type _NamedTypeExtensions {
  # The type name
  elementName: String!

  # The "namespaced" type name
  namespacedName: String!

  # Enum-like "possible values" for EnumString type resolvers, `null` otherwise
  possibleValues: [String!]

  # OneOf Input Objects are a special variant of Input Objects where the type system asserts that exactly one of the fields must be set and non-null, all others being omitted.
  isOneOf: Boolean!
}

extend type __Type {
  # Non-null for named types, null for wrapping types (Non-Null and List)
  extensions: _NamedTypeExtensions
}

type _DirectiveExtensions {
  # If no objects are returned in the field (eg: because they failed validation), does the directive still need to be executed?
  needsDataToExecute: Boolean!

  # Names or descriptions of the types the field directives is restricted to, or `null` if it supports any type (i.e. it defines no restrictions)
  fieldDirectiveSupportedTypeNamesOrDescriptions: [String!]
}

extend type __Directive {
  extensions: _DirectiveExtensions!
}

type _FieldExtensions {
  # Useful for nested mutations
  isMutation: Boolean!

  # `true` => Only exposed when "Expose “sensitive” data elements" is enabled
  isSensitiveDataElement: Boolean!
}

extend type __Field {
  extensions: _FieldExtensions!
}

type _InputValueExtensions {
  isSensitiveDataElement: Boolean!
}

extend type __InputValue {
  extensions: _InputValueExtensions!
}

type _EnumValueExtensions {
  isSensitiveDataElement: Boolean!
}

extend type __EnumValue {
  extensions: _EnumValueExtensions!
}
```

## How to use

The following GraphQL introspection query demonstrates properties available in each `extensions` field:

```graphql
query ExtensionsIntrospectionQuery {
  __schema {
    extensions {
      isNamespaced
    }
    types {
      name
      extensions {
        elementName
        namespacedName
        possibleValues
        isOneOf
      }
      fields {
        name
        extensions {
          isMutation
          isSensitiveDataElement
        }
        args {
          name
          extensions {
            isSensitiveDataElement
          }
        }
      }
      inputFields {
        name
        extensions {
          isSensitiveDataElement
        }
      }
      enumValues {
        name
        extensions {
          isSensitiveDataElement
        }
      }
    }
    directives {
      name
      extensions {
        needsDataToExecute
        fieldDirectiveSupportedTypeNamesOrDescriptions
      }
      args {
        name
        extensions {
          isSensitiveDataElement
        }
      }
    }
  }
}
```

## GraphQL spec

This functionality is currently not part of the GraphQL spec, but it has been requested in:

- <a href="https://github.com/graphql/graphql-spec/issues/300" target="_blank">issue #300 - Expose user-defined meta-information via introspection API</a>.
