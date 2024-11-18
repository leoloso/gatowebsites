import {
  getLemonSqueezyShopURL,
  getLemonSqueezyShopAnchorClassname,
} from "./lemonsqueezy";

// Watch out! Whenever calling this method, also
// load <InitializeShop />. That is because LemonSqueezy
// needs to re-load the "lemonsqueezy-button" state
// on each dynamic page fetch
export function getShopURL(url: string) {
  // Shop provider: Lemon Squeezy
  return getLemonSqueezyShopURL(url)
}

export function getShopAnchorClassname() {
  // Shop provider: Lemon Squeezy
  return getLemonSqueezyShopAnchorClassname()
}
