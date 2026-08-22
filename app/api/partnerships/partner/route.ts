import { NextRequest, NextResponse } from "next/server";
import { partnerApplications } from "@/lib/models";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const organisation = String(body.organisation ?? "").trim();
  const contact_name = String(body.contactName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const category = String(body.category ?? "").trim() || null;

  if (!organisation || !contact_name || !email || !message) {
    return NextResponse.json(
      { error: "Organisation, contact name, email and message are required." },
      { status: 400 }
    );
  }

  partnerApplications.insert({ organisation, contact_name, email, category, message, status: "new" });
  return NextResponse.json({ ok: true });
}
