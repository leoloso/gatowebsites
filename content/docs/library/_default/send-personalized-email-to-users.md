---
title: Send a personalized email to your users
description: "Iterate over the users on your site, and send a customized email to each of them"
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'sending-emails-with-pleasure'
referencedExtensionSlugs:
- 'email-sender'
- 'field-to-input'
- 'helper-function-collection'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
# - unhindered-wordpress-email-notifications
---

This query retrieves a list of users, obtains their data (name, email and number of remaining credits, which is stored as meta), and sends a personalized email to each of them.

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
mutation SendPersonalizedEmailToUsers {
  users {
    email
    displayName
    credits: metaValue(key: "credits")
    
    # If the user does not have meta entry "credits", use `0` credits
    hasNoCreditsEntry: _isNull(value: $__credits)
    remainingCredits: _if(condition: $__hasNoCreditsEntry, then: 0, else: $__credits)

    emailMessageTemplate: _strConvertMarkdownToHTML(
      text: """

Hello %s,

Your have **%s remaining credits** in your account.

Would you like to [buy more](%s)?

      """
    )
    emailMessage: _sprintf(
      string: $__emailMessageTemplate,
      values: [
        $__displayName,
        $__remainingCredits,
        "https://mysite.com/buy-credits"
      ]
    )

    _sendEmail(
      input: {
        to: $__email
        subject: "Remaining credits alert"
        messageAs: {
          html: $__emailMessage
        }
      }
    ) {
      status
      errors {
        __typename
        ...on ErrorPayload {
          message
        }
      }
    }
  }
}
```
