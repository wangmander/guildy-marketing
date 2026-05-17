import { NextResponse } from "next/server"

// Same-origin proxy for the unauthenticated Quick Prep generation.
//
// The browser on guildy.ai posts here; this route forwards server-side
// to the product app's endpoint. Keeping the cross-origin hop on the
// server means the browser only ever talks to its own origin, so there
// is no CORS preflight and the product endpoint needs no CORS headers.
//
// APP_ORIGIN defaults to production; override via env for previews.
const APP_ORIGIN = process.env.APP_ORIGIN ?? "https://app.guildy.ai"

// Quick Prep is a single Haiku pass, typically ~20s. 60s ceiling matches
// the upstream route's maxDuration.
export const maxDuration = 60

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  try {
    const upstream = await fetch(
      `${APP_ORIGIN}/api/generate-quick-prep-unauth`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    )
    const data = await upstream
      .json()
      .catch(() => ({ error: "Try again later" }))
    return NextResponse.json(data, { status: upstream.status })
  } catch {
    return NextResponse.json({ error: "Try again later" }, { status: 503 })
  }
}
