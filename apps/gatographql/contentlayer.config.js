import { defineNestedType, defineDocumentType, makeSource } from 'contentlayer2/source-files'
import AppConfig from './app/app.config'
import ContentLayerConfig from '../../packages/shared/gatoapp/app/contentlayer.config.js'

const ContentLayerBaseConfig = ContentLayerConfig.config.ContentLayerBaseConfig
const BlogPost = ContentLayerConfig.types.BlogPost
const DemoPost = ContentLayerConfig.types.DemoPost
const Page = ContentLayerConfig.types.Page
const Snippet = ContentLayerConfig.types.Snippet
const Doc = ContentLayerConfig.types.Doc
const DocTopic = ContentLayerConfig.types.DocTopic
const ShopURLs = ContentLayerConfig.types.ShopURLs
const PostIntegration = ContentLayerConfig.types.PostIntegration

const Highlight = defineDocumentType(() => ({
  name: 'Highlight',
  filePathPattern: `${AppConfig.paths.highlights}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    order: {
      type: 'number',
      required: true,
    },
    video: {
      type: 'string',
      required: true,
    },
    videoDesc: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'enum',
      options: [
        'Free plugin',
        'PRO plugin',
      ],
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.highlights + '/?'), ''),
    },    
  },
}))

const ComparisonPost = defineDocumentType(() => ({
  name: 'ComparisonPost',
  filePathPattern: `${AppConfig.paths.comparisonPosts}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    seoTitle: {
      type: 'string',
    },
    leading: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    seoDescription: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    targetName: {
      type: 'string',
      required: true,
    },
    targetImage: {
      type: 'string',
      required: true,
    },
    order: {
      type: 'number',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.comparisonPosts + '/?'), ''),
    },    
  },
}))

const Extension = defineDocumentType(() => ({
  name: 'Extension',
  filePathPattern: `${AppConfig.paths.extensions}/**/*.mdx`,
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
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.extensions + '/?'), ''),
    },    
  },
}))

export default makeSource({
  ...ContentLayerBaseConfig,
  documentTypes: [Highlight, BlogPost, Page, Snippet, DemoPost, ComparisonPost, Doc, DocTopic, Extension, Feature],
  contentDirExclude: [
    'features/_automation.mdx',
    'features/_integrations-with-3rdparty-plugins.mdx',
    'features/_mutation-return-type.mdx',
    // Extensions not included in any bundle plugin
    'doc-topics/extensions-reference/_unmapped.mdx',
    'docs/extensions-reference/_unmapped/automation.mdx',
    'docs/extensions-reference/_unmapped/events-manager.mdx',
    'docs/extensions-reference/_unmapped/google-translate.mdx',
    'docs/extensions-reference/_unmapped/multilingualpress.mdx',
    // Ignore Polylang library docs
    'docs/library/_default/_create-missing-translation-categories-for-polylang.mdx',
    'docs/library/_default/_create-missing-translation-posts-for-polylang.mdx',
    'docs/library/_default/_create-missing-translation-tags-for-polylang.mdx',
    'docs/library/_default/_sync-post-featuredimage-for-polylang.mdx',
    'docs/library/_default/_sync-tags-and-categories-for-polylang.mdx',
    'docs/library/_default/_translate-categories-for-polylang.mdx',
    'docs/library/_default/_translate-posts-for-polylang-classic-editor.mdx',
    'docs/library/_default/_translate-posts-for-polylang-gutenberg.mdx',
    'docs/library/_default/_translate-tags-for-polylang.mdx',
    // Ignore MultilingualPress library docs
    'docs/library/_default/_translate-categories-for-multilingualpress.mdx',
    'docs/library/_default/_translate-posts-for-multilingualpress-classic-editor.mdx',
    'docs/library/_default/_translate-posts-for-multilingualpress-gutenberg.mdx',
    'docs/library/_default/_translate-tags-for-multilingualpress.mdx',
    // Ignore `@strTranslate` library docs
    'docs/library/_default/_translate-content-from-url.mdx',
    'docs/library/_default/_translate-pages-for-multilingual-wordpress-site-classic-editor.mdx',
    'docs/library/_default/_translate-pages-for-multilingual-wordpress-site-gutenberg.mdx',
    'docs/library/_default/_translate-poedit-file-content.mdx',
    'docs/library/_default/_translate-post-classic-editor.mdx',
    'docs/library/_default/_translate-post-gutenberg.mdx',
    'docs/library/_default/_translate-posts-classic-editor.mdx',
    'docs/library/_default/_translate-posts-gutenberg.mdx',
    // Ignore `@strTranslate` tutorial docs
    'docs/tutorial/_default/_bulk-translating-block-content-in-multiple-posts-to-a-different-language.mdx',
    'docs/tutorial/_default/_translating-block-content-in-a-post-to-a-different-language.mdx',
    'docs/tutorial/_default/_translating-content-from-url.mdx',
    // Ignore Automation guides
    'doc-topics/guides/_manage.mdx',
    'docs/guides/manage/_automating-tasks.mdx',
  ],
})
