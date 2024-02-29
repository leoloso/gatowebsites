import AppSettings from "@/app/app.settings"

export function getLemonSqueezyShopURL(url: string) {
  if (AppSettings.useLemonSqueezyOverlay) {
    return `${url}?embed=1&logo=0&desc=1&dark=1`
  }
  return url
}
