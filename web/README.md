# BioSense marketing site

Premium bilingual landing page for a health-technology project still in research and development.

BioSense is **not** a finished commercial medical device. This site must never claim FDA approval, clinical validation, diagnosis, treatment, or cure.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- next-intl (`/en`, `/es`)
- Framer Motion
- Lucide (available; used sparingly)

## Local

```bash
npm install
npm run dev
```

Open http://127.0.0.1:3000 — locale detection sends you to `/en` or `/es`.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Translations

All visible copy lives in:

- `messages/en.json`
- `messages/es.json`

Keep the keys identical. Lists (signals, roadmap, FAQ, interests) are driven from `lib/content.ts`.

Language is URL-based (`/en`, `/es`) with browser detection and a cookie via next-intl.

## Product images

Place final renders in `public/images/biosense/`:

- `biosense-hero.webp`
- `biosense-system.webp`
- `biosense-under-skin.webp`
- `lifestyle.webp`

Until those files exist, `ProductVisual` falls back to abstract concept placeholders. Never use stock medical photography.

## Waitlist

`POST /api/waitlist` validates first name, email, interest and consent.

If `WAITLIST_PROVIDER` is not configured, the API returns `{ ok: false, error: "waitlist_not_configured" }` and the UI does not pretend the signup was stored.

Hook a provider in `lib/waitlist.ts` → `submitWaitlist`. Do not persist personal data to a local file.

Supported integration path: Supabase, Resend, ConvertKit, Mailchimp, or a custom API.

Do not write personal data to a local file.

## Metadata

Edit `meta` in the translation files and `generateMetadata` in `app/[locale]/layout.tsx`.

Sitemap: `app/sitemap.ts`. Robots: `app/robots.ts`.

## Analytics

Disabled by default. See `lib/analytics.ts`. Do not add Google Analytics without a consent path.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional. Empty = no tracker. |

No secrets belong on this marketing app.

## Deploy

Coolify builds `raulrgleon/biosense` with the root Dockerfile (`web/` app).

**Ports Exposes: 3000.**

## Disclaimer

Concepts, specifications and capabilities on this website may change. BioSense is not currently an approved medical device and is not intended to diagnose, treat, cure or prevent disease.
