---
title: Augment data from an external API
description: "Adapt the response from an external API to anything you need it to be"
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'creating-an-api-gateway'
- 'retrieving-data-from-an-external-api'
- 'transforming-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-default-value'
- 'field-on-field'
- 'field-value-iteration-and-manipulation'
- 'http-client'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

If we need to fetch data from an external API, but we need to somehow modify the results (such as providing a default value when some field is empty), we can then use Gato GraphQL to implement an API gateway that transforms the entries as needed.

For instance, when invoking the REST API endpoint `/users` from some WordPress site, we can add a default value when the `url` field is empty, and an additional `link` property with the HTML code:

```graphql
query FilterDataFromWordPressAPI(
  # eg: https://somesite.com/wp-json/wp/v2/users/?_fields=id,name,url
  $endpointURL: URL!
) {
  usersWithLinkAndDefaultURL: _sendJSONObjectCollectionHTTPRequest(
    input: {
      url: $endpointURL
    }
  )
    # Set a default URL for users without any
    @underEachArrayItem
      @underJSONObjectProperty(
        by: {
          key: "url"
        }
      )
        @default(
          value: "https://mysite.com"
          condition: IS_EMPTY
        )

    # Add a new "link" entry on the JSON object
    @underEachArrayItem(
      affectDirectivesUnderPos: [1, 2, 3, 4],
      passValueOnwardsAs: "userListItem"
    )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $userListItem,
          by: {
            key: "name"
          }
        },
        passOnwardsAs: "userName"
      )
      @applyField(
        name: "_objectProperty",
        arguments: {
          object: $userListItem,
          by: {
            key: "url"
          }
        },
        passOnwardsAs: "userURL"
      )
      @applyField(
        name: "_sprintf",
        arguments: {
          string: "<a href=\"%s\">%s</a>",
          values: [$userURL, $userName]
        },
        passOnwardsAs: "userLink"
      )
      @applyField(
        name: "_objectAddEntry",
        arguments: {
          object: $userListItem,
          key: "link",
          value: $userLink
        },
        setResultInResponse: true
      )
}
```
