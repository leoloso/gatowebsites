import { ADMIN_USER_API_KEY } from "gatoapp/data/env/admin";

export function isAdminUser(apiKey: string) {
  return apiKey === ADMIN_USER_API_KEY
}
