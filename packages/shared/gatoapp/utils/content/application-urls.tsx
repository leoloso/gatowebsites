import { DOMAIN } from 'gatoapp/data/env/domain'

export function getURL(entity: { urlPath: string }) {
  return `${DOMAIN}${entity.urlPath}`
}
