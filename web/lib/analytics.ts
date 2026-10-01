/**
 * Optional analytics. Disabled by default.
 * To enable later, render <Analytics /> from a consented provider
 * and set NEXT_PUBLIC_ANALYTICS_ID. Do not load trackers without consent.
 */
export function analyticsEnabled() {
  return Boolean(process.env.NEXT_PUBLIC_ANALYTICS_ID);
}
