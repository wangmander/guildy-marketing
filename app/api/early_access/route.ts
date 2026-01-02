import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  interviewGmail: string;
  field: string;
  heardFrom: string;
  fullName?: string | null;
};

function json(status: number, body: any) {
  return new NextResponse(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

// ✅ lets you test the endpoint in a browser
export async function GET() {
  return json(200, { ok: true, route: "/api/early_access" });
}

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) return json(500, { ok: false, error: "Missing SUPABASE_URL" });
    if (!serviceRoleKey) return json(500, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

    const body = (await req.json()) as Payload;

    const interviewGmail = typeof body.interviewGmail === "string" ? body.interviewGmail : "";
    const field = typeof body.field === "string" ? body.field : "";
    const heardFrom = typeof body.heardFrom === "string" ? body.heardFrom : "";
    const fullName = typeof body.fullName === "string" ? body.fullName : null;

    if (!interviewGmail || !field || !heardFrom) {
      return json(400, { ok: false, error: "Missing required fields." });
    }

    const interview_gmail = normalizeEmail(interviewGmail);
    if (!interview_gmail.endsWith("@gmail.com")) {
      return json(400, { ok: false, error: "Must be a @gmail.com address." });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;
    const referrer = req.headers.get("referer") ?? null;

    // NOTE: table name must be EXACTLY this in Supabase
    const url = `${supabaseUrl}/rest/v1/early_access_requests`;

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: serviceRoleKey,
        authorization: `Bearer ${serviceRoleKey}`,
        prefer: "return=minimal",
      },
      body: JSON.stringify([
        {
          interview_gmail,
          field,
          heard_from: heardFrom,
          full_name: fullName?.trim() || null,
          status: "pending",
          ip,
          user_agent: userAgent,
          referrer,
        },
      ]),
    });

    if (resp.status === 409) return json(200, { ok: true, deduped: true });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      return json(500, { ok: false, error: "Supabase insert failed", details: text || resp.statusText });
    }

    return json(200, { ok: true });
  } catch (e: any) {
    return json(500, { ok: false, error: "Server error", details: e?.message ?? String(e) });
  }
}
