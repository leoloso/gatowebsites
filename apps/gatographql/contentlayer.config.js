import { defineNestedType, defineDocumentType, makeSource } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import AppConfig from './app/app.config'

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

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `${AppConfig.paths.blog}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    seoTitle: {
      type: 'string',
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    description: {
      type: 'string',
      required: true,
    },
    seoDescription: {
      type: 'string',
    },
    featured: {
      type: 'boolean',
    },
    author: {
      type: 'string',
      required: true,
    },
    authorImg: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    image: {
      type: 'string',
    },        
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.blog + '/?'), ''),
    },    
  },
}))

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
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
    leading: {
      type: 'string',
    },
    lastModifiedAt: {
      type: 'date',
    },
    image: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/pages\/?/, ''),
    },    
  },
}))

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: `snippets/**/*.mdx`,
  contentType: 'mdx',
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/snippets\/?/, ''),
    },    
  },
}))

const DemoPost = defineDocumentType(() => ({
  name: 'DemoPost',
  filePathPattern: `${AppConfig.paths.demoPosts}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    seoTitle: {
      type: 'string',
    },
    publishedAt: {
      type: 'date',
      required: true
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
    author: {
      type: 'string',
      required: true,
    },
    authorImg: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    image: {
      type: 'string',
    },   
    targetImages: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },   
    integrations: {
      type: 'list',
      of: PostIntegration,
    },  
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.demoPosts + '/?'), ''),
    },    
  },
}))

const PostIntegration = defineNestedType(() => ({
  name: 'PostIntegration',
  fields: {
    name: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string',
      required: true
    }, 
    url: {
      type: 'string',
      required: true
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
  },
}))

const DocTopic = defineDocumentType(() => ({
  name: 'DocTopic',
  filePathPattern: 'doc-topics/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: {
      type: 'string',
      required: true
    },
    order: {
      type: 'number',
      required: true,
    },   
  },
  computedFields: {
    section: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/doc-topics\/([a-zA-Z_-]+)\/(.+)?/, '$1'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/doc-topics\/[a-zA-Z_-]+\/?/, ''),
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
    ltd: {
      type: 'string',
      required: true
    }, 
  },
}))

const Feature = defineDocumentType(() => ({
  name: 'Feature',
  filePathPattern: `${AppConfig.paths.features}/**/*.mdx`,
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
    featured: {
      type: 'boolean',
    },
    relatedGuides: {
      type: 'list',
      of: RelatedGuide,
    },
    category: {
      type: 'enum',
      options: [
        // 'Free plugin',
        // 'PRO plugin',
        'Standard',
      ],
      required: true,
    },
    order: {
      type: 'number',
      required: true,
    },
    image: {
      type: 'string',
    },
    icon: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.features + '/?'), ''),
    },    
  },
}))

const RelatedGuide = defineNestedType(() => ({
  name: 'RelatedGuide',
  fields: {
    topic: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      required: true
    },  
  },
}))

export default makeSource({
  contentDirPath: 'content',
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
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            // Each line node by default has `class="line"`.
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            // Each word node has no className by default.
            node.properties.className = ['word--highlighted']
          },
        },
      ],
    ],
  },
})