---
title: Display which posts have a thumbnail, and which have not
description: Identify posts that need to add/replace/remove their thumbnail
# image: /assets/GatoGraphQL-logo-suki.png
order: 0
referencedTutorialLessonSlugs:
- 'searching-wordpress-data'
predefinedPersistedQueryTitleInPlugin: Fetch posts by thumbnail
---

This query retrieves all posts that have a thumbnail, and those that do not.

```graphql
query GetPostsWithAndWithoutThumbnail {
  postsWithThumbnail: posts(
    filter: {
      metaQuery: {
        key: "_thumbnail_id",
        compareBy: {
          key: {
            operator: EXISTS
          }
        }
      }
    },
    pagination: { limit: -1 }
  ) {
    id
    title
    featuredImage {
      id
      src
    }
  }

  postsWithoutThumbnail: posts(
    filter: {
      metaQuery: {
        key: "_thumbnail_id",
        compareBy: {
          key: {
            operator: NOT_EXISTS
          }
        }
      }
    },
    pagination: { limit: -1 }
  ) {
    id
    title
  }
}
```
