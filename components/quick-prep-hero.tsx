"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

// Minimal mirror of the product app's PrepOutput (lib/ai/prep-types.ts).
// Only the fields this hero renders. Quick tier returns `category` and
// `answer_plan` as null, so they are not surfaced here.
type PrepCriterion = { name: string; weight: number; description: string }
type PrepFrame = { title: string; description: string }
type PrepQuestionThey = { question: string }
type PrepQuestionYou = { question: string }
type PrepChecklistItem = { item: string }
type PrepOutput = {
  purpose: { headline: string; summary: string; criteria: PrepCriterion[] }
  positioning: { headline: string; summary: string; frames: PrepFrame[] }
  questions_they_ask: PrepQuestionThey[]
  questions_you_ask: PrepQuestionYou[]
  prep_checklist: PrepChecklistItem[]
}

// Mirror of the product app's authenticated input caps so oversized
// pastes are caught before the network call.
const JD_MAX = 20000
const RESUME_MAX = 50000

// HANDOFF: the product app's /signup reads ?source for funnel
// attribution. Carrying the generated prep across the guildy.ai ->
// app.guildy.ai origin boundary needs a server-side token store
// (localStorage is origin-scoped; a full PrepOutput + JD + resume does
// not fit in URL params). That mechanism is a separate coordination
// item with the product side; until it ships the CTA just routes to
// signup and the user generates prep on their first job there.
const SIGNUP_URL = "https://app.guildy.ai/signup?source=hero-quick-prep"

const LOADING_STEPS = [
  "Reading the job description...",
  "Matching it to your background...",
  "Mapping the likely questions...",
  "Drafting your prep...",
]

type Status = "idle" | "loading" | "done" | "error"

