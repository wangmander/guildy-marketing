import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) return json(500, { ok: false, error: "Missing SUPABASE_URL" });
    if (!serviceRoleKey) return json(500, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const body = (await req.json()) as Payload;

    const interviewGmail = typeof body.interviewGmail === "string" ? body.interviewGmail : "";
    const field = typeof body.field === "string" ? body.field : "";
    const heardFrom = typeof body.heardFrom === "string" ? body.heardFrom : "";
    const fullName = typeof body.fullName === "string" ? body.fullName : null;

    if (!interviewGmail || !field || !heardFrom) {
      return json(400, { ok: false, error: "Missing required fields." });
    }

    const interview_gmail = normalizeEmail(interviewGmail);

    // matches your UI expectation: Gmail address
    if (!interview_gmail.endsWith("@gmail.com")) {
      return json(400, { ok: false, error: "Must be a Gmail address." });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;
    const referrer = req.headers.get("referer") ?? null;

    const { error } = await supabaseAdmin.from("early_access_requests").insert({
      interview_gmail,
      field,
      heard_from: heardFrom,
      full_name: fullName?.trim() || null,
      status: "pending",
      ip,
      user_agent: userAgent,
      referrer,
    });

    if (error) {
      const msg = (error as any)?.message ?? String(error);
      const lower = msg.toLowerCase();
      const isDuplicate = lower.includes("duplicate") || lower.includes("unique");

      // If they submit twice, treat it as success (your unique index catches it)
      if (isDuplicate) return json(200, { ok: true, deduped: true });

      return json(500, { ok: false, error: "Supabase insert failed", details: msg });
    }

    return json(200, { ok: true });
  } catch (e: any) {
    return json(500, { ok: false, error: "Server error", details: e?.message ?? String(e) });
  }
}
