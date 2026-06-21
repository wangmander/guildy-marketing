import { NextResponse } from "next/server"

// Same-origin proxy for minting a public share link from an unauth prep.
//
// The browser posts the job description here; this route forwards it
// server-side to the product app's share endpoint, which regenerates a
// JD-only teaser and returns a public share id + url. The create endpoint
// has no CORS (server-to-server only), so the hop stays on the server, same
// pattern as the quick-prep proxy.
//
// APP_ORIGIN defaults to production; override via env for previews.
const APP_ORIGIN = process.env.APP_ORIGIN ?? "https://app.guildy.ai"

// The share create runs a single Haiku pass (~20s) to build the teaser.
// 60s ceiling matches the quick-prep proxy and the upstream maxDuration.
export const maxDuration = 60

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  // Send ONLY the JD. The resume and generated prep are resume-tainted and
  // must never be stored or teased, so re-build the payload here rather than
  // forwarding whatever the client sent.
  const { jd } = (body ?? {}) as { jd?: unknown }
  if (typeof jd !== "string" || jd.trim().length === 0) {
    return NextResponse.json(
      { error: "Missing job description" },
      { status: 400 }
    )
  }

  try {
    const upstream = await fetch(`${APP_ORIGIN}/api/share/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jd }),
    })
    const data = (await upstream
      .json()
      .catch(() => ({ error: "Try again later" }))) as {
      id?: string
      url?: string
      error?: string
    }
    return NextResponse.json(data, { status: upstream.status })
  } catch {
    return NextResponse.json({ error: "Try again later" }, { status: 503 })
  }
}
