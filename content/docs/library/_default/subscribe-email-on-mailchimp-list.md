---
title: Subscribe an email on a Mailchimp list
description: Connect to Mailchimp's API to register an email in a list
# image: /assets/GatoGraphQL-logo-suki.png
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

This query subscribes an email to a Mailchimp list.

```graphql
query SubscribeEmailOnMailchimpList(
  # Email to subscribe
  $email: Email!
  # mailchimpDataCenterCode: Code for the data center of your account on Mailchimp (See: https://mailchimp.com/developer/marketing/docs/fundamentals/#api-structure)
  $mailchimpDataCenterCode: String!
  # Audience ID for the list on Mailchimp to which to subscribe the email
  $mailchimpAudienceID: String!
) {
  mailchimpUsername: _env(name: "MAILCHIMP_API_CREDENTIALS_USERNAME")
    @remove
  mailchimpPassword: _env(name: "MAILCHIMP_API_CREDENTIALS_PASSWORD")
    @remove

  mailchimpAPIEndpoint: _sprintf(
    string: "https://%s.api.mailchimp.com/3.0/lists/%s/members",
    values: [$mailchimpDataCenterCode, $mailchimpAudienceID]
  )
  
  mailchimpListMembersJSONObject: _sendJSONObjectItemHTTPRequest(input: {
    url: $__mailchimpAPIEndpoint,
    method: POST,
    options: {
      auth: {
        username: $__mailchimpUsername,
        password: $__mailchimpPassword
      },
      json: {
        email_address: $email,
        status: "subscribed"
      }
    }
  })
}
```

And define in `wp-config.php`:

```php
define( 'MAILCHIMP_API_CREDENTIALS_USERNAME', '{ username }' );
define( 'MAILCHIMP_API_CREDENTIALS_PASSWORD', '{ password }' );
```
