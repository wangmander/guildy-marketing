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
    const data = (await upstream
      .json()
      .catch(() => ({ error: "Try again later" }))) as {
      prep?: unknown
      error?: string
    }

    // On a successful generation, persist the prep on the product side so
    // signup can auto-load it. Best-effort: a failure here returns
    // handoffId: null and the client falls back to ?source attribution.
    if (upstream.ok && data.prep) {
      const handoffId = await createHandoff(body, data.prep)
      return NextResponse.json({ prep: data.prep, handoffId }, { status: 200 })
    }

    return NextResponse.json(data, { status: upstream.status })
  } catch {
    return NextResponse.json({ error: "Try again later" }, { status: 503 })
  }
}

// Persist { jd, resumeText, prepOutput } on the product side and return the
// handoff uuid. Capped at 5s so prep delivery is never delayed by this
// secondary call; any failure (timeout, 5xx, network, 404 before the
// product endpoint ships) is logged and degrades to null.
async function createHandoff(
  body: unknown,
  prepOutput: unknown
): Promise<string | null> {
  const { jd, resumeText } = (body ?? {}) as {
    jd?: unknown
    resumeText?: unknown
  }
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)
  try {
    const res = await fetch(`${APP_ORIGIN}/api/unauth-handoff/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jd, resumeText, prepOutput }),
      signal: controller.signal,
    })
    if (!res.ok) {
      console.error(`[quick-prep] handoff create failed: ${res.status}`)
      return null
    }
    const data = (await res.json().catch(() => ({}))) as { id?: unknown }
    return typeof data.id === "string" ? data.id : null
  } catch (err) {
    console.error("[quick-prep] handoff create error:", err)
    return null
  } finally {
    clearTimeout(timeout)
  }
}
