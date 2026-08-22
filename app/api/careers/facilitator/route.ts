import { NextRequest, NextResponse } from "next/server";
import { facilitatorApplications } from "@/lib/models";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const expertise = String(body.expertise ?? "").trim();
  const years_experience = String(body.yearsExperience ?? "").trim() || null;
  const linkedin = String(body.linkedin ?? "").trim() || null;
  const availability = String(body.availability ?? "").trim() || null;

  if (!name || !email || !expertise) {
    return NextResponse.json(
      { error: "Name, email and area of expertise are required." },
      { status: 400 }
    );
  }

  facilitatorApplications.insert({
    name,
    email,
    expertise,
    years_experience,
    linkedin,
    availability,
    status: "new",
  });
  return NextResponse.json({ ok: true });
}
