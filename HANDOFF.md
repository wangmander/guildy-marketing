# Guildy Marketing - HANDOFF

Single source of truth for the guildy-marketing repo. The product app is a
separate repo (`guildy`, app.guildy.ai); nothing here touches it.

- Repo: `guildy-marketing`, branch `main`
- Stack: Next.js App Router, TypeScript, Tailwind v4 (CSS-first), pnpm
- Deploys: guildy.ai + www.guildy.ai (Vercel project `v0-jin-jin-website`)
- www.guildy.ai is the canonical host (guildy.ai 307s to www)

## Homepage section architecture

`app/page.tsx` is a server component composing, top to bottom:

1. `components/site-nav.tsx` (client) - fixed nav, `.scrolled` past 30px and
   `.on-light` past the try-it band.
2. `components/hero.tsx` (client) - editorial hero + cinematic `#film` card.
3. `components/try-it.tsx` (client) - the live unauth Quick Prep console.
4. `components/narrative.tsx` (server) - command-center vision (copy only).
5. `components/how-tiers.tsx` (server) - stage-aware prep + Quick/Deep tiers.
6. `components/close-cta.tsx` (server) - emotional close into signup.
7. `components/site-footer.tsx` (server) - footer.
8. `components/scroll-reveal.tsx` (client) - global `.reveal` -> `.in` driver,
   mounted once so sections can stay server components.

Shared CTA: `components/get-started-button.tsx` (client) is used everywhere a
"Get started free" appears (nav, hero, close, try-it result).

## Design CSS and tokens

The approved design ships as plain global CSS, imported in `app/layout.tsx`
after `globals.css`:

- `app/guildy-styles.css` - root tokens, nav, buttons, hero, film, reveal.
- `app/guildy-sections.css` - try-it console, narrative, how/tiers, close,
  footer, plus the `.pstep.active.waiting` progress pulse.

Do not rewrite this CSS into Tailwind utilities; it is kept as CSS for exact
visual fidelity. The design CSS is unlayered, so it wins the cascade over
Tailwind's `@layer base`. `app/globals.css` (shadcn oklch tokens) and the old
plum-hex utility usage are legacy; the homepage no longer depends on them.

### Fonts

Loaded via `next/font/google` in `app/layout.tsx` (self-hosted, no external
link): Bricolage Grotesque (`--font-bricolage`, display) and Playfair Display
(`--font-playfair`, italic accents). The design's `--font-display` and
`--font-serif` in `guildy-styles.css` point at those variables. Body text uses
the system sans stack (`--font-sans`).

### Token palette (plum editorial)

Defined in `guildy-styles.css :root`:

- Canvas: `--paper #F4F1E9`, `--paper-lo #ECE7DB`, `--card #FCFBF7`
- Ink: `--ink #221A20`, `--ink-2 #5A5158`, `--ink-3 #938A86`, `--taupe #A69F8F`
- Line: `--line #E3DDCF`
- Accent: `--plum #7A4D82`, `--lilac #B88ABF`, `--plum-soft #F1E7F2`
- Dark feature tone: `--dark #1E1118`, `--on-dark #F4EEE8`

No em dashes anywhere in copy or comments.

## Unauth Quick Prep + handoff-UUID proxy contract

The try-it generates real prep with NO signup. Flow:

1. `components/try-it.tsx` POSTs same-origin to `/api/quick-prep` with
   `{ jd, resumeText }` (trimmed). Caps: JD 20,000, resume 50,000 chars.
2. `app/api/quick-prep/route.ts` proxies server-side to
   `app.guildy.ai/api/generate-quick-prep-unauth`, then best-effort to
   `app.guildy.ai/api/unauth-handoff/create` to mint a handoff UUID.
3. Response shape: `{ prep, handoffId, error }`. `prep` has `purpose`
   (`headline`, `summary`, `criteria[]`), `positioning` (`headline`,
   `summary`, `frames[]`), `questions_they_ask[]`, `questions_you_ask[]`,
   `prep_checklist[]`. Do not render fields the API does not return (there is
   no role, company, or round in the response).
4. On success the handoff UUID is written to `sessionStorage`
   (`guildy_handoff_id`). Every "Get started free" CTA reads it at click and
   routes to `app.guildy.ai/signup?handoff={uuid}`, falling back to
   `?source=hero-quick-prep` when no prep was generated this session.

The handoff-UUID pattern is load-bearing: onboarding consumes it to
auto-populate the user's first kanban job + prep_versions row. Do not break
the request body, the response mapping, or the signup URL contract.

## Hero film

