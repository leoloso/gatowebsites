// Used for metadataBase and wherever the domain is needed.
// First check if env var from Vercel is defined. If not, from Netlify.
// If not, replicate the default response from Next.js
export const DOMAIN = 
  // @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  process.env.VERCEL_URL ? process.env.VERCEL_URL :
  (
    // @see https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
    process.env.URL ? process.env.URL :
    `http://localhost:${process.env.PORT || 3000}`
  )