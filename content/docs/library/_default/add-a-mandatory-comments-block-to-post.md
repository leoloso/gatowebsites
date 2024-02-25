---
title: Add a mandatory comments block to a post
metaDesc: "If missing, add the comments block at the bottom of the post"
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'automatically-adding-a-mandatory-block'
referencedExtensionSlugs:
- 'field-to-input'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
predefinedPersistedQueryTitleInPlugin: Add comments block to post
---

This query checks if block `wp:comments` has been added to the post indicated by variable `$postId`. If the block is missing, it then adds it at the bottom of the post.

**_This query requires the endpoint to have [Nested Mutations](https://gatographql.com/guides/schema/using-nested-mutations/) enabled._**

```graphql
query CheckIfCommentsBlockExists($postId: ID!) {
  posts(
    filter: {
      ids: [$postId]
      status: any
      search: "\"<!-- /wp:comments -->\""
    }
  ) {
    id
    ...CommentBlocks
  }
  blockExists: _notEmpty(value: $__posts)
    @export(as: "blockExists")
}

mutation InsertCommentsBlockIfMissingInPost($postId: ID!)
  @depends(on: "CheckIfCommentsBlockExists")
  @skip(if: $blockExists)
{
  post(by: { id: $postId }, status: any) {
    id
    rawContent
    adaptedRawContent: _strAppend(
      after: $__rawContent
      append: """

<!-- wp:comments -->
<div class="wp-block-comments"><!-- wp:comments-title /-->

<!-- wp:comment-template -->
<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"40px"} -->
<div class="wp-block-column" style="flex-basis:40px"><!-- wp:avatar {"size":40,"style":{"border":{"radius":"20px"}}} /--></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:comment-author-name {"fontSize":"small"} /-->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"0px","bottom":"0px"}}},"layout":{"type":"flex"}} -->
<div class="wp-block-group" style="margin-top:0px;margin-bottom:0px"><!-- wp:comment-date {"fontSize":"small"} /-->

<!-- wp:comment-edit-link {"fontSize":"small"} /--></div>
<!-- /wp:group -->

<!-- wp:comment-content /-->

<!-- wp:comment-reply-link {"fontSize":"small"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
<!-- /wp:comment-template -->

<!-- wp:comments-pagination -->
<!-- wp:comments-pagination-previous /-->

<!-- wp:comments-pagination-numbers /-->

<!-- wp:comments-pagination-next /-->
<!-- /wp:comments-pagination -->

<!-- wp:post-comments-form /--></div>
<!-- /wp:comments -->   

      """
    )
    update(input: {
      contentAs: { html: $__adaptedRawContent },
    }) {
      status
      errors {
        __typename
        ...on ErrorPayload {
          message
        }
      }
      post {
        id
        rawContent
        ...CommentBlocks
      }
    }
  }
}

fragment CommentBlocks on CustomPost {
  blocks(filterBy: { include: ["core/comments"] }) {
    ... on Block {
      name
      attributes
    }
  }
}
```
