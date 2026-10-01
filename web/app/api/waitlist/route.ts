import { NextResponse } from "next/server";
import { submitWaitlist, validateWaitlist } from "@/lib/waitlist";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = validateWaitlist(body);

  if ("error" in parsed) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const result = await submitWaitlist(parsed);
  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
