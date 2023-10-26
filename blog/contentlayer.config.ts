import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

import rehypePrettyCode, {type Options} from 'rehype-pretty-code'

export const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: 'string', required: true },
    picture: { type: 'string' }
  }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
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


const mdxOptions: Options = {
  theme: {
    light: "github-light",
    dark: "github-dark"
  },
  defaultLang: {
    block: "typescript",
    inline: "typescript"
  }
}

export default makeSource({ 
  contentDirPath: '_posts', 
  documentTypes: [Post],
  markdown: {
    rehypePlugins: [
      [rehypePrettyCode, mdxOptions],
     
    ],
  },
})