export function QuickPrepHero() {
  const [jd, setJd] = useState("")
  const [resumeText, setResumeText] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [prep, setPrep] = useState<PrepOutput | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [loadingStep, setLoadingStep] = useState(0)
  const resultRef = useRef<HTMLDivElement>(null)

  // Cycle the loading copy roughly every 5s so a ~20s wait shows motion.
  useEffect(() => {
    if (status !== "loading") return
    setLoadingStep(0)
    const id = setInterval(() => {
      setLoadingStep((s) => (s + 1) % LOADING_STEPS.length)
    }, 5000)
    return () => clearInterval(id)
  }, [status])

  // Bring the result into view once it lands.
  useEffect(() => {
    if (status === "done" && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [status])

  const jdTrimmed = jd.trim()
  const resumeTrimmed = resumeText.trim()
  const jdOver = jdTrimmed.length > JD_MAX
  const resumeOver = resumeTrimmed.length > RESUME_MAX
  const canSubmit =
    jdTrimmed.length > 0 &&
    resumeTrimmed.length > 0 &&
    !jdOver &&
    !resumeOver &&
    status !== "loading"

  const onGenerate = async () => {
    if (!canSubmit) return
    setStatus("loading")
    setErrorMsg(null)
    setPrep(null)
    try {
      const res = await fetch("/api/quick-prep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jd: jdTrimmed, resumeText: resumeTrimmed }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        prep?: PrepOutput
        error?: string
      }
      if (!res.ok || !data.prep) {
        setErrorMsg(data.error || "Try again later")
        setStatus("error")
        return
      }
      setPrep(data.prep)
      setStatus("done")
    } catch {
      setErrorMsg("Try again later")
      setStatus("error")
    }
  }

  return (
    <section id="quick-prep" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F3E9F5] px-4 py-1.5 text-sm font-medium text-[#7A4D82]">
            <Sparkles className="h-4 w-4" />
            Try it now
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[#3A2240] sm:text-5xl">
            See your interview prep in 20 seconds
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-[#705D74]">
            Paste a job description and your resume. Get a tailored prep
            sketch covering what the round tests, how to position
            yourself, and the questions to expect.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[#E8D5EB] bg-[#FBFAFB] p-6 shadow-sm sm:p-8">
          <PasteField
            id="qp-jd"
            label="Paste the job description"
            value={jd}
            onChange={setJd}
            placeholder="Paste the full job posting here..."
            count={jdTrimmed.length}
            max={JD_MAX}
            over={jdOver}
            rows={7}
            disabled={status === "loading"}
          />
          <div className="mt-5">
            <PasteField
              id="qp-resume"
              label="Paste your resume or intro"
              value={resumeText}
              onChange={setResumeText}
              placeholder="Paste your resume text, LinkedIn summary, or a short intro..."
              count={resumeTrimmed.length}
              max={RESUME_MAX}
              over={resumeOver}
              rows={7}
              disabled={status === "loading"}
            />
          </div>

          <Button
            type="button"
            onClick={onGenerate}
            disabled={!canSubmit}
            className="mt-6 flex h-auto w-full items-center justify-center gap-2 rounded-full bg-[#2C1731] py-3.5 text-base font-medium text-white shadow-lg transition-all duration-200 hover:bg-[#2C1731]/90 enabled:hover:scale-[1.02] disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate Prep. Free, no signup required.
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>

          {status === "loading" ? (
            <div
              className="mt-4 flex items-center justify-center gap-2 text-sm text-[#705D74]"
              aria-live="polite"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#B88ABF]" />
              {LOADING_STEPS[loadingStep]}
            </div>
          ) : null}

          {status === "error" ? (
            <p
              className="mt-4 text-center text-sm text-[#9A3434]"
              role="alert"
            >
              {errorMsg ?? "Try again later"}
            </p>
          ) : null}
        </div>

        {status === "done" && prep ? (
          <div ref={resultRef} className="mt-12 scroll-mt-8 space-y-5">
            <PurposeCard purpose={prep.purpose} />
            <PositioningCard positioning={prep.positioning} />
            <QuestionsCard
              title="Questions they'll ask"
              questions={prep.questions_they_ask.map((q) => q.question)}
            />
            <QuestionsCard
              title="Questions to ask them"
              questions={prep.questions_you_ask.map((q) => q.question)}
            />
            <ChecklistCard items={prep.prep_checklist.map((c) => c.item)} />

            <div className="rounded-2xl border border-[#E8D5EB] bg-[#F3E9F5] p-6 text-center sm:p-8">
              <h3 className="text-xl font-semibold text-[#3A2240]">
                This is the Quick Prep sketch.
              </h3>
              <p className="mx-auto mt-2 max-w-md text-pretty text-[#705D74]">
                Save this job to your pipeline and unlock Deep Prep:
                researched, interviewer-specific, with full answer plans.
              </p>
              <Button
                asChild
                className="mt-5 inline-flex h-auto items-center gap-2 rounded-full bg-[#2C1731] px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#2C1731]/90"
              >
                <a href={SIGNUP_URL}>
                  Save this job and unlock Deep Prep
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function PasteField({
  id,
  label,
  value,
  onChange,
  placeholder,
  count,
  max,
  over,
  rows,
  disabled,
}: {
  id: string
  label: string
  value: string
  onChange: (next: string) => void
  placeholder: string
  count: number
  max: number
  over: boolean
  rows: number
  disabled: boolean
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="text-sm font-medium text-[#3A2240]"
        >
          {label}
        </label>
        <span
          className={
            "text-xs tabular-nums " +
            (over ? "text-[#9A3434]" : "text-[#A491A8]")
          }
        >
          {count.toLocaleString()} / {max.toLocaleString()}
        </span>
      </div>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={
          "mt-1.5 w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm text-[#3A2240] placeholder:text-[#A491A8] focus:outline-none focus:ring-2 focus:ring-[#B88ABF]/50 disabled:opacity-60 " +
          (over ? "border-[#9A3434]" : "border-[#E8D5EB] focus:border-[#B88ABF]")
        }
      />
      {over ? (
        <p className="mt-1 text-xs text-[#9A3434]">
          Too long. Trim it down to continue.
        </p>
      ) : null}
    </div>
  )
}

function ResultCard({
  label,
  headline,
  summary,
  children,
}: {
  label: string
  headline?: string
  summary?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-[#E8D5EB] bg-white p-6 sm:p-7">
      <span className="text-xs font-semibold uppercase tracking-wide text-[#B88ABF]">
        {label}
      </span>
      {headline ? (
        <h3 className="mt-1.5 text-lg font-semibold text-[#3A2240]">
          {headline}
        </h3>
      ) : null}
      {summary ? (
        <p className="mt-2 text-sm leading-relaxed text-[#705D74]">
          {summary}
        </p>
      ) : null}
      <div className="mt-4">{children}</div>
    </div>
  )
}

function PurposeCard({
  purpose,
}: {
  purpose: PrepOutput["purpose"]
}) {
  return (
    <ResultCard
      label="Purpose"
      headline={purpose.headline}
      summary={purpose.summary}
    >
      <ul className="space-y-3">
        {purpose.criteria.map((c) => (
          <li key={c.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-[#3A2240]">{c.name}</span>
              <span className="text-xs text-[#A491A8]">{c.weight}%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#F3E9F5]">
              <div
                className="h-full rounded-full bg-[#B88ABF]"
                style={{
                  width: `${Math.min(100, Math.max(0, c.weight))}%`,
                }}
              />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#705D74]">
              {c.description}
            </p>
          </li>
        ))}
      </ul>
    </ResultCard>
  )
}

function PositioningCard({
  positioning,
}: {
  positioning: PrepOutput["positioning"]
}) {
  return (
    <ResultCard
      label="Positioning"
      headline={positioning.headline}
      summary={positioning.summary}
    >
      <ol className="space-y-4">
        {positioning.frames.map((f, i) => (
          <li key={f.title} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E9F5] text-xs font-semibold text-[#7A4D82]">
              {i + 1}
            </span>
            <div>
              <h4 className="text-sm font-semibold text-[#3A2240]">
                {f.title}
              </h4>
              <p className="mt-0.5 text-sm leading-relaxed text-[#705D74]">
                {f.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </ResultCard>
  )
}

function QuestionsCard({
  title,
  questions,
}: {
  title: string
  questions: string[]
}) {
  return (
    <ResultCard label={title}>
      <ul className="space-y-2.5">
        {questions.map((q, i) => (
          <li
            key={`${i}-${q.slice(0, 24)}`}
            className="flex gap-2.5 text-sm leading-relaxed text-[#3A2240]"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88ABF]" />
            {q}
          </li>
        ))}
      </ul>
    </ResultCard>
  )
}

function ChecklistCard({ items }: { items: string[] }) {
  return (
    <ResultCard label="Prep Checklist">
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={`${i}-${item.slice(0, 24)}`}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3A2240]"
          >
            <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[#D9C2DD] bg-white" />
            {item}
          </li>
        ))}
      </ul>
    </ResultCard>
  )
}
