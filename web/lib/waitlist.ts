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
 * Configurable waitlist adapter.
 *
 * Production:
 *   Set WAITLIST_PROVIDER to a real backend (resend | convertkit | mailchimp | supabase | custom)
 *   and implement that case below. Do not persist personal data to a local file.
 *
 * Development / unconfigured:
 *   Returns { ok: false, error: "waitlist_not_configured" } so the UI does not pretend
 *   the signup was stored.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistResult> {
  const provider = process.env.WAITLIST_PROVIDER?.trim().toLowerCase();

  if (!provider) {
    return { ok: false, error: "waitlist_not_configured" };
  }

  switch (provider) {
    // TODO: wire a production provider. Example:
    // case "resend": return sendWithResend(payload);
    // case "convertkit": return sendWithConvertKit(payload);
    default:
      void payload;
      return { ok: false, error: "waitlist_not_configured" };
  }
}
