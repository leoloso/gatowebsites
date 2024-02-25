---
title: Send a farewell email to users who unsubscribe from ConvertKit (via a webhook)
description: "Receive, process, and execute an action using data submitted by ConvertKit (or any other service)"
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'interacting-with-external-services-via-webhooks'
- 'retrieving-data-from-an-external-api'
- 'sending-emails-with-pleasure'
referencedExtensionSlugs:
- 'email-sender'
- 'field-to-input'
- 'http-request-via-schema'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
---

When a user triggers an event on ConvertKit (such as subscribing or unsubscribing), the service will [call a webhook passing event data](https://developers.convertkit.com/#webhooks). We can set-up a Persisted Query as a webhook that processes this incoming data, and executes an action with it.

This query sends a farewell email (which includes a link to a form asking for feedback) to the person who unsubscribed on ConvertKit.

```graphql
query ExtractPayloadData {
  body: _httpRequestBody
  bodyJSONObject: _strDecodeJSONObject(string: $__body)

  subscriberFirstName: _objectProperty(
    object: $__bodyJSONObject,
    by: { path: "subscriber.first_name" }
  )
    @export(as: "subscriberFirstName")
  
  subscriberEmail: _objectProperty(
    object: $__bodyJSONObject,
    by: { path: "subscriber.email_address" }
  )
    @export(as: "subscriberEmail")
}

query CreateEmailMessage(
  $formURL: URL!
)
  @depends(on: "ExtractPayloadData")
{
  emailMessageTemplate: _strConvertMarkdownToHTML(
    text: """

Hey {$subscriberFirstName}, it's sad to let you go!

Please be welcome to complete [this form]({$formURL}) and let us know if there is anything we can do better.

Thanks. Hope to see you back!

    """
  )
  emailMessage: _strReplaceMultiple(
    search: ["{$subscriberFirstName}", "{$formURL}"],
    replaceWith: [$subscriberFirstName, $formURL],
    in: $__emailMessageTemplate
  )
    @export(as: "emailMessage")
}

mutation SendFarewellEmailToUnsubscribingUsersFromConvertKit
  @depends(on: "CreateEmailMessage")
{
  _sendEmail(
    input: {
      to: $subscriberEmail
      subject: "Would you like to give us feedback on how we can improve?"
      messageAs: {
        html: $emailMessage
      }
    }
  ) {
    status
  }
}
```
