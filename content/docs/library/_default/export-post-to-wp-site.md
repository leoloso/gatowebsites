---
title: Export post to WordPress site
description: Fetch the data for a post from this WordPress site, and replicate it in some downstream WordPress site
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedTutorialLessonSlugs:
- 'handling-errors-when-connecting-to-services'
- 'not-leaking-credentials-when-connecting-to-services'
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-on-field'
- 'field-response-removal'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'http-client'
- 'multiple-query-execution'
- 'php-functions-via-schema'
- 'response-error-trigger'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Export post to WordPress site
---

This query exports a post from this WordPress site into some downstream WordPress site.

The Gato GraphQL plugin (free version) must be installed on the downstream website. It must expose an endpoint with "Nested mutations" enabled.

The `$update` parameter indicates if to create or update a post in the downstream site.

If updating the post, the common identifier between the upstream and downstream sites is the post slug.

```graphql
query CheckHasPost($postSlug: String!)
{
  post(by: { slug: $postSlug }, status: any)
    @fail(
      message: "There is no post in the upstream site with the provided slug"
      data: {
        slug: $postSlug
      }
    )
  {
    rawTitle
      @export(as: "postTitle")
    rawContent
      @export(as: "postContent")
  }

  isMissingPostInUpstream: _isNull(value: $__post)
    @export(as: "isMissingPostInUpstream")
}

query ExportDownstreamGraphQLQuery
  @depends(on: "CheckHasPost")
  @skip(if: $isMissingPostInUpstream)
{
  query: _echo(value: """

mutation LoginUserAndUpdatePost(
  $update: Boolean! = false
  $username: String!
  $userPassword: String!
  $postSlug: String!
  $postTitle: String!
  $postContent: String!
) {
  loginUser(by: {
    credentials: {
      usernameOrEmail: $username,
      password: $userPassword
    }
  }) {
    userID
  }

  post(by: { slug: $postSlug }, status: any)
    @include(if: $update)
  {
    update(input: {
      title: $postTitle,
      contentAs: { html: $postContent },
    }) {
      status
      errors {
        __typename
        ...on ErrorPayload {
          message
        }
      }
      post {
        title
        slug
        content
        status
      }
    }
  }

  createPost(input: {
    title: $postTitle,
    slug: $postSlug,
    contentAs: { html: $postContent },
    status: draft
  })
    @skip(if: $update)
  {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    post {
      title
      slug
      content
      status
    }
  }
}

    """
  )
    @export(as: "query")
    @remove
}

query ExportPostToWPSite(
  $downstreamServerGraphQLEndpointURL: String!
  $update: Boolean! = false
  $username: String!
  $userPassword: String!
  $postSlug: String!
)
  @depends(on: "ExportDownstreamGraphQLQuery")
  @skip(if: $isMissingPostInUpstream)
{
  _sendGraphQLHTTPRequest(
    input: {
      endpoint: $downstreamServerGraphQLEndpointURL,
      query: $query,
      variables: [
        {
          name: "update",
          value: $update
        },
        {
          name: "username",
          value: $username
        },
        {
          name: "userPassword",
          value: $userPassword
        },
        {
          name: "postSlug",
          value: $postSlug
        },
        {
          name: "postTitle",
          value: $postTitle
        },
        {
          name: "postContent",
          value: $postContent
        }
      ]
    }
  )
}
```
