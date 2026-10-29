# Verification

Checked locally on October 26, 2026 against the production build using headless Google Chrome and Playwright. Browser QA tooling was installed outside the project; it adds no shipped dependencies.

- `npm run build`: passed (Next.js 16.4.3).
- `npm run typecheck`: passed.
- `npm run dev`: HTTP 200, working tab interaction, and no browser runtime/CSP errors. Development-only style and eval permissions support the Next.js debug overlay; production retains the strict policy.
- `npm run audit`: zero known vulnerabilities, including development dependencies, at verification time.
- Home, contact, docs overview, and all seven guides: HTTP 200.
- Unknown guide and unknown top-level page: HTTP 404.
- Home, docs, and contact: no horizontal overflow at 320, 390, 560, 768, 1024, and 1920px where checked; 1440px desktop also reviewed visually.
- Desktop and mobile full-page screenshots reviewed.
- Object selection updates the explorer and selected state.
- Platform tabs switch content; Left, Right, Home, and End keys work.
- Mobile menu opens, closes on navigation, and dismisses with Escape.
- Project brief generates a summary, downloads a text file, and copies through the clipboard API.
- HTML-like form input remains escaped text; no user scripts are inserted.
- axe WCAG 2 A/AA and WCAG 2.1 AA scans: zero violations on all four desktop platform states, the generated contact brief, and mobile security documentation. Automated checks are not a complete accessibility evaluation.
- Production CSP includes per-request script nonces and strict-dynamic, with no unsafe-inline or unsafe-eval.
- Frame denial and security response headers verified; X-Powered-By omitted.
- No unexpected browser runtime or CSP errors. Visiting the two intentional missing routes produces expected 404 resource messages.

The brief form does not send a lead to a server. Email draft behavior requires a real `CONTACT_EMAIL`; external email delivery, production hosting, and real product/backend integrations were not part of this verification. Dependency scans cannot guarantee the absence of vulnerabilities.
