// Product app origin for CLIENT-SIDE calls (the CORS-enabled share GET and the
// signup link). Server routes use the server-only APP_ORIGIN env; this is its
// public mirror so preview deployments can point the browser at a non-prod app
// host instead of hardcoding production.
export const APP_ORIGIN =
  process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.guildy.ai"
