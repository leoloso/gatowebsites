import { defineNestedType, defineDocumentType, makeSource } from 'contentlayer2/source-files'
import AppConfig from './app/app.config'
import ContentLayerConfig from '../../packages/shared/gatoapp/app/contentlayer.config.js'

const ContentLayerBaseConfig = ContentLayerConfig.config.ContentLayerBaseConfig
const BlogPost = ContentLayerConfig.types.BlogPost
const DemoPost = ContentLayerConfig.types.DemoPost
const Feature = ContentLayerConfig.types.Feature
const Page = ContentLayerConfig.types.Page
const Snippet = ContentLayerConfig.types.Snippet
const DocTopic = ContentLayerConfig.types.DocTopic
const PostIntegration = ContentLayerConfig.types.PostIntegration
const DocConfig = ContentLayerConfig.typeConfigs.Doc

const Doc = defineDocumentType(() => (DocConfig(true)))

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
    features: {
      type: 'list',
      of: SectionFeature,
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
    prices: {
      type: 'nested',
      of: PluginPrices,
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
    docUrlPath: {
      type: 'string',
      resolve: (doc) => `/${AppConfig.paths.docs}/${doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.plugins + '/?'), '')}`,
    },
  },
}))

const PluginSection = defineDocumentType(() => ({
  name: 'PluginSection',
  filePathPattern: 'plugin-sections/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },
    leading: {
      type: 'string',
    },
    order: {
      type: 'number',
      required: true,
    },   
    video: {
      type: 'string',
    }, 
    videoDuration: {
      type: 'string',
    },
  },
  computedFields: {
    pluginSlug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/plugin-sections\/([a-zA-Z_-]+)\/(.+)?/, '$1'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/plugin-sections\/[a-zA-Z_-]+\/?/, ''),
    },
  },
}))

const SectionFeature = defineNestedType(() => ({
  name: 'SectionFeature',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
  },
}))

const ShopURLs = defineNestedType(() => ({
  name: 'ShopURLs',
  fields: {
    dev: {
      type: 'string',
      required: true
    },
    defaultTier: {
      type: 'nested',
      of: ShopURLByLicense,
      required: true
    }, 
    tier1: {
      type: 'nested',
      of: ShopURLByLicense,
      required: true
    }, 
    tier2: {
      type: 'nested',
      of: ShopURLByLicense,
      required: true
    }, 
    tier3: {
      type: 'nested',
      of: ShopURLByLicense,
      required: true
    }, 
    tier4: {
      type: 'nested',
      of: ShopURLByLicense,
      required: true
    }, 
  },
}))

const ShopURLByLicense = defineNestedType(() => ({
  name: 'ShopURLByLicense',
  fields: {
    yearly: {
      type: 'string',
      required: true
    },
  },
}))

const PluginPrices = defineNestedType(() => ({
  name: 'PluginPrices',
  fields: {
    defaultTier: {
      type: 'nested',
      of: PluginPriceByLicense,
      required: true
    }, 
    tier1: {
      type: 'nested',
      of: PluginPriceByLicense,
      required: true
    }, 
    tier2: {
      type: 'nested',
      of: PluginPriceByLicense,
      required: true
    }, 
    tier3: {
      type: 'nested',
      of: PluginPriceByLicense,
      required: true
    }, 
    tier4: {
      type: 'nested',
      of: PluginPriceByLicense,
      required: true
    }, 
  },
}))

const PluginPriceByLicense = defineNestedType(() => ({
  name: 'PluginPriceByLicense',
  fields: {
    yearly: {
      type: 'number',
      required: true
    },
  },
}))


export default makeSource({
  ...ContentLayerBaseConfig,
  documentTypes: [BlogPost, Page, Snippet, Doc, DocTopic, DemoPost, Feature, Plugin, PluginSection],
})