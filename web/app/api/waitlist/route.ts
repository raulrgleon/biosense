import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  role?: string;
};

const ROLES = new Set([
  "consumer",
  "investor",
  "researcher",
  "partner",
  "collaborator",
]);

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Payload;
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const role = ROLES.has(String(body.role)) ? String(body.role) : "consumer";

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Hook your provider here (Resend, Loops, HubSpot, a database).
  // This route only validates and acknowledges the lead.
  console.info("[waitlist]", { name, email, role, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
