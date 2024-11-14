import { DOMAIN } from "@/data/env/domain";
import AppConfig from '@/app/app.config'

export function maybeAddDomain(urlOrPath: string) {
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) {
    return urlOrPath;
  }
  return `${DOMAIN}${urlOrPath}`
}

export function getCDNURL(path: string) {
  return `${AppConfig.domains.cdn}${path}`
}