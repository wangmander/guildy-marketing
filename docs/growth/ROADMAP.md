# Guildy Master Roadmap

Last updated: 2026-06-21

Binding constraint: distribution. Getting eyeballs to signups to paying users. Every item filters through "does this get paying users." Autonomous broadcast (Blitz, Threads) is low-ROI at near-zero followers; the real levers are a converting funnel plus manual distribution (Reddit, borrowed reach, research content).

## NOW (today)
- [ ] Finish the Threads token: Meta app to access token + user id into GitHub Secrets (only gate for Threads)
- [ ] SEO: flip Vercel apex-to-www redirect from 307 to 308
- [ ] SEO: request reindex in Google Search Console + Bing (clears stale V1 listing)
- [ ] Blitz: add Threads adapter on existing arch (one topic tag, link in first reply, image, conversation framing, native variant, 3/day US windows). Does NOT need the routine migration.

## NEXT (make the funnel convert before driving traffic)
- [ ] Smoke test Guildy end to end: signup, add 3 jobs, Quick Prep, Deep Prep, Stripe
- [ ] guildy.ai visual refresh: screenshots + short screen recording of the command center, kanban, prep overlay, then a marketing build placing them on the hero + a features section

## THEN (distribution, the real user-getting work)
- [ ] Reddit + community seeding (manual, pseudonymous, value-first 9:1) + borrowed reach (reply on big layoff/career accounts)
- [ ] Social post media: screenshots + short clips for Blitz and Threads content

## ONGOING (compounds over weeks)
- [ ] Research article from the thesis (citable for AI answers, shareable on Reddit)
- [ ] SEO Phase B: 6 to 10 high-intent content pages

## AT 50 BLUESKY FOLLOWERS (currently 16)
- [ ] Blitz to Claude routine migration (Opus generation, lane-varied) + self-opt loop (reads performance, runs tests, shifts to winners)
- [ ] Instrument now so 50 is not a cold start: log every post + weekly metrics pull

## DONE
- [x] SEO Phase A shipped (5961e3c): robots, sitemap, llms.txt, JSON-LD, OG image, canonical to www
- [x] Strategy docs committed: acquisition-plan-v3, research-articles-thesis, aeo-plan, blitz self-optimization-spec
- [x] Blitz API audit (~$8/mo, cuts mapped)
- [x] Viral loop built then cut (dormant app-side code harmless)

## Notes
- Self-opt deferred until 50 BS followers (near-zero signal below that)
- Routine migration deferred (API cost trivial; pairs with self-opt at scale)
- App-side viral-loop dormant cleanup (open /api/share/create endpoint) optional, low priority
