import type { NextApiRequest, NextApiResponse } from "next";

type Payload = {
  interviewGmail: string;
  field: string;
  heardFrom: string;
  fullName?: string | null;
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // This lets you test in browser: /api/early_access should return 200 JSON
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, route: "/api/early_access" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) return res.status(500).json({ ok: false, error: "Missing SUPABASE_URL" });
    if (!serviceRoleKey) return res.status(500).json({ ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY" });

    const body = req.body as Payload;

    const interviewGmail = typeof body.interviewGmail === "string" ? body.interviewGmail : "";
    const field = typeof body.field === "string" ? body.field : "";
    const heardFrom = typeof body.heardFrom === "string" ? body.heardFrom : "";
    const fullName = typeof body.fullName === "string" ? body.fullName : null;

    if (!interviewGmail || !field || !heardFrom) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const interview_gmail = normalizeEmail(interviewGmail);
    if (!interview_gmail.endsWith("@gmail.com")) {
      return res.status(400).json({ ok: false, error: "Must be a @gmail.com address." });
    }

    const ip =
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ?? null;
    const userAgent = (req.headers["user-agent"] as string | undefined) ?? null;
    const referrer = (req.headers["referer"] as string | undefined) ?? null;

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

    if (resp.status === 409) return res.status(200).json({ ok: true, deduped: true });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      return res.status(500).json({ ok: false, error: "Supabase insert failed", details: text || resp.statusText });
    }

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: "Server error", details: e?.message ?? String(e) });
  }
}
