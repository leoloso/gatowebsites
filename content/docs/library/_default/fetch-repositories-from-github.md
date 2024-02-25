---
title: Fetch repositories from GitHub
description: Connect to GitHub's API to fetch repository data for some account
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'not-leaking-credentials-when-connecting-to-services'
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-response-removal'
- 'field-to-input'
- 'http-client'
- 'php-constants-and-environment-variables-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

This query connects to [GitHub's GraphQL API](https://docs.github.com/en/graphql) and retrieves the list of repos for the indicated owner.

```graphql
query FetchGitHubRepositories(
  $login: String!
  $numberRepos: Int! = 100
) {
  githubAccessToken: _env(name: "GITHUB_ACCESS_TOKEN")
    @remove

  _sendGraphQLHTTPRequest(input:{
    endpoint: "https://api.github.com/graphql",
    query: """
    
query GetRepositoriesByOwner($login: String!, $numberRepos: Int!) {
  repositoryOwner(login: $login) {
    repositories(first: $numberRepos) {
      nodes {
        id
        name
        description
      }
    }
  }
}

    """,
    variables: [
      {
        name: "login",
        value: $login
      },
      {
        name: "numberRepos",
        value: $numberRepos
      }
    ],
    options: {
      auth: {
        password: $__githubAccessToken
      }
    }
  })
}
```

And define in `wp-config.php`:

```php
define( 'GITHUB_ACCESS_TOKEN', '{ your github access token }' );
```
