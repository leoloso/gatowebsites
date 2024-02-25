---
title: Generate an optimized post's featured image using OpenAI's DALL-E and TinyPNG
description: "Using generative AI to produce images for posts without a featured image, and compress it for the web"
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedExtensionSlugs:
- 'field-default-value'
- 'field-response-removal'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'http-client'
- 'multiple-query-execution'
- 'php-functions-via-schema'
predefinedPersistedQueryTitleInPlugin: Generate a post\'s featured image using AI and optimize it
---

This Persisted GraphQL query uses [OpenAI's DALL-E](https://openai.com/dall-e-3) generative AI to produce images for posts without a featured image.

It first checks if a post has a featured image. If it does not, it creates one by calling DALL-E's generative AI service. We must provide the API key to use it.

As the generative AI images are not optimized for the web, the query can also send the newly-generated image to [TinyPNG](https://tinypng.com/) to compress it. We must provide the API key to use it.

Finally, the query creates a new media item with the image, and sets it as the post's featured image.

```graphql
query InitializeVariables(
  $tinyPngAPIKey: String
)
  @configureWarningsOnExportingDuplicateVariable(enabled: false)
{
  isFeaturedImageMissing: _echo(value: false)
    @export(as: "isFeaturedImageMissing")
    @remove

  isPostTitleNotEmpty: _echo(value: false)
    @export(as: "isPostTitleNotEmpty")
    @remove

  generatedImageURL: _echo(value: null)
    @export(as: "generatedImageURL")
    @remove

  isImageGenerated: _echo(value: false)
    @export(as: "isImageGenerated")
    @remove

  mimeType: _echo(value: null)
    @export(as: "mimeType")
    @remove

  isMediaItemCreated: _echo(value: false)
    @export(as: "isMediaItemCreated")
    @remove

  useTinyPng: _notEmpty(value: $tinyPngAPIKey)
    @export(as: "useTinyPng")
    @remove
}

query ExportPostData(
  $postID: ID!
)
  @depends(on: "InitializeVariables")
{
  post(by: { id: $postID }, status: any) {
    hasFeaturedImage
    isFeaturedImageMissing: hasFeaturedImage
      @boolOpposite
      @export(as: "isFeaturedImageMissing")
    title
      @export(as: "postTitle")
    rawTitle
      @remove
    isPostTitleNotEmpty: _notEmpty(value: $__rawTitle)
      @export(as: "isPostTitleNotEmpty")
    mediaItemFilename: rawTitle
      @default(value: "untitled", condition: IS_EMPTY)
      @strLowerCase
      @strSubstr(offset: 0, length: 20)
      @export(as: "filename")
      @remove
  }
}

query GenerateImageUsingOpenAI(
  $openAIAPIKey: String!
  $imageSize: String! = "1024x1024" # 256x256, 512x512, or 1024x1024 pixels
)
  @depends(on: "ExportPostData")
  @include(if: $isFeaturedImageMissing)
  @include(if: $isPostTitleNotEmpty)
{
  openAIResponse: _sendJSONObjectItemHTTPRequest(input: {
    url: "https://api.openai.com/v1/images/generations",
    method: POST,
    options: {
      auth: {
        password: $openAIAPIKey
      },
      json: {
        prompt: $postTitle,
        size: $imageSize,
        n: 1,
        response_format: "url",
      }
    }
  })
    @underJSONObjectProperty(by: { key: "data" })
      @underArrayItem(index: 0)
        @underJSONObjectProperty(by: { key: "url" })
          @export(as: "generatedImageURL")
  
  openAPIImageCaption: _sprintf(
    string: "Image created by DALL-E using prompt: '%s'",
    values: [$postTitle]
  )
      @export(as: "imageCaption")
  
  openAIMediaItemFilename: _sprintf(
    string: "%s.png",
    values: [$filename]
  )
    @export(as: "filename")
}

query CheckIsImageGenerated
  @depends(on: "GenerateImageUsingOpenAI")
  @include(if: $isFeaturedImageMissing)
  @include(if: $isPostTitleNotEmpty)
{
  isImageGenerated: _notEmpty(value: $generatedImageURL)
    @export(as: "isImageGenerated")
}

query MaybeCompressGeneratedImage(
  $tinyPngAPIKey: String
)
  @depends(on: "CheckIsImageGenerated")
  @include(if: $isImageGenerated)
  @include(if: $useTinyPng)
{
  compressedImageResponse: _sendHTTPRequest(input: {
    url: "https://api.tinify.com/shrink",
    method: POST,
    options: {
      auth: {
        password: $tinyPngAPIKey
      },
      headers: [
        {
          name: "Content-Type",
          value: "application/json"
        }
      ],
      json: {
        source: {
          url: $generatedImageURL
        }
      }
    }
  }) {
    body
      @remove
    bodyJSONObject: _strDecodeJSONObject(string: $__body)

    mimeType: _objectProperty(
      object: $__bodyJSONObject
      by: { path: "output.type" }
    )
      @export(as: "mimeType")

    generatedImageURL: header(name: "Location")
      @export(as: "generatedImageURL")
  }
}

mutation CreateMediaItemFromGeneratedImage
  @depends(on: "MaybeCompressGeneratedImage")
  @include(if: $isImageGenerated)
{
  createMediaItem(input: {
    from: {
      url: {
        source: $generatedImageURL
        filename: $filename
      }
    }
    title: $postTitle
    caption: $imageCaption
    altText: $postTitle
    mimeType: $mimeType
  }) {
    mediaItemID
      @export(as: "mediaItemID")
    isMediaItemCreated: _notNull(value: $__mediaItemID)
      @export(as: "isMediaItemCreated")
      @remove

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

mutation GenerateOptimizedPostFeaturedImageUsingOpenAI(
  $postID: ID!
)
  @depends(on: "CreateMediaItemFromGeneratedImage")
  @include(if: $isMediaItemCreated)
{
  setFeaturedImageOnCustomPost(input: {
    customPostID: $postID
    mediaItemBy: { id: $mediaItemID }
  }) {
    status
    errors {
      __typename
      ...on ErrorPayload {
        message
      }
    }
    customPost {
      __typename
      ...on CustomPost {
        featuredImage {
          id
          altText
          caption
          mimeType
          slug
          src
          title
        }
      }
    }
  }
}
```
