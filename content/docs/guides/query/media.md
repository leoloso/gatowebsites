---
title: Media
metaDesc: Examples of queries to fetch and mutate media data.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 700
---

These are examples of queries to fetch and mutate media data.

## Fetching media

A media item, with the image source in different sizes:

```graphql
query {
  mediaItem(by: { id: 1647 }) {
    id
    srcSet
    src
    thumbSizeSrc: src(size: "thumbnail")
    largeSizeSrc: src(size: "large")
  }
}
```

All media items (with mime type "image" by default), and all the image sizes:

```graphql
query {
  imageSizeNames
  mediaItems {
    id
    srcSet
    src(size: "medium")
    sizes(size: "thumbnail")
    width
    height
    slug
    url
    urlAbsolutePath
    title
    caption
    altText
    description
    date
    mimeType
  }
}
```

The posts' featured image:

```graphql
query {
  posts {
    id
    hasFeaturedImage
    featuredImage {
      id
      src
      width
      height
    }
  }
}
```

Filtering media items:

```graphql
{
  mediaItems(
    pagination: { limit: 3 },
    sort: { by: TITLE },
    filter: { dateQuery: { after: "2012-01-02" } }
  ) {
    id
    src
    height
    width
  }
}
```

Fetching video and audio items:

```graphql
{
  mediaItems(
    filter: { mimeTypes: ["video", "audio"] }
  ) {
    id
    src
  }
}
```

## Fetching the logged-in user's media items

Fields `myMediaItemCount`, `myMediaItems` and `myMediaItem` fetch the logged-in user's media items:

```graphql
query GetMediaItems {
  me {
    slug
  }
  
  myMediaItemCount

  myMediaItems(pagination: {
    limit: 3
  }) {
    ...MediaItemData
  }

  myMediaItem(by: { id: 1380 }) {
    ...MediaItemData
  }
}

fragment MediaItemData on Media {
  id
  mimeType
  src
  author {
    slug
  }
}
```

## Setting a post's featured image

We can reference any image existing in the Media library.

```graphql
mutation {
  setFeaturedImageOnCustomPost(
    input: {
      customPostID: 1499,
      mediaItemID: 1505
    }
  ) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    customPostID
    customPost {
      ...on WithFeaturedImage {
        featuredImage {
          id
          src
        }
      }
    }
  }
}
```

With nested mutations:

```graphql
mutation {
  post(by: { id: 1499 }) {
    setFeaturedImage(input: { mediaItemID: 1647 }) {
      status
      errors {
        __typename
        ...on ErrorPayload {
          message
        }
      }
      customPostID
      customPost {
        ...on WithFeaturedImage {
          featuredImage {
            id
            src
          }
        }
      }
    }
  }
}
```

## Uploading an attachment to the Media Library

Passing the URL:

```graphql
mutation CreateMediaItems {
  fromURL: createMediaItem(input: {
    from: {
      url: {
        source: "https://gatographql.com/assets/GatoGraphQL-logo.png"
      }
    }
    caption: "Gato GraphQL logo"
    altText: "This is the Gato GraphQL logo"
  }) {
    mediaItemID
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    mediaItem {
      altText
      caption
      mimeType
      slug
      src
      title
    }
  }
}
```

Passing directly the contents of the attachment:

```graphql
mutation CreateMediaItems {
  createMediaItem(input: {
    from: {
      contents: {
        body: """
<html>
  <body>
    Hello world!
  </body>
</html>
        """
        filename: "hello-world.html"
      }
    }
    title: "Hello world!"
  }) {
    mediaItemID
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    mediaItem {
      altText
      caption
      mimeType
      slug
      src
      title
    }
  }
}
```
