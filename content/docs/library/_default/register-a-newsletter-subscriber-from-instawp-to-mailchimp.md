---
title: Register a newsletter subscriber from InstaWP to Mailchimp
description: Using InstaWP + Gato GraphQL to forward webhook data into an API
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedTutorialLessonSlugs:
- 'automatically-sending-newsletter-subscribers-from-instawp-to-mailchimp'
- 'interacting-with-external-services-via-webhooks'
- 'not-leaking-credentials-when-connecting-to-services'
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-response-removal'
- 'field-to-input'
- 'http-client'
- 'http-request-via-schema'
- 'multiple-query-execution'
- 'php-constants-and-environment-variables-via-schema'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Register a newsletter subscriber from InstaWP to Mailchimp
---

[InstaWP](https://instawp.com) allows visitors to launch a sandbox site to test a plugin, while allowing them to subscribe to the newsletter:

<div class="img-width-610" markdown=1>

![Launching a testing site in InstaWP to test Gato GraphQL](/images/instawp-test-drive-gatographql.png "Launching a testing site in InstaWP to test Gato GraphQL")

</div>

We can capture these emails by providing a webhook to InstaWP, under the template's "Advanced Options" tab:

<div class="img-width-1024" markdown=1>

![Advanced options for InstaWP templates](/images/instawp-template-advanced-options.png "Advanced options for InstaWP templates")

</div>

The webhook will be a persisted query with the query below. This query captures the email from the visitors, and subscribes this email to a Mailchimp list.

```graphql
query HasSubscribedToNewsletter {
  hasSubscriberOptin: _httpRequestHasParam(name: "marketing_optin")
  subscriberOptin: _httpRequestStringParam(name: "marketing_optin")
  isNotSubscriberOptinNAValue: _notEquals(value1: $__subscriberOptin, value2: "NA")
  subscribedToNewsletter: _and(values: [$__hasSubscriberOptin, $__isNotSubscriberOptinNAValue])
    @export(as: "subscribedToNewsletter")
}

query RegisterNewsletterSubscribeFromInstaWPToMailchimpList(
  # mailchimpDataCenterCode: Code for the data center of your account on Mailchimp (See: https://mailchimp.com/developer/marketing/docs/fundamentals/#api-structure)
  $mailchimpDataCenterCode: String!
  # Audience ID for the list on Mailchimp to which to subscribe the email
  $mailchimpAudienceID: String!
)
   @depends(on: "HasSubscribedToNewsletter")
   @include(if: $subscribedToNewsletter)
{
  subscriberEmail: _httpRequestStringParam(name: "email")
  
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
        email_address: $__subscriberEmail,
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

Using this webhook, when creating a new testing site on InstaWP, and the user signs up to the newsletter, the visitor's email is automatically added to the Mailchimp list:

<div class="img-width-1024" markdown=1>

![Email automatically added to Mailchimp list](/images/instawp-mailchimp.png "Email automatically added to Mailchimp list")

</div>
