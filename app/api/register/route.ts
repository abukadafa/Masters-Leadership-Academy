import { NextRequest, NextResponse } from "next/server";
import { registrationInterests } from "@/lib/models";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim() || null;
  const interest = String(body.interest ?? "").trim() || null;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  registrationInterests.insert({ name, email, phone, interest, status: "new" });
  return NextResponse.json({ ok: true });
}
