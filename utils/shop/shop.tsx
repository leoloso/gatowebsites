import {
  getLemonSqueezyShopURL,
  getLemonSqueezyShopAnchorClassname,
} from "./lemonsqueezy";

export function getShopURL(url: string) {
  // Shop provider: Lemon Squeezy
  return getLemonSqueezyShopURL(url)
}

export function getShopAnchorClassname() {
  // Shop provider: Lemon Squeezy
  return getLemonSqueezyShopAnchorClassname()
}
