import { DOMAIN } from "gatoapp/data/env/domain";
import { useAppConfigProvider } from 'gatoapp/app/appconfig-provider'

export function maybeAddDomain(urlOrPath: string) {
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) {
    return urlOrPath;
  }
  return `${DOMAIN}${urlOrPath}`
}

export function getCDNURL(path: string) {
  const { config: AppConfig } = useAppConfigProvider()
  return `${AppConfig.domains.cdn}${path}`
}