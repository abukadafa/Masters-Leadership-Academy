# PROJECT_AUDIT.md — Masters Leadership Academy

Last updated: 2026-08-22, following a full-repository audit and remediation pass.

This is the single source of truth for the current state of the codebase. Read this before
making architectural changes. The app is small (~5,000 LOC) and still pre-launch, so one
consolidated document is proportionate — split it into ARCHITECTURE.md / DATABASE_SCHEMA.md /
API_CONTRACTS.md / DEPLOYMENT.md etc. only once the app has grown enough that a single file
becomes unwieldy.

## 1. What this app is

A Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind v4 marketing site and lead-capture
backend for Masters Leadership Academy, a Nigerian company offering seminars/symposiums,
conferences, and technical services (per `reference/registration-certificate.pdf`, the sole
source of verified legal facts — see `README.md`).

**Hard content rule, inherited from the original brief and still in force:** no staff names,
programme names, testimonials, client logos, statistics, or media may be fabricated anywhere in
the app, including seed/demo data. Missing real content uses the existing CMS-placeholder
pattern (`components/CMSPlaceholder.tsx`, `components/EmptyState.tsx`, `components/CmsGridSlot.tsx`)
instead.

## 2. Architecture as it actually exists

- **Frontend:** Next.js App Router, all pages under `app/`. Public marketing pages
  (`/`, `/about`, `/services`, `/programmes`, `/contact`, etc.), 6 public lead-capture forms,
  and an `/admin` section gated by `app/admin/(dashboard)/layout.tsx`.
- **Styling:** Tailwind v4 with a hand-tuned design system (deep teal ink, copper accent, warm
  paper background — see `app/globals.css`). Fonts: Fraunces / Inter / IBM Plex Mono via
  `next/font/google`.
- **Auth:** Stateless HMAC-signed session tokens (`lib/auth.ts`, Web Crypto API — Edge-runtime
  safe, used in `proxy.ts`). Password hashing is scrypt + timing-safe compare (`lib/password.ts`,
  Node-only, never imported from `proxy.ts`). Session cookie is httpOnly, sameSite=lax, secure
  in production, 8-hour TTL.
- **Authorization:** Role-based (`lib/permissions.ts`). 7 roles defined in `lib/auth.ts`; 5 can
  reach the admin dashboard. Section-level access control (`SECTION_ACCESS`) is enforced
  server-side in every admin page, not just hidden in the UI.
- **Database:** SQLite via Node's built-in `node:sqlite` (`lib/db.ts`), file-based, WAL mode.
  7 tables: `users` + one table per lead-capture form + `push_subscriptions`. Schema is created
  idempotently on first connection. `lib/models.ts` provides a typed query layer; a small
  `makeTable<T>()` factory removes repetition across the 6 submission tables.
- **API:** 9 route handlers under `app/api/`, all POST, all following the same
  parse → honeypot check → validate → rate-limit → insert shape (harmonized in this pass —
  see §4).
- **Edge middleware:** `proxy.ts` (Next 16's renamed `middleware.ts` — verified against
  `node_modules/next/dist/docs`) handles HTTPS redirect, admin route protection, and baseline
  security headers (CSP, X-Frame-Options, HSTS, Permissions-Policy) on every request.
- **PWA:** manifest + service worker (`public/sw.js`) with a documented, deliberately
  conservative caching strategy (network-first for pages, cache-first for static assets).
  Push *subscriptions* are collected and stored; push *sending* is explicitly not implemented
  yet (documented in both `lib/models.ts` and `public/sw.js`).
- **i18n:** `lib/i18n/` with English, French, Arabic dictionaries; `lib/locale.ts` handles
  locale/currency/timezone switching client-side.

## 3. Audit finding: this is not a multi-agent-conflict codebase

The master remediation brief this audit was run against assumes heavy conflict between
successive AI agents (duplicate components, competing implementations, inconsistent naming).
**That assumption didn't hold.** This repository is small, was evidently built in one coherent
pass, and shows no duplicate components, no duplicate API routes, no duplicate database tables,
and consistent naming/response conventions throughout. TypeScript compiled clean with zero
errors before this audit began. This section exists so a future agent doesn't go looking for
conflicts that aren't there.

## 4. Findings and fixes made in this pass

