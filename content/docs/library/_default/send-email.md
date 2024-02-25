---
title: Send an email
description: "Using text and HTML content"
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedTutorialLessonSlugs:
- 'sending-emails-with-pleasure'
referencedExtensionSlugs:
- 'email-sender'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
# - unhindered-wordpress-email-notifications
---

This query sends an email as text content, and an email as HTML content.

```graphql
mutation SendEmail {
  sendTextEmail: _sendEmail(
    input: {
      from: {
        email: "from@email.com"
        name: "Me myself"
      }
      replyTo: "replyTo@email.com"

      to: "target@email.com"
      cc: ["cc1@email.com", "cc2@email.com"]
      bcc: ["bcc1@email.com", "bcc2@email.com", "bcc3@email.com"]
      
      subject: "Email with text content"
      messageAs: {
        text: "Hello world!"
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
  
  sendHTMLEmail: _sendEmail(
    input: {
      to: "target@email.com"
      subject: "Email with HTML content"
      messageAs: {
        html: "<p>Hello world!</p>"
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
```
