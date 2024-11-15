import { DOMAIN } from "@gato/data/env/domain";
import AppConfig from '@gato/app/app.config'

export function maybeAddDomain(urlOrPath: string) {
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) {
    return urlOrPath;
  }
  return `${DOMAIN}${urlOrPath}`
}

export function getCDNURL(path: string) {
  return `${AppConfig.domains.cdn}${path}`
}