import { visit } from 'unist-util-visit'
import { Root } from 'hast';

export const preProcess = () => (tree: Root) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children

      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0].value
    }
  })
}

export const postProcess = () => (tree: Root) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['raw'] = node.raw
      // console.log(node) here to see if you're getting the raw text
    }
  })
}
