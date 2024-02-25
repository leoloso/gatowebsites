---
title: Import posts from CSV
metaDesc: Create a new post using the data from some CSV source
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-on-field'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'helper-function-collection'
- 'http-client'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Import posts from CSV
---

This query imports posts from a CSV.

It creates a new post with the title, excerpt, content and author (provided via username) of each post.

The names of the columns with those fields are provided via variables:

- `$titleColumn`
- `$excerptColumn`
- `$contentColumn`
- `$authorUsernameColumn`

...with default values `"Title"`, `"Excerpt"`, `"Content"` and `"Author"` respectively.

The URL of the CSV source must be provided via variable `$url`.

```graphql
query InitializeDynamicVariables
  @configureWarningsOnExportingDuplicateVariable(enabled: false)
{
  postInputs: _echo(value: [])
    @export(as: "postInputs")
    @remove
}

query GetPostsFromCSVAndExportData(
  $url: URL!
  $titleColumn: String! = "Title"
  $excerptColumn: String! = "Excerpt"
  $contentColumn: String! = "Content"
  $authorUsernameColumn: String! = "Author"
)
  @depends(on: "InitializeDynamicVariables")
{
  _sendHTTPRequest(input: {
    url: $url,
    method: GET
  }) {
    body
    csv: _strParseCSV(
      string: $__body
    )
    postInputs: _echo(value: $__csv)
      @underEachArrayItem(
        passValueOnwardsAs: "csvPostEntry"
        affectDirectivesUnderPos: [1, 2, 3, 4, 5]
      )
        @applyField(
          name: "_objectProperty",
          arguments: {
            object: $csvPostEntry,
            by: {
              key: $titleColumn,
            }
          },
          passOnwardsAs: "postTitle"
        )
        @applyField(
          name: "_objectProperty",
          arguments: {
            object: $csvPostEntry,
            by: {
              key: $excerptColumn,
            }
          },
          passOnwardsAs: "postExcerpt"
        )
        @applyField(
          name: "_objectProperty",
          arguments: {
            object: $csvPostEntry,
            by: {
              key: $contentColumn,
            }
          },
          passOnwardsAs: "postContent"
        )
        @applyField(
          name: "_objectProperty",
          arguments: {
            object: $csvPostEntry,
            by: {
              key: $authorUsernameColumn,
            }
          },
          passOnwardsAs: "postAuthorUsername"
        )
        # Already create (and export) the inputs for the mutation
        @applyField(
          name: "_echo",
          arguments: {
            value: {
              status: draft,
              title: $postTitle,
              excerpt: $postExcerpt,
              contentAs: {
                html: $postContent
              },
              authorBy: {
                username: $postAuthorUsername
              }
            }
          },
          setResultInResponse: true
        )
      @export(as: "postInputs")
  }
}

mutation CreatePostsFromCSVEntries
  @depends(on: "GetPostsFromCSVAndExportData")
{
  createdPostIDs: _echo(value: $postInputs)
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

query ImportPostsFromCSV
  @depends(on: "CreatePostsFromCSVEntries")
{
  createdPosts: posts(
    filter: {
      ids: $createdPostIDs,
      status: [draft]
    }
  ) {
    id
    slug
    date
    status
    title
    excerpt
    content
    author {
      id
      username
    }
  }
}
```
