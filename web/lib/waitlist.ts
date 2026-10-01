export const INTERESTS = [
  "consumer",
  "researcher",
  "engineer",
  "investor",
  "partner",
  "media",
  "other",
] as const;

export type Interest = (typeof INTERESTS)[number];

export type WaitlistPayload = {
  firstName: string;
  email: string;
  interest: Interest;
  consent: boolean;
};

export type WaitlistResult = { ok: true } | { ok: false; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateWaitlist(input: Partial<WaitlistPayload>): WaitlistPayload | { error: string } {
  const firstName = String(input.firstName || "").trim();
  const email = String(input.email || "").trim().toLowerCase();
  const interest = INTERESTS.includes(input.interest as Interest)
    ? (input.interest as Interest)
    : "consumer";
  const consent = Boolean(input.consent);

  if (!firstName || !EMAIL.test(email) || !consent) {
    return { error: "invalid" };
  }

  return { firstName, email, interest, consent };
}

/**
 * Production hook.
 * Replace `submitWaitlist` with Supabase, Resend, ConvertKit, Mailchimp, or a custom API.
 * Do not persist personal data to a local file.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistResult> {
  console.info("[waitlist]", {
    firstName: payload.firstName,
    email: payload.email,
    interest: payload.interest,
    at: new Date().toISOString(),
  });
  return { ok: true };
}
