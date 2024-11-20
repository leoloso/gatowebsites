import { notFound, redirect } from 'next/navigation'
import { getGroupDocuments, sortDocuments } from '@/utils/content/document'
import { getPluginSlugFromPageScriptFile } from '@/utils/content/path';

const pluginSlug = getPluginSlugFromPageScriptFile(__filename)

// Redirect to the first item on the docs collection
export default function RedirectToFirstDocItem() {

  // Sort docs (this already takes into account the DocTopic)
  const docs = getGroupDocuments(pluginSlug).sort(sortDocuments);

  if (docs.length === 0) notFound()

  // Redirect to the first one
  const doc = docs[0];
  redirect(doc.urlPath)
}
