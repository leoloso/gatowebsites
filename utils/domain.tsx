import { DOMAIN } from "@/data/env/domain";

export function maybeAddDomain(urlOrPath: string) {
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) {
    return urlOrPath;
  }
  return `${DOMAIN}${urlOrPath}`
}
