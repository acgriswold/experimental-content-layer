import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

export const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string' }
  }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    coverImage: { type: 'string' },
    ogImage: { type: 'string' },
    excerpt: { type: 'string' },
    author: {
      type: 'nested',
      of: Author,
    }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: '_posts', documentTypes: [Post] })
