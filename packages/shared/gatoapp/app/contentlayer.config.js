import { defineNestedType, defineDocumentType } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import AppConfig from './app.config'
import AppConstants from './app.constants'

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
    urlPath: {
      type: 'string',
      resolve: (doc) => `${AppConfig.paths.blog}/${doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.blog + '/?'), '')}`,
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
    urlPath: {
      type: 'string',
      resolve: (doc) => `${AppConfig.paths.demoPosts}/${doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.demoPosts + '/?'), '')}`,
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
    urlPath: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath.replace(/pages\/?/, '')}`,
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
    urlPath: {
      type: 'string',
      resolve: (doc) => `/${AppConfig.paths.features}/${doc._raw.flattenedPath.replace(new RegExp('^' + AppConfig.paths.features + '/?'), '')}`,
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

const ContentLayerBaseConfig = {
  contentDirPath: 'content',
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
}

const DocConfig = (useFullPath) => ({
  name: 'Doc',
  filePathPattern: `${AppConfig.paths.docs}/**/*.mdx`,
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
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(`${AppConfig.paths.docs}/([a-zA-Z_-]+)/(.+)`), '$1'),
    },
    topicSlug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(`${AppConfig.paths.docs}/[a-zA-Z_-]+/([a-zA-Z_-]+)/(.+)`), '$1'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(`${AppConfig.paths.docs}/[a-zA-Z_-]+/([a-zA-Z_-]+)/`), ''),
    },
    urlPath: {
      type: 'string',
      resolve: (doc) => {
        const maybeURLPath = `/${ useFullPath ? doc._raw.flattenedPath : doc._raw.flattenedPath.replace(new RegExp(`${AppConfig.paths.docs}/?`), '') }`
        const topicSlug = doc._raw.flattenedPath.replace(new RegExp(`${AppConfig.paths.docs}/[a-zA-Z_-]+/([a-zA-Z_-]+)/(.+)`), '$1')
        if (topicSlug === AppConstants.implicitDocTopicSlug) {
          return maybeURLPath.replace(`/${AppConstants.implicitDocTopicSlug}/`, '/')
        }
        return maybeURLPath
      }
    },
  },
})

module.exports = {
  types: {
    BlogPost: BlogPost,
    DemoPost: DemoPost,
    Page: Page,
    Snippet: Snippet,
    Feature: Feature,
    DocTopic: DocTopic,
    PostIntegration: PostIntegration,
  },
  typeConfigs: {
    Doc: DocConfig,
  },
  config: {
    ContentLayerBaseConfig: ContentLayerBaseConfig
  }
}