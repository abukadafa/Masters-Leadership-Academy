import { NextRequest, NextResponse } from "next/server";
import { corporateTrainingRequests } from "@/lib/models";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const company = String(body.company ?? "").trim();
  const contact_name = String(body.contactName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const details = String(body.details ?? "").trim();
  const phone = String(body.phone ?? "").trim() || null;
  const team_size = String(body.teamSize ?? "").trim() || null;
  const focus_areas = String(body.focusAreas ?? "").trim() || null;
  const timeline = String(body.timeline ?? "").trim() || null;

  if (!company || !contact_name || !email || !details) {
    return NextResponse.json(
      { error: "Company, contact name, email and project details are required." },
      { status: 400 }
    );
  }

  corporateTrainingRequests.insert({
    company,
    contact_name,
    email,
    phone,
    team_size,
    focus_areas,
    timeline,
    details,
    status: "new",
  });
  return NextResponse.json({ ok: true });
}
