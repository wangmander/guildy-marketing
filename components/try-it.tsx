"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import posthog from "posthog-js"

import {
  GetStartedButton,
  HANDOFF_STORAGE_KEY,
  REF_STORAGE_KEY,
} from "@/components/get-started-button"
import { APP_ORIGIN } from "@/lib/app-origin"

// Minimal mirror of the product app's PrepOutput (lib/ai/prep-types.ts).
// Only the fields rendered here. Quick tier returns category and answer_plan
// as null, so they are not surfaced.
type PrepCriterion = { name: string; weight: number; description: string }
type PrepFrame = { title: string; description: string }
type PrepOutput = {
  purpose: { headline: string; summary: string; criteria: PrepCriterion[] }
  positioning: { headline: string; summary: string; frames: PrepFrame[] }
  questions_they_ask: { question: string }[]
  questions_you_ask: { question: string }[]
  prep_checklist: { item: string }[]
}

// Mirror of the product app's authenticated input caps.
const JD_MAX = 20000
const RESUME_MAX = 50000

type Stage = "input" | "progress" | "result"

const PROGRESS_STEPS = [
  "Reading the job description",
  "Detecting the role and the round",
  "Matching your resume against the bar",
  "Writing prep tuned to this round",
]

// Sample chips pre-fill the textareas as a UX nicety. Generation always runs
// the real API on whatever is in the fields.
const SAMPLES: Record<string, { jd: string; cv: string }> = {
  staff: {
    jd: "Helixwave is hiring a Staff Software Engineer to set technical direction for the platform that everything else at Helixwave runs on: auth, billing, feature flagging, and workflow engine. You will own 1-2 platform initiatives per quarter end to end, author design docs that drive org-wide decisions, and grow engineers around you. Bonus: a track record of mentoring engineers from senior to staff.",
    cv: "Senior Software Engineer, 8 years. Led migration of a billing system serving 40M users. Drove design reviews across 4 teams. Mentored 3 engineers to senior.",
  },
  pm: {
    jd: "Stellium is looking for a Senior PM to own the activation surface. You will define the roadmap for new-user onboarding, partner with design and growth, and be accountable for a north-star activation metric. We want someone who can turn ambiguity into a crisp plan and ship.",
    cv: "Product Manager, 6 years across two B2B SaaS companies. Owned onboarding and activation. Lifted day-7 activation 22%. Comfortable with experimentation and SQL.",
  },
}

type ResultCard = {
  k: string
  t?: string
  body?: string
  list?: string[]
}

// Map the real /api/quick-prep response onto the design's card slots.
function buildCards(prep: PrepOutput): ResultCard[] {
  return [
    {
      k: "What this round tests",
      body: prep.purpose.summary,
      list: prep.purpose.criteria.map(
        (c) => `${c.name} (${c.weight}%): ${c.description}`,
      ),
    },
    {
      k: "How to position yourself",
      t: prep.positioning.headline,
      body: prep.positioning.summary,
      list: prep.positioning.frames.map((f) => `${f.title}: ${f.description}`),
    },
    {
      k: "Questions to expect",
      list: prep.questions_they_ask.map((q) => q.question),
    },
    {
      k: "Questions to ask them",
      list: prep.questions_you_ask.map((q) => q.question),
    },
    {
      k: "Prep checklist",
      list: prep.prep_checklist.map((c) => c.item),
    },
  ]
}

