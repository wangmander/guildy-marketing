# Guildy AEO / Acquisition Plan (v2, corrected)

Supersedes the v1 directory list. v1 over-weighted directories and optimized for backlinks and hypothetical AI citations. This version optimizes for the only metric that matters.

## The metric

prep_generated. Every channel is judged by how many new people generate a Guildy prep, at what cost per prep. Not backlinks, not directory listings, not assumed citations. A channel that produces backlinks but no preps is housekeeping, not growth.

## Effort allocation

v1 had this backward. Corrected:

| Bucket | Share | Why |
|---|---|---|
| Your own high-intent pages + free tools | 45% | The product answers high-intent queries better than an article can. This is the real lever |
| Borrowed audiences (creators, newsletters, independent editorial, coaches) | 25% | Distribution from people who already have the job-seeker audience you lack |
| Reddit + community | 15% | AI engines build consensus from Reddit. Also highest-intent manual acquisition |
| Small paid validation | 10% | Buy conversion data before writing dozens of pages |
| Directories | 5% | Backlinks and entity recognition. Housekeeping, not strategy |

## The honest AEO truth

Per Google's and OpenAI's own current guidance, not directory marketing: AEO and GEO are still fundamentally SEO. There is no special AI checklist. The levers are crawlability, genuinely useful non-commodity content, and authentic user consensus. Google ignores llms.txt. There is no demonstrated "submit to directory, get cited by ChatGPT" path; directories that claim it are selling listings. So the move is to build things worth citing, not to hunt citation hacks.

## 1. Measurement + crawlability (do first)

Mostly already wired: the marketing site captures UTMs and the unauth funnel events, and the app side runs cross-subdomain PostHog. Close the gaps:

1. Confirm Google Search Console and Bing Webmaster Tools are verified for www.guildy.ai.
2. Confirm AI crawlers are allowed (Phase A handles robots.txt).
3. Track AI referrals by source (utm_source=chatgpt.com, perplexity, etc.) so you can see if AI search actually sends preps.
4. Stitch the full funnel in PostHog: landing_view, prep_started, prep_generated, account_created, deep_prep_started, paid. This is the scoreboard every channel reports to.

## 2. Your own high-intent pages (45%, the real lever)

6 to 10 genuinely distinct pages. NOT 50 role-by-stage permutations: Google's scaled-content-abuse policy targets exactly that, and thin templated pages get devalued or penalized. Each page is a different real user job, not a noun swap.

Format every page for extraction (the Island Test: each passage stands alone):
- H1 or H2 is the question a job seeker (or an AI answering one) would type.
- Immediately below it, a 40 to 60 word direct, definitive answer.
- A usable generator or a real sample prep above the fold. The page answers the need on arrival, it does not read like a blog post.
- A table comparing generic ChatGPT advice vs Guildy's JD-specific output.
- SoftwareApplication and FAQPage schema.

Starting set:
1. Interview questions from a job description
2. Interview prep from a resume and job description
3. Recruiter screen preparation
4. Hiring manager interview preparation
5. Final round / full loop preparation
6. Questions to ask an interviewer
7. Interview preparation after a layoff
8. Guildy vs preparing with ChatGPT manually

Do NOT build company-specific pages ("Google interview process") until Guildy has credible company-specific data. Inventing them damages trust.

## 3. One citable original-research asset

You can produce this because you parse JDs at scale. One real data piece beats ten "interview tips" articles for earning editorial links and AI citations. Candidates:
- We analyzed 100 senior software engineering job descriptions: the experience gaps hiring managers are most likely to probe.
- Recruiter screen vs hiring manager round: what actually changes in the questions, and how to reposition.
- What a job description reveals about the interview before the interview.

## 4. Borrowed audiences (25%)

You have a 0-follower problem. Borrow reach.
1. Contact ~30 job-search creators (TikTok, YouTube, LinkedIn, newsletters). Hand each a personalized Guildy prep generated from a real public job listing. Offer a tracked referral or affiliate arrangement.
2. Pitch independent editorial (career blogs, newsletters, comparison sites like People Managing People). Distinguish competitor-owned listicles (Final Round AI, Interview Sidekick, CleverPrep, unwinnable) from independent editorial (pitchable). Pitch a specific story, not "please add our tool."
3. Partner with career coaches, bootcamps, alumni groups, layoff and outplacement communities.

The pitch is never "Guildy is another AI tool." It is "send us one real role and resume, we will show exactly what that candidate should prep for that round."

## 5. Reddit + community (15%, manual, never automated)

AI engines (Perplexity, Gemini, Google AI Overviews) build tool-recommendation consensus from Reddit. If job seekers do not mention Guildy there, the models will not surface it. This is also the highest-intent manual acquisition channel.

