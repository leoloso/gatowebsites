import { ADMIN_USER_API_KEY } from "@gato/data/env/admin";

export function isAdminUser(apiKey: string) {
  return apiKey === ADMIN_USER_API_KEY
}
