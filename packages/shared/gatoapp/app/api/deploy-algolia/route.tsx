import { algoliasearch, MultipleBatchRequest } from "algoliasearch";
import { ALGOLIA_API_CREDENTIALS } from 'gatoapp/data/env/algolia'
import { isAdminUser } from "gatoapp/utils/admin"
import { SearchObject, Sections } from "gatoapp/components/search/algolia"

// Remove all GraphQL queries from the Algolia index
function removeUnneededContent(content: string): string {
  return content
    // Remove all ``` except the last one
    .replace(/```[a-zA-Z_-]+\n[^```]*```/ig,'')
    // Remove the last ```
    .replace(/```[a-zA-Z_-]+\n.*```/ig,'')
    // Remove <Banner> and </Banner>
    .replace(/<Banner[^>]*>/g,'')
    .replace(/<\/Banner[^>]*>/g,'')
}

export function getStructuredDataObject(
  title: string,
  description: string,
  urlPath: string,
  slug: string,
  content: string,
  // List ALL sections for all apps: Gato GraphQL + Gato Plugins
  section: Sections.Blog
    | Sections.Changelog
    | Sections.Comparisons
    | Sections.ExtensionsReference
    | Sections.Guides
    | Sections.SchemaTutorial
    | Sections.QueryLibrary
    | Sections.ArchitectureDocs
    | Sections.Extensions
    | Sections.Features
    | Sections.Demos
    
    // Gato Plugins
    | Sections.Docs
    | Sections.Plugins
): SearchObject {
  // return an object to be added to Algolia.
  return {
    // objectID must be unique and consistent on each build
    objectID: urlPath,
    title: title,
    description: description,
    urlPath: urlPath,
    slug: slug,
    content: removeUnneededContent(content),
    section: section
  }
}

/**
 * @see https://www.algolia.com/doc/libraries/javascript/v5/methods/search/multiple-batch/?client=javascript
 */
function transformSearchObjectToBatchRequest(searchObject: SearchObject): MultipleBatchRequest {
  return {
    action: 'addObject',
    indexName: ALGOLIA_API_CREDENTIALS.indexName,
    body: {...searchObject}
  }
}

export function assertCanExecuteGET(request: Request): Response|undefined {
  const url = request.url || ''
  const { searchParams } = new URL(url);
  const apiKey = searchParams.get('apiKey');
  if (!apiKey || typeof apiKey !== 'string' || !isAdminUser(apiKey)) {
    return new Response(`⛔️ You are not allowed here`, { status: 500 })
  }
};

export async function executeGET(request: Request, searchObjects: SearchObject[]) {
  try {
    const client = algoliasearch(
      ALGOLIA_API_CREDENTIALS.appId,
      ALGOLIA_API_CREDENTIALS.searchAdminKey
    )
    const algoliaSearchIndexResponse = await client.multipleBatch({
      requests: searchObjects.map((searchObject) => transformSearchObjectToBatchRequest(searchObject))
    });
    
    return new Response(`⭐️⭐️ Successfully added ${algoliaSearchIndexResponse.objectIDs.length} records to Algolia search. ⭐️⭐️`)
  } catch (err) {
    console.error(err)
  }
};