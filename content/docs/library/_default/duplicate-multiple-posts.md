---
title: Duplicate multiple posts
description: Create duplicates for all the indicated posts
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedTutorialLessonSlugs:
- 'duplicating-multiple-blog-posts-at-once'
referencedExtensionSlugs:
- 'field-on-field'
- 'field-response-removal'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'multiple-query-execution'
- 'php-functions-via-schema'
predefinedPersistedQueryTitleInPlugin: Duplicate posts
---

This query duplicates the posts retrieved via the provided `$limit` and `$offset` variables (sorted by ascending ID).

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled, and [Payload Types for Mutations](https://gatographql.com/guides/config/returning-a-payload-object-or-the-mutated-entity-for-mutations/) with value `"Do not use Payload Types for Mutations (i.e. return the mutated entity)"`._**

```graphql
query InitializeDynamicVariables
  @configureWarningsOnExportingDuplicateVariable(enabled: false)
{
  postInput: _echo(value: [])
    @export(as: "postInput")
    @remove
}

query GetPostsAndExportData($limit: Int! = 5, $offset: Int! = 0)
  @depends(on: "InitializeDynamicVariables")
{
  postsToDuplicate: posts(
    pagination: {
      limit : $limit
      offset: $offset
    }
    sort: {
      by: ID,
      order: ASC
    }
  ) {
    # Fields not to be duplicated
    id
    slug
    date
    status

    # Fields to be duplicated
    author {
      id
    }
    categories {
      id
    }
    rawContent
    excerpt
    featuredImage {
      id
    }
    tags {
      id
    }
    title

    # Already create (and export) the inputs for the mutation
    postInput: _echo(value: {
      status: draft,
      authorBy: {
        id: $__author
      },
      categoriesBy: {
        ids: $__categories
      },
      contentAs: {
        html: $__rawContent
      },
      excerpt: $__excerpt
      featuredImageBy: {
        id: $__featuredImage
      },
      tagsBy: {
        ids: $__tags
      },
      title: $__title
    })
      @export(as: "postInput", type: LIST)
      @remove
  }
}

mutation DuplicatePosts
  @depends(on: "GetPostsAndExportData")
{
  createdPostIDs: _echo(value: $postInput)
    @underEachArrayItem(
      passValueOnwardsAs: "input"
    )
      @applyField(
        name: "createPost"
        arguments: {
          input: $input
        },
        setResultInResponse: true
      )
    @export(as: "createdPostIDs")
}

query DuplicateMultiplePosts
  @depends(on: "DuplicatePosts")
{
  createdPosts: posts(
    filter: {
      ids: $createdPostIDs,
      status: [draft]
    }
  ) {
    # Fields not to be duplicated
    id
    slug
    date
    status

    # Fields to be duplicated
    author {
      id
    }
    categories {
      id
    }
    rawContent
    excerpt
    featuredImage {
      id
    }
    tags {
      id
    }
    title
  }
}
```