export function TryIt() {
  const [jd, setJd] = useState("")
  const [cv, setCv] = useState("")
  const [stage, setStage] = useState<Stage>("input")
  const [prep, setPrep] = useState<PrepOutput | null>(null)
  const [handoffId, setHandoffId] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [waiting, setWaiting] = useState(false)
  const [cardsIn, setCardsIn] = useState(0)
  const [refId, setRefId] = useState<string | null>(null)
  const [sharing, setSharing] = useState(false)
  const [shareUrl, setShareUrl] = useState<string | null>(null)
  const [shareError, setShareError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const searchParams = useSearchParams()
  const utmSource = searchParams?.get("utm_source") || undefined
  const startedRef = useRef(false)
  const generatedFiredRef = useRef(false)
  const referralFiredRef = useRef(false)
  const refHydratedRef = useRef(false)
  const copyTimerRef = useRef<number | null>(null)
  const generationStartRef = useRef<number | null>(null)
  const stepTimerRef = useRef<number | null>(null)
  const typeTimerRef = useRef<number | null>(null)

  const jdTrimmed = jd.trim()
  const cvTrimmed = cv.trim()
  const jdOver = jdTrimmed.length > JD_MAX
  const cvOver = cvTrimmed.length > RESUME_MAX
  const canSubmit =
    jdTrimmed.length > 0 &&
    cvTrimmed.length > 0 &&
    !jdOver &&
    !cvOver &&
    stage !== "progress"

  // unauth_quick_prep_started: first real input or paste into either field.
  useEffect(() => {
    if (startedRef.current) return
    if (jdTrimmed.length === 0 && cvTrimmed.length === 0) return
    posthog.capture("unauth_quick_prep_started", {
      has_jd: jdTrimmed.length > 0,
      has_resume: cvTrimmed.length > 0,
      utm_source: utmSource,
    })
    startedRef.current = true
  }, [jdTrimmed, cvTrimmed, utmSource])

  // unauth_quick_prep_generated: fires once when the real prep renders.
  useEffect(() => {
    if (generatedFiredRef.current) return
    if (stage !== "result" || !prep) return
    posthog.capture("unauth_quick_prep_generated", {
      utm_source: utmSource,
      generation_time_ms:
        generationStartRef.current !== null
          ? Date.now() - generationStartRef.current
          : undefined,
    })
    generatedFiredRef.current = true
  }, [stage, prep, utmSource])

  // ?ref pre-fill: a viewer arriving from a shared link. Fetch the share's
  // JD (CORS-enabled GET on the app), pre-fill the field, stash the ref for
  // attribution, then bring the viewer to the pre-filled console.
  useEffect(() => {
    if (refHydratedRef.current) return
    const ref = searchParams?.get("ref")?.trim()
    if (!ref) return
    refHydratedRef.current = true
    setRefId(ref)
    try {
      window.sessionStorage.setItem(REF_STORAGE_KEY, ref)
    } catch {
      // sessionStorage unavailable: the &ref= leg degrades to no attribution
    }

    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(
          `${APP_ORIGIN}/api/share/${encodeURIComponent(ref)}`,
        )
        if (!res.ok) return
        const data = (await res.json().catch(() => ({}))) as {
          jd_text?: string
        }
        if (cancelled || !data.jd_text) return
        setJd(data.jd_text)
      } catch {
        // Share fetch failed: leave the field empty, ref still carries through
      }
    })()

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches
    window.requestAnimationFrame(() => {
      document.getElementById("console")?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "center",
      })
    })

    return () => {
      cancelled = true
    }
  }, [searchParams])

  // prep_referral_converted: a ?ref viewer generated their own prep. Fires
  // client-side once, carrying the viewer's anonymous distinct_id. The app
  // separately writes the durable referral row from the body ref (no double
  // count, different sink). event:"generated" discriminates this from the
  // signup leg, which fires the same event name with the real user id.
  useEffect(() => {
    if (referralFiredRef.current) return
    if (stage !== "result" || !prep || !refId) return
    posthog.capture("prep_referral_converted", {
      event: "generated",
      share_id: refId,
    })
    referralFiredRef.current = true
  }, [stage, prep, refId])

  // Staggered card reveal once the result stage shows.
  useEffect(() => {
    if (stage !== "result" || !prep) return
    const total = buildCards(prep).length
    setCardsIn(0)
    const timers: number[] = []
    for (let i = 0; i < total; i++) {
      timers.push(
        window.setTimeout(() => setCardsIn((n) => Math.max(n, i + 1)), 120 + i * 160),
      )
    }
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [stage, prep])

  useEffect(() => {
    return () => {
      if (stepTimerRef.current) window.clearTimeout(stepTimerRef.current)
      if (typeTimerRef.current) window.clearTimeout(typeTimerRef.current)
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    }
  }, [])

  const fmt = (n: number) => n.toLocaleString()

  const typeInto = (
    setter: (v: string) => void,
    text: string,
    done?: () => void,
  ) => {
    const chunk = Math.max(2, Math.round(text.length / 90))
    let i = 0
    const step = () => {
      i += chunk
      setter(text.slice(0, i))
      if (i < text.length) {
        typeTimerRef.current = window.setTimeout(step, 12)
      } else {
        setter(text)
        if (done) done()
      }
    }
    step()
  }

  const onChip = (key: string) => {
    if (stage === "progress") return
    const s = SAMPLES[key]
    if (!s) return
    if (typeTimerRef.current) window.clearTimeout(typeTimerRef.current)
    typeInto(setJd, s.jd, () => typeInto(setCv, s.cv))
  }

  // Drive the 4-step animation. Steps advance on timers; the last step holds
  // and pulses until the real response resolves.
  const runProgress = () => {
    setActiveStep(0)
    setWaiting(false)
    const durations = [600, 700, 650, 800]
    const advance = (i: number) => {
      setActiveStep(i)
      if (i < PROGRESS_STEPS.length - 1) {
        stepTimerRef.current = window.setTimeout(
          () => advance(i + 1),
          durations[i],
        )
      } else {
        // Reached the final step: hold and pulse until the fetch resolves.
        setWaiting(true)
      }
    }
    stepTimerRef.current = window.setTimeout(() => advance(0), 220)
  }

  const onGenerate = async () => {
    if (!canSubmit) return
    posthog.capture("unauth_quick_prep_generate_clicked", {
      utm_source: utmSource,
    })
    generationStartRef.current = Date.now()
    generatedFiredRef.current = false
    setErrorMsg(null)
    setPrep(null)
    setHandoffId(null)
    setShareUrl(null)
    setShareError(null)
    setCopied(false)
    setStage("progress")
    runProgress()

    try {
      const res = await fetch("/api/quick-prep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ref (when present) is forwarded verbatim by the proxy so the app's
        // generate endpoint writes the durable "generated" referral row.
        body: JSON.stringify({
          jd: jdTrimmed,
          resumeText: cvTrimmed,
          ...(refId ? { ref: refId } : {}),
        }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        prep?: PrepOutput
        handoffId?: string | null
        error?: string
      }
      if (stepTimerRef.current) window.clearTimeout(stepTimerRef.current)
      setWaiting(false)
      if (!res.ok || !data.prep) {
        setErrorMsg(data.error || "Try again later")
        setStage("input")
        return
      }
      const id = data.handoffId ?? null
      setPrep(data.prep)
      setHandoffId(id)
      // Persist handoff so every signup CTA carries it this session.
      try {
        if (id) window.sessionStorage.setItem(HANDOFF_STORAGE_KEY, id)
        else window.sessionStorage.removeItem(HANDOFF_STORAGE_KEY)
      } catch {
        // sessionStorage unavailable: CTA falls back to ?source
      }
      setActiveStep(PROGRESS_STEPS.length - 1)
      setStage("result")
    } catch {
      if (stepTimerRef.current) window.clearTimeout(stepTimerRef.current)
      setWaiting(false)
      setErrorMsg("Try again later")
      setStage("input")
    }
  }

  const onAgain = () => {
    setStage("input")
    setPrep(null)
    setErrorMsg(null)
    setShareUrl(null)
    setShareError(null)
    setCopied(false)
  }

  // Share the JD-only teaser. Posts through the same-origin proxy (the app's
  // create endpoint has no CORS); the proxy regenerates a teaser server-side.
  // Sends ONLY the JD, never the resume or the generated prep.
  const onShare = async () => {
    if (sharing) return
    setSharing(true)
    setShareError(null)
    setCopied(false)
    try {
      const res = await fetch("/api/share/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jd: jdTrimmed }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        url?: string
        error?: string
      }
      if (!res.ok || !data.url) {
        setShareError("Could not create a share link. Try again.")
        return
      }
      setShareUrl(data.url)
    } catch {
      setShareError("Could not create a share link. Try again.")
    } finally {
      setSharing(false)
    }
  }

  const onCopy = async () => {
    if (!shareUrl) return
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
      copyTimerRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable: the URL and Open link are still on screen
    }
  }

  const cards = prep ? buildCards(prep) : []

  return (
    <section className="tryit section" id="tryit" data-screen-label="Try it">
      <div className="wrap">
        <div className="section__head center reveal">
          <span className="eyebrow kicker">Proof, not a promise</span>
          <h2 className="display h2">See your prep in 20 seconds</h2>
          <p className="lead">
            Paste a job description and your resume. Guildy reads the role and
            the round, then builds prep tuned to exactly what that interview
            tests. No signup. Free.
          </p>
        </div>

        <div className="console reveal" data-delay="1" id="console">
          <div className="console__glow" />
          <div className="console__head">
            <span className="console__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="console__label">guildy · quick prep</span>
          </div>

          {/* input stage */}
          <div className={"gen-stage" + (stage === "input" ? " show" : "")}>
            <div className="chips">
              <span className="chip" onClick={() => onChip("staff")}>
                Try a sample: Staff Engineer · Helixwave
              </span>
              <span className="chip" onClick={() => onChip("pm")}>
                PM · Stellium
              </span>
            </div>
            <div className="field field--jd">
              <div className="field__top">
                <label className="field__label" htmlFor="jd">
                  Paste the job description
                </label>
                <span className={"field__count" + (jdOver ? " over" : "")}>
                  {fmt(jdTrimmed.length)} / {fmt(JD_MAX)}
                </span>
              </div>
              <textarea
                id="jd"
                className={jdOver ? "over" : undefined}
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the full job posting here..."
              />
            </div>
            <div className="field field--cv">
              <div className="field__top">
                <label className="field__label" htmlFor="cv">
                  Paste your resume or a short intro
                </label>
                <span className={"field__count" + (cvOver ? " over" : "")}>
                  {fmt(cvTrimmed.length)} / {fmt(RESUME_MAX)}
                </span>
              </div>
              <textarea
                id="cv"
                className={cvOver ? "over" : undefined}
                value={cv}
                onChange={(e) => setCv(e.target.value)}
                placeholder="Paste your resume text, LinkedIn summary, or a short intro..."
              />
            </div>
            <div className="console__actions">
              <button
                className="btn btn--plum gen"
                id="gen"
                disabled={!canSubmit}
                onClick={onGenerate}
              >
                Generate prep
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <span className="console__hint">Free. No signup required.</span>
            </div>
            {errorMsg ? (
              <p className="console__error" role="alert">
                {jdOver || cvOver
                  ? "That is too long. Trim it down to continue."
                  : errorMsg}
              </p>
            ) : null}
          </div>

          {/* generating stage */}
          <div className={"gen-stage" + (stage === "progress" ? " show" : "")}>
            <div className="progress">
              <div className="progress__bar">
                <i
                  id="pbar"
                  style={{
                    width: `${((activeStep + 1) / PROGRESS_STEPS.length) * 100}%`,
                  }}
                />
              </div>
              <div className="progress__steps" id="psteps">
                {PROGRESS_STEPS.map((label, i) => {
                  const isDone = i < activeStep
                  const isActive = i === activeStep
                  const cls =
                    "pstep" +
                    (isDone ? " done" : "") +
                    (isActive ? " active" : "") +
                    (isActive && waiting ? " waiting" : "")
                  return (
                    <div className={cls} key={label} data-step={i}>
                      <span className="tick">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {label}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* result stage */}
          <div className={"gen-stage" + (stage === "result" ? " show" : "")}>
            <div className="result">
              <div className="result__meta">
                <span className="badge">Quick Prep</span>
                <span className="result__role" id="r-role">
                  {prep?.purpose.headline}
                </span>
              </div>
              <div className="result__grid" id="rgrid">
                {cards.map((c, idx) => (
                  <div
                    className={"rcard" + (idx < cardsIn ? " in" : "")}
                    key={c.k}
                  >
                    <div className="rcard__k">{c.k}</div>
                    {c.t ? <div className="rcard__t">{c.t}</div> : null}
                    {c.body ? <p>{c.body}</p> : null}
                    {c.list ? (
                      <ul>
                        {c.list.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="result__foot">
                <span className="result__upsell">
                  This is the free Quick Prep sketch. <b>Deep Prep</b> goes
                  round by round with questions, model answers, and your story
                  bank.
                </span>
                <div className="result__cta">
                  <GetStartedButton
                    className="btn btn--plum btn--sm"
                    location="tryit-result"
                  >
                    Get started free
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </GetStartedButton>
                  <button
                    className="btn btn--ghost btn--sm"
                    type="button"
                    onClick={onShare}
                    disabled={sharing}
                  >
                    {sharing ? (
                      <>
                        <span className="btn__spin" aria-hidden="true" />
                        Creating link...
                      </>
                    ) : (
                      <>
                        Share this prep
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13" />
                        </svg>
                      </>
                    )}
                  </button>
                  <button
                    className="btn btn--ghost btn--sm"
                    id="again"
                    onClick={onAgain}
                  >
                    Run another
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M21 12a9 9 0 11-3-6.7M21 4v5h-5" />
                    </svg>
                  </button>
                </div>
              </div>
              {shareUrl ? (
                <div className="share-row">
                  <span className="share-row__url">{shareUrl}</span>
                  <button
                    className="btn btn--ghost btn--sm"
                    type="button"
                    onClick={onCopy}
                  >
                    {copied ? "Copied" : "Copy link"}
                  </button>
                  <a
                    className="share-row__open"
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </div>
              ) : null}
              {shareError ? (
                <p className="console__error" role="alert">
                  {shareError}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
