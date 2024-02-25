---
title: Retrieve the latest artifact download URLs from GitHub, passing the access token via a header
metaDesc: "Access the latest version of your plugin on your GitHub repo, while passing the access token via a header (eg: for an API gateway)"
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'creating-an-api-gateway'
- 'handling-errors-when-connecting-to-services'
- 'not-leaking-credentials-when-connecting-to-services'
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-on-field'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'http-client'
- 'http-request-via-schema'
- 'multiple-query-execution'
- 'php-functions-via-schema'
- 'response-error-trigger'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

This query is similar to [Retrieve the latest artifact download URLs from GitHub](../retrieve-latest-artifact-download-urls-from-github/), with the difference that it receives the GitHub credentials via the header `X-Github-Access-Token` in the request.

```graphql
query RetrieveGitHubAccessToken(
  $githubAccessTokenHeaderName: String! = "X-Github-Access-Token"
) {
  githubAccessToken: _httpRequestHeader(name: $githubAccessTokenHeaderName)
    @export(as: "githubAccessToken")
    @remove

  isGithubAccessTokenMissing: _isEmpty(value: $__githubAccessToken)
    @export(as: "isGithubAccessTokenMissing")
}

query FailIfGitHubAccessTokenIsMissing
  @depends(on: "RetrieveGitHubAccessToken")
  @include(if: $isGithubAccessTokenMissing)
{
  _fail(
    message: "Header 'X-Github-Access-Token' has not been provided"
  ) @remove
}

query RetrieveProxyArtifactDownloadURLs(
  $repoAccount: String!
  $repoProject: String!
  $numberArtifacts: Int! = 1
)
  @depends(on: "RetrieveGitHubAccessToken")
  @skip(if: $isGithubAccessTokenMissing)
{
  githubArtifactsEndpoint: _sprintf(
    string: "https://api.github.com/repos/%s/%s/actions/artifacts?per_page=%s",
    values: [$repoAccount, $repoProject, $numberArtifacts]
  )
    @remove

  # Retrieve Artifact data from GitHub Actions API
  gitHubArtifactData: _sendJSONObjectItemHTTPRequest(
    input: {
      url: $__githubArtifactsEndpoint,
      options: {
        auth: {
          password: $githubAccessToken
        },
        headers: [
          {
            name: "Accept",
            value: "application/vnd.github+json"
          }
        ]
      }
    }
  )
    @remove
  
  # Extract the URL from within each "artifacts" item
  gitHubProxyArtifactDownloadURLs: _objectProperty(
    object: $__gitHubArtifactData,
    by: {
      key: "artifacts"
    }
  )
    @underEachArrayItem(passValueOnwardsAs: "artifactItem")
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $artifactItem,
          by: {
            key: "archive_download_url"
          }
        },
        setResultInResponse: true
      )
    @export(as: "gitHubProxyArtifactDownloadURLs")
}

query CreateHTTPRequestInputs
  @depends(on: "RetrieveProxyArtifactDownloadURLs")
  @skip(if: $isGithubAccessTokenMissing)
{
  httpRequestInputs: _echo(value: $gitHubProxyArtifactDownloadURLs)
    @underEachArrayItem(
      passValueOnwardsAs: "url"
    )
      @applyField(
        name: "_objectAddEntry",
        arguments: {
          object: {
            options: {
              auth: {
                password: $githubAccessToken
              },
              headers: {
                name: "Accept",
                value: "application/vnd.github+json"
              },
              allowRedirects: null
            }
          },
          key: "url",
          value: $url
        },
        setResultInResponse: true
      )
    @export(as: "httpRequestInputs")
    @remove
}

query RetrieveActualArtifactDownloadURLs
  @depends(on: "CreateHTTPRequestInputs")
  @skip(if: $isGithubAccessTokenMissing)
{
  _sendHTTPRequests(
    inputs: $httpRequestInputs
  ) {
    artifactDownloadURL: header(name: "Location")
      @export(as: "artifactDownloadURLs", type: LIST)
  }
}

query RetrieveLatestArtifactDownloadURLsFromGitHubPassingAccessTokenViaHeader
  @depends(on: "RetrieveActualArtifactDownloadURLs")
  @skip(if: $isGithubAccessTokenMissing)
{
  artifactDownloadURLs: _echo(value: $artifactDownloadURLs)
}
```
