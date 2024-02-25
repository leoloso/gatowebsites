---
title: Send an email to the admin
description: "Fetching the admin email from the DB"
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'sending-emails-with-pleasure'
referencedExtensionSlugs:
- 'email-sender'
- 'multiple-query-execution'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
# - unhindered-wordpress-email-notifications
---

This query retrieves the email of the admin user from the WordPress `wp_options` table, and injects this value into the `to` field.

```graphql
query ExportData {
  adminEmail: optionValue(name: "admin_email")
    @export(as: "adminEmail")
}

mutation SendEmailToAdmin @depends(on: "ExportData") {
  _sendEmail(
    input: {
      to: $adminEmail
      subject: "Admin notification"
      messageAs: {
        html: "There is a new post on the site, go check!"
      }
    }
  ) {
    status
  }
}
```
