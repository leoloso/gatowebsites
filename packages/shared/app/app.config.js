module.exports = {
  domains: {
    cdn: process.env.NEXT_PUBLIC_GATOAPP_CDN_DOMAIN ? process.env.NEXT_PUBLIC_GATOAPP_CDN_DOMAIN : 'https://d2nmpy6pnude6z.cloudfront.net',
  },
  meta: {
    name: process.env.NEXT_PUBLIC_GATOAPP_NAME
  },
  emails: {
    info: process.env.NEXT_PUBLIC_GATOAPP_EMAIL_INFO
  },
}