### Critical — content integrity violation (fixed)
The homepage `/` (Media section) and `/media` (Gallery tab) displayed two AI-generated stock
photographs — `public/seminar_session.jpg` and `public/conference_hall.jpg` — captioned with
**fabricated programme names** ("Contemporary Leadership Models & Executive Presence",
"Strategic Planning for Growth & Network Leadership") and labeled in source comments as
`{/* Real image 1 */}` / `{/* Real image 2 */}`. Both images contained garbled AI-generated
text (visible fake slide/branding text reading "GLOBAL INC." and "GLOBAL LEADERSHIP SUMMIT
2054"). This directly violated the project's own README rule against presenting stock imagery
as genuine Academy content.
**Fix:** both images removed from `public/`; both call sites replaced with the existing
`CmsGridSlot` empty-state pattern, matching how every other page (testimonials, clients,
leadership) already handles unsupplied real content. This also resolved two
`@next/next/no-img-element` lint warnings as a side effect.

### Security — no abuse protection on public endpoints (fixed)
None of the 6 public form endpoints or the admin login endpoint had rate limiting, email
format validation, field length limits, or spam protection (honeypot/CAPTCHA).
**Fix:**
- `lib/rate-limit.ts` — shared in-memory sliding-window limiter, keyed by IP + bucket name.
  Public forms: 5 requests / 10 minutes. Login: 8 attempts / 5 minutes (brute-force
  protection). Documented as single-instance-only; needs a shared store (Redis or a DB table)
  if ever deployed across multiple instances — matches the existing caveat already documented
  for SQLite in `lib/db.ts`.
- `lib/validate.ts` — shared `isValidEmail`, `readBoundedField` (200-char cap for short
  fields, 5,000-char cap for message/details fields — rejects with 400 rather than silently
  truncating), and `isHoneypotFilled`.
- `components/Honeypot.tsx` — shared hidden-field component (off-screen, not `display:none`,
  `aria-hidden`, `tabIndex={-1}`) wired into all 5 public form UIs. A filled honeypot causes
  the API route to return a fake success without persisting the submission, so bots don't
  learn they were caught.
- All 6 public POST routes and the login route now follow this same pattern.
- Logout route's cookie-clearing now sets the same `httpOnly`/`secure`/`sameSite` attributes
  as login, for consistency.

### Bug — TypeScript `any` (fixed)
`lib/models.ts`'s generic `makeTable<T>()` insert helper used `row as any`, the one lint error
in the repo. Replaced with `Record<string, string | number | null>`, matching the actual shape
every caller passes.

### Gap — missing `.env.example` (fixed)
No environment variable template existed despite `SESSION_SECRET`, `DATABASE_DIR`,
`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_VAPID_PUBLIC_KEY`, and the `ADMIN_*` bootstrap
vars all being read from `process.env`. Added `.env.example` documenting each one.

### Bug — `.gitignore` would have silently excluded `.env.example` (fixed)
The existing `.env*` ignore rule matches `.env.example` too, so it would never have reached
version control once created. Added `!.env.example` exception.

## 5. Known gaps — not fixed in this pass, and why

These are real, but were left alone deliberately rather than fixed speculatively, per the
"don't add features unless justified" principle:

- **Admin dashboard is read-only.** Admins can view and (via `AdminTable`) scroll each
  submission list, but cannot change status, add notes, search, filter, or export. This is a
  legitimate operational gap (a "new" enquiry has no way to become "resolved") but is a
  larger, deliberate feature addition — better scoped as its own piece of work with the
  client's input on what statuses/workflow they actually want, rather than guessed at.
- **No CSRF token system.** Not added, because the existing protection (sameSite=lax cookies +
  JSON `Content-Type` requiring a preflight for true cross-origin POSTs) already covers the
  realistic threat model for this app, and adding token plumbing to 7 forms for marginal
  benefit would be exactly the kind of unjustified complexity the brief warns against. Flagged
  here so a future agent doesn't reintroduce it without reason.
- **Push notifications are collected but never sent.** Documented as intentional, staged work
  in both `lib/models.ts` and `public/sw.js` by the original build. Left as-is.
- **No automated tests exist** (no test runner is configured in `package.json`). See §7.

## 6. Verification performed

```
npm install     PASS
tsc --noEmit    PASS (0 errors)
npm run lint    PASS (0 errors, 0 warnings)
npm run build   NOT TESTED — this sandbox cannot reach fonts.googleapis.com (next/font
                fetches Fraunces/Inter/IBM Plex Mono at build time and the network
                allowlist here doesn't include Google Fonts). This is an environment
                limitation, not a code defect — the same build should succeed in any
                environment with normal internet access. Recommend running `npm run build`
                once in the real deployment/CI environment before shipping.
```

No test suite exists to run (`npm test` is not defined). See §7.

## 7. Remaining work for a human / future agent

- Decide on and implement admin status-management workflow (§5).
- Run `npm run build` in an environment with access to fonts.googleapis.com to get a real
  production-build signal (this pass could only verify typecheck + lint).
- Set up a test runner (Vitest or Jest) if automated testing is wanted — none exists yet.
- Supply real content for every `[CMS Placeholder]` slot across the site
  (leadership bios, programme names, testimonials, client logos, media) — all currently and
  correctly show empty states, per the content-integrity rule in §1.
- Decide on Web Push sending (needs the `web-push` package + a send job) or remove the
  half-built subscription collection if it's not going to be finished.
- If deploying to serverless/ephemeral hosting (Vercel etc.), either mount `DATABASE_DIR` on a
  persistent volume or swap `lib/db.ts` for hosted Postgres — the query surface in
  `lib/models.ts` is intentionally small and easy to port (already documented in `lib/db.ts`).
- Generate a real `SESSION_SECRET` and set it in production — the app throws on startup in
  production if it's missing, which is correct behavior, not a bug.
