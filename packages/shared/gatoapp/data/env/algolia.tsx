export const ALGOLIA_API_CREDENTIALS = {
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '',
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  searchAPIKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
  searchAdminKey: process.env.ALGOLIA_SEARCH_ADMIN_KEY || ''
} 