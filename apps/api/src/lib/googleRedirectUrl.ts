export function googleRedirectUrl() {
  return `${process.env.API_ORIGIN}${process.env.API_BASE_PATH}/auth/google/callback`;
}
