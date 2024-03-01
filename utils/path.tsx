// Get the page slug from the folder name
// It can include a parent folder, such as contact/success.mdx
export function getPageSlugFromPageScriptFile(pageFile: string) {
  return pageFile.replace(/^.*\/app\/\(default\)\/([\/a-zA-Z0-9_-]+)\/page\.[a-z]+$/, '$1')
}
