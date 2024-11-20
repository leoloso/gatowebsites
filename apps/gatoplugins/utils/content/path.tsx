// Get the plugin slug from the folder name
export function getPluginSlugFromPageScriptFile(file: string) {
  return file.replace(/^.*\/app\/\(docs\)\/docs\/([\/a-zA-Z0-9_-]+)\/.+$/, '$1')
}
