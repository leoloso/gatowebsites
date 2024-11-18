import { defineNestedType, defineDocumentType, makeSource } from 'contentlayer2/source-files'
import AppConfig from './app/app.config'
import ContentLayerConfig from '@gato/app/contentlayer.config.js'

const ContentLayerBaseConfig = ContentLayerConfig.config.ContentLayerBaseConfig
const BlogPost = ContentLayerConfig.types.BlogPost
const Page = ContentLayerConfig.types.Page
const Snippet = ContentLayerConfig.types.Snippet
const Doc = ContentLayerConfig.types.Doc
const DocTopic = ContentLayerConfig.types.DocTopic
const ShopURLs = ContentLayerConfig.types.ShopURLs

const Plugin = defineDocumentType(() => ({
  name: 'Plugin',
  filePathPattern: `${AppConfig.paths.plugins}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    seoTitle: {
      type: 'string',
    },
    description: {
      type: 'string',
      required: true,
    },
    seoDescription: {
      type: 'string',
    },
    order: {
      type: 'number',
      required: true,
    }, 
    image: {
      type: 'string',
      required: true,
    }, 
    video: {
      type: 'string',
    }, 
    videoDuration: {
      type: 'string',
    },
    integrations: {
      type: 'list',
      of: PostIntegration,
    },
    targetImages: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    shopURLs: {
      type: 'nested',
      of: ShopURLs,
      required: true
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.plugins + '/?'), ''),
    },    
  },
}))


export default makeSource({
  ...ContentLayerBaseConfig,
  documentTypes: [BlogPost, Page, Snippet, Doc, DocTopic, Plugin],
})