`public/videos/hero-demo.mp4` plays in `#film` as a v0: muted, autoplay, loop,
playsinline, object-fit cover, beneath the cinematic overlays. The play button
toggles mute (aria-label switches Unmute/Mute). Under prefers-reduced-motion
the film renders paused on its first frame. Swap point for the final edited
cut is the `<source>` in `components/hero.tsx` (add a `poster` then too).

## PostHog events (5, all load-bearing)

Config in `components/posthog-provider.tsx`: `capture_pageview:false`,
`person_profiles:"identified_only"`, host `us.i.posthog.com`.

| Event | Trigger | Fired in |
| --- | --- | --- |
| `marketing_landing_view` | page load, captures UTMs | `posthog-provider.tsx` |
| `unauth_quick_prep_started` | first input/paste into JD or resume | `try-it.tsx` |
| `unauth_quick_prep_generate_clicked` | Generate click | `try-it.tsx` |
| `unauth_quick_prep_generated` | real prep result renders | `try-it.tsx` |
| `unauth_signup_clicked` | any "Get started free" click | `get-started-button.tsx` |

`unauth_signup_clicked` fires with `{ send_instantly: true }` before
navigation so it no longer dies mid-nav.

Note: posthog-js bot detection suppresses all captures in automated/headless
browsers. Verify events in a real (headed) browser, not headless.

## SEO and machine-readability (Phase A)

Crawlability + machine-readability foundation. No content pages (Phase B is
separate). No visual, copy-tone, or Quick Prep changes.

### Canonical host

www.guildy.ai is canonical. `metadataBase` in `app/layout.tsx` is
`https://www.guildy.ai`, so the homepage `canonical` and `og:url` resolve to
www (was the apex `https://guildy.ai`, a canonical pointing at a redirect).
Legal pages self-canonicalize via relative `alternates.canonical`
(`/privacy`, `/terms`). Sitemap, robots, JSON-LD, og:image, and llms.txt all
use the www origin.

REDIRECT STATE (action needed outside the repo): the apex -> www redirect is
NOT in repo config (`next.config.mjs` has no redirects). It is a Vercel
dashboard domain setting and currently returns 307 (temporary). Change it to
permanent (308) in the Vercel project domain settings. Cannot be fixed in code.

### Files

- `app/layout.tsx`: V2 metadata kept (title `Guildy: Walk in ready`
  unchanged); description tightened to lead with the free-prep wedge. Injects
  Organization + SoftwareApplication JSON-LD (`<script type=application/ld+json>`
  in `<body>`). SoftwareApplication has a two-Offer array: Quick Prep price 0,
  Deep Prep price 19.99 USD monthly. No aggregateRating (no real reviews).
  Organization `sameAs` lists only the brand profiles (x.com/tryguildy,
  bsky tryguildy); no personal handle anywhere.
- `app/opengraph-image.tsx`: dynamic 1200x630 share card via next/og (edge
  runtime), plum/paper tokens, Bricolage fetched with a system fallback.
  `app/twitter-image.tsx` re-exports it (declares `runtime` as a literal).
  twitter:card is summary_large_image.
- `app/robots.ts` -> /robots.txt: allows `*` plus an explicit allow block for
  each AI/search crawler (Googlebot, Bingbot, Google-Extended, GPTBot,
  OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot,
  Perplexity-User, Applebot, Applebot-Extended, Amazonbot, CCBot). Disallows
  only `/api/`. References the sitemap; host is www.
- `app/sitemap.ts` -> /sitemap.xml: real indexable routes only (`/`, `/privacy`,
  `/terms`), www URLs. No api/utility routes.
- `public/llms.txt`: wedge-first product description + page map (low priority,
  cheap insurance).

### Older-page audit

No stale V1 "Read-only Gmail access" copy exists in the repo. The only
gmail/inbox reference is `app/privacy/page.tsx` ("We do not access your email
inbox..."), which is correct V2 copy. The stale V1 snippet some engines show
lives in Google's old index, not in code; it resolves via reindex. /privacy
and /terms are kept indexable (not noindexed) and are in the sitemap. No
retired/legacy routes exist in the repo (only `/`, `/privacy`, `/terms`,
`/api/quick-prep`); V1 URL cleanup is left to Search Console after reindex.

### Manual follow-ups (not in this repo)

- Flip apex -> www redirect to 308 in Vercel.
- Submit sitemap and request reindex in Google Search Console / Bing.

## Gates

- `pnpm build` clean.
- `npx tsc --noEmit`: baseline is 2 pre-existing errors
  (`components/theme-provider.tsx`, `components/ui/button.tsx`). Do not add new
  ones. Note `next.config.mjs` sets `ignoreBuildErrors:true`, so the build
  will not catch type errors; run tsc separately.
- New em-dash count: 0.
