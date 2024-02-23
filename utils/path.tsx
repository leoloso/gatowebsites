// Get the page slug from the folder name
export function getPageSlugFromPageScriptFile(pageFile: string) {
  return pageFile.replace(/^.*\/([a-zA-Z0-9_-]+)\/page\.[a-z]+$/, '$1')
}
