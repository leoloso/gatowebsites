---
title: Retrieve user data stored in a different WordPress site
description: Fetch data corresponding to your users, stored in another WordPress site
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-to-input'
- 'http-client'
- 'multiple-query-execution'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

This query fetches the user data (from a WordPress site) stored on a different WordPress site, using the user's slug as the common identifier between the 2 sites.

It works by executing the `/users` REST API endpoint on the remote site, while passing the users' slugs to retrieve those results only.

```graphql
query GetUserSlugs {
  users(pagination: { limit: -1 }) {
    id
    slug
      @export(
        as: "userSlugs",
        type: LIST,
      )
  }
}

query FetchUserDataFromAnotherWPSite(
  # URL of the remote /users REST API endpoint
  # eg: https://somesite.com/wp-json/wp/v2/users
  $endpointURL: URL!
)
  @depends(on: "GetUserSlugs")
{
  endpoint: _urlAddParams(
    url: $endpointURL,
    params: {
      slug: $userSlugs
    }
  )

  remoteUserData: _sendJSONObjectCollectionHTTPRequest(
    input: {
      url: $__endpoint,
      method: GET
    }
  )
}
```
