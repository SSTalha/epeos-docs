# Epeos marketing & documentation

A standalone Next.js App Router site. Built with TypeScript, React Server Components, local Inter fonts, and plain CSS. The existing frontend and backend are unchanged.

## Run

Use Node.js 22+ and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3001. The separate port avoids the product frontend on port 3000. No backend or environment variables are required.

```sh
npm run build
npm start
```

## Structure

- `src/app`: App Router pages, root layout, metadata, icon, and styles.
- `src/components`: shared navigation/footer, interactive ontology, accessible platform tabs, docs navigation, and project brief form.
- `src/lib/documentation.ts`: typed documentation content sourced from the existing platform repositories and `../foundry.md`.
- `src/proxy.ts`: per-request CSP nonce and policy.
- `next.config.ts`: baseline response security headers.
- `public/fonts`: local font and its license; no third-party font calls.

Routes: `/`, `/contact`, `/docs`, and seven guides under `/docs/[slug]`. Unknown guides return 404.

## Content and contact

The marketing page distinguishes current structured/application-data capabilities from the planned unstructured-data direction. There are no invented customer logos, metrics, compliance badges, or testimonials. The ontology visual is explicitly illustrative and does not connect to live enterprise data.

The contact form prepares a project brief locally. It does **not** send or store leads. Copy and download are functional. To enable a user-initiated email draft, copy `.env.example` to `.env.local`, set `CONTACT_EMAIL` to the real public contact mailbox, and restart/rebuild. An actual lead intake service, calendar, or CRM integration requires a separate implementation; do not describe this form as sending a request.

## Security

Next.js, React, and other dependencies are pinned, with the lockfile committed as part of the project. Run `npm audit` regularly and apply new patches. A clean audit only means no advisories were reported by that registry at that time; it cannot guarantee zero vulnerabilities.

Production script CSP uses a fresh nonce and strict-dynamic, without unsafe-inline or unsafe-eval. The layout intentionally renders dynamically so framework scripts receive the request nonce. Styles are external or nonce-protected. No server actions, API endpoints, authentication credentials, trackers, external resources, remote images, or user HTML rendering are introduced.

Headers include frame denial, MIME sniffing protection, referrer policy, restricted browser permissions, and HSTS. Production requires HTTPS. Reverse proxies must preserve CSP and other headers; avoid public HTML caching because nonces are request-specific. Static export is intentionally unsupported. The contact form's mailto address is public configuration, never a secret.

## Validation

```sh
npm run typecheck
npm run build
npm run audit
```

Interactive checks should cover object selection, all platform tabs including arrow/Home/End keys, small-screen navigation and Escape, docs routes and 404s, and brief generation/copy/download. Check production CSP in a browser after changing framework versions or adding scripts.

## Design

Inspired by the editorial scale, technical diagrams, and disciplined sections of Palantir Foundry, with an original Epeos palette and layout. `../apple-design.md` informs platform typography, immediate input feedback, layered navigation, and reduced-motion, reduced-transparency, and increased-contrast preferences. No gesture-driven animation or motion dependency is needed.
