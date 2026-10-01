# BioSense marketing site

Premium bilingual landing page for BioSense (`biosense.dev`).

The product is in development. The site never claims medical approval, clinical accuracy, or commercial availability.

## Local

```bash
npm install
npm run dev
```

Open http://127.0.0.1:3000 — it redirects to `/en` or `/es`.

## Copy

Edit all visible text in:

- `messages/en.json`
- `messages/es.json`

Keep both files in sync.

## Concept images

Replace the SVG placeholders inside `components/Showcase.tsx` and `components/Hero.tsx`.
Add files to `public/concepts/` and point `<img>` or `next/image` at them.
Keep a “Concept” label on any product visual.

## Waitlist backend

`app/api/waitlist/route.ts` validates the form and logs the lead.

Connect it to a provider by replacing the `console.info` block with Resend, Loops, HubSpot, or a database insert.

## Deploy

Coolify builds the repo `raulrgleon/biosense` with the root Dockerfile.
The Next.js app lives in `web/`. **Ports Exposes: 3000.**