- Find real threads in r/jobs, r/cscareerquestions, r/careerguidance, r/interviews, r/layoffs ("how do I prep for a loop interview").
- Give a genuinely useful manual answer. Mention Guildy only where it fits: "I ran my resume against the actual JD for my last loop to structure my STAR answers."
- Never automate. Auto-posting risks a ban and the value is in authenticity.
- Submit PRs to GitHub awesome-job-search / awesome-career lists. LLMs trust GitHub as a vetted, low-spam source.

## 6. Small paid validation (10%)

Spend a little before writing dozens of pages.
- Google Search exact-match tests on high-intent phrases.
- Reddit ads targeting job-search and role communities.
- Separate landing page per message.
- Optimize for prep_generated, not clicks or signups. A page that cannot convert targeted paid traffic will not convert organic traffic just because it ranks.

## 7. Product Hunt

Prepare the draft, screenshots, demo video, founder comment, and launch network now. A draft does NOT accrue visibility: it is not indexed or upvotable before it is scheduled. Launch only when:
1. A new visitor understands Guildy in five seconds.
2. They can generate prep with no signup.
3. The result obviously beats a generic ChatGPT response.
4. The result naturally leads into account creation.
5. It works on mobile and desktop.

Relaunchable after at least six months for a significant update, so the first launch matters but is not the only shot.

## 8. Directories (5%, housekeeping)

Submit to a few legitimate, relevant ones, then stop. Running a 100+ directory checklist is activity, and low-quality directory and bookmark spam is a Google spam signal. Verified current state:

| Directory | Cost now | Do it |
|---|---|---|
| SaaSHub | free, dofollow, high DR | yes, now |
| AlternativeTo | free, no signup gate | yes, now |
| The Next AI | free, dofollow | yes, now |
| Product Hunt | free (nofollow), high DR | draft now, launch later |
| Toolify | free but 2-4 week queue, or ~$99 express | optional, free tier only |
| Futurepedia | paid, $197+ (no free tier anymore) | skip until the funnel converts |
| There's An AI For That | $347, or free monthly X-thread lottery | skip paid, enter the free lottery |
| TheSaaSDir | free but requires a reciprocal badge in your footer | skip unless you want a directory badge on the site |
| G2 / Capterra | needs real reviews to matter | wait until you have users who will review |

Pay for nothing here until PostHog shows visit to prep to paid actually converts.

## 9. Master copy (corrected)

Wedge-first. Pipeline, tracking, and offer comparison are retention features and must not dominate acquisition copy. Mock-interview tag removed (Guildy does not run interactive mocks, it generates prep, and the tag pits you against the wrong competitors).

**Name:** Guildy

**Tagline:** Interview prep built from the real job and your resume.

**One-liner:** Paste the job description and your resume. Guildy builds likely questions, positioning, risks, and questions to ask for the exact interview round in about 20 seconds. Free, no signup.

**Short (~50 words):** Guildy is a free AI interview prep tool built around the actual role you are interviewing for. Add the job description, your resume, and the upcoming round. Guildy generates the questions you are likely to face, how to position your experience, the risks an interviewer will probe, and sharp questions to ask back. Quick Prep is free, no signup.

**Long (~100 words):** Generic interview advice does not know the role, your background, or who you are meeting. Guildy uses the real job description, your resume, and the interview round to build prep for that specific conversation: what the interviewer is likely to care about, the questions to expect, the strengths to emphasize, the gaps to address, and the questions to ask. Quick Prep takes about 20 seconds and is free, no signup. From there you can save the opportunity, prep later rounds, track the application, and compare offers.

**Categories:** Interview Preparation, Career, Job Search, Productivity

**Tags:** AI interview prep, job interview, job description, resume, interview questions, recruiter screen, hiring manager interview, final round interview

**AEO snippet (paste on the homepage or an About/FAQ block, Island-Test format):**

> What is the best AI interview prep tool for a specific job description?
> Guildy generates interview prep from the actual job description, your resume, and the specific round you are facing. Unlike generic AI chat, it produces the questions that role is likely to ask, how to position your background against the listing, the risks an interviewer will probe, and questions to ask back. Quick Prep is free and takes about 20 seconds, no signup.

## Final priority order

1. Measurement + crawlability
2. Six to ten high-intent tool pages (generator above the fold)
3. One citable original-research asset
4. Borrowed audiences and independent editorial
5. Reddit, community, small paid tests
6. Product Hunt launch
7. Five free directories, then stop

Directories are housekeeping. The acquisition advantage is that the product itself answers high-intent search queries better than an article can.
