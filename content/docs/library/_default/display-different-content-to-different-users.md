---
title: Display different content to different users
description: Retrieve a different GraphQL response depending on the role of the logged-in user
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'customizing-content-for-different-users'
referencedExtensionSlugs:
- 'field-response-removal'
- 'field-to-input'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - simplest-wordpress-content-translation
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

This query retrieves the post content, and only for users with the `admin` role, it appends an `"(Edit this post)"` link at the bottom of the content.

```graphql
query InitializeDynamicVariables
  @configureWarningsOnExportingDuplicateVariable(enabled: false)
{
  isAdminUser: _echo(value: false)
    @export(as: "isAdminUser")
    @remove
}

query ExportConditionalVariables
  @depends(on: "InitializeDynamicVariables")
{
  me {
    roleNames @remove
    isAdminUser: _inArray(
      value: "administrator",
      array: $__roleNames
    )
      @export(as: "isAdminUser")
  }
}

query RetrieveContentForAdminUser($postId: ID!)
  @depends(on: "ExportConditionalVariables")
  @include(if: $isAdminUser)
{
  post(by: { id: $postId }, status: any) {
    originalContent: content @remove
    wpAdminEditURL @remove
    content: _sprintf(
      string: "%s<p><a href=\"%s\">%s</a></p>",
      values: [
        $__originalContent,
        $__wpAdminEditURL,
        "(Edit this post)"
      ]
    )
  }
}

query RetrieveContentForNonAdminUser($postId: ID!)
  @depends(on: "ExportConditionalVariables")
  @skip(if: $isAdminUser)
{
  post(by: { id: $postId }, status: any) {
    content
  }
}

query RetrieveContentForDifferentUsers
  @depends(on: [
    "RetrieveContentForAdminUser",
    "RetrieveContentForNonAdminUser"
  ])
{
  id @remove
}
```
