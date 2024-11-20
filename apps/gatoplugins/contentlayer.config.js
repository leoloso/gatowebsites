import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import AppConfig from './app/app.config'
import ContentLayerConfig from '../../packages/shared/gatoapp/app/contentlayer.config.js'
import AppConstants from '../../packages/shared/gatoapp/app/app.constants.js'

const ContentLayerBaseConfig = ContentLayerConfig.config.ContentLayerBaseConfig
const BlogPost = ContentLayerConfig.types.BlogPost
const DemoPost = ContentLayerConfig.types.DemoPost
const Feature = ContentLayerConfig.types.Feature
const Page = ContentLayerConfig.types.Page
const Snippet = ContentLayerConfig.types.Snippet
const DocTopic = ContentLayerConfig.types.DocTopic
const ShopURLs = ContentLayerConfig.types.ShopURLs
const PostIntegration = ContentLayerConfig.types.PostIntegration

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
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
  },
  computedFields: {
    section: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/docs\/([a-zA-Z_-]+)\/(.+)/, '$1'),
    },
    topicSlug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/docs\/[a-zA-Z_-]+\/([a-zA-Z_-]+)\/(.+)/, '$1'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/docs\/[a-zA-Z_-]+\/([a-zA-Z_-]+)\//, ''),
    },
    urlPath: {
      type: 'string',
      resolve: (doc) => {
        const maybeURLPath = `/${doc._raw.flattenedPath/*.replace(/docs\/?/, '')*/}`
        const topicSlug = doc._raw.flattenedPath.replace(/docs\/[a-zA-Z_-]+\/([a-zA-Z_-]+)\/(.+)/, '$1')
        if (topicSlug === AppConstants.implicitDocTopicSlug) {
          return maybeURLPath.replace(`/${AppConstants.implicitDocTopicSlug}/`, '/')
        }
        return maybeURLPath
      }
    },
  },
}))

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
    urlPath: {
      type: 'string',
      resolve: (doc) => `/${AppConfig.paths.plugins}/${doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.plugins + '/?'), '')}`,
    },
  },
}))


export default makeSource({
  ...ContentLayerBaseConfig,
  documentTypes: [BlogPost, Page, Snippet, Doc, DocTopic, DemoPost, Feature, Plugin],
})