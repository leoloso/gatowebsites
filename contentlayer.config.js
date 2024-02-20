import { defineNestedType, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import AppConfig from './app/app.config'

const Update = defineDocumentType(() => ({
  name: 'Update',
  filePathPattern: `${AppConfig.paths.changelog}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(AppConfig.paths.changelog + '/?'), ''),
    },    
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `${AppConfig.paths.blog}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
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
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(AppConfig.paths.blog + '/?'), ''),
    },    
  },
}))

const Guide = defineDocumentType(() => ({
  name: 'Guide',
  filePathPattern: `${AppConfig.paths.guides}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
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
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(AppConfig.paths.guides + '/?'), ''),
    },    
  },
}))

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `${AppConfig.paths.docs}/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    summary: {
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
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(AppConfig.paths.docs + '/?'), ''),
    },    
  },
}))

const DocTopic = defineDocumentType(() => ({
  name: 'DocTopic',
  filePathPattern: `${AppConfig.paths.docTopics}/**/*.mdx`,
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
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(new RegExp(AppConfig.paths.docTopics + '/?'), ''),
    },    
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Update, Post, Guide, Doc, DocTopic],
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