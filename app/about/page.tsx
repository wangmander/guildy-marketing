"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">About Guildy</h1>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Job searching has turned into a full-time operations problem. When you're running multiple interview
              pipelines, tracking communication threads, scheduling screens, and preparing for every stage, a simple
              inbox turns into chaos fast.
            </p>

            <p>
              I've lived this personally. I tried spreadsheets, notes, reminders, and inbox hacks. Still dropped
              threads, prepped reactively, and wasted time switching context instead of sharpening performance.
            </p>

            <p>
              Guildy is built to solve that. It gives candidates one command center for interview readiness and
              communication intelligence. No more scattered notes. No more spreadsheet gymnastics. No more wondering
              where you stand or what to do next.
            </p>

            <p>
              Guildy turns your inbox into a structured, focused interview system so you can show up ready, stay
              organized, and convert opportunities into offers.
            </p>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p>
                Bring clarity, structure, and execution quality to interviewing, so candidates can compete like pros and
                win the roles they deserve.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Company</h2>
              <div className="space-y-2">
                <p>
                  <strong>Guildy.ai, Inc.</strong>
                </p>
                <p>San Francisco, CA</p>
                <p>
                  <a href="https://guildy.ai" className="text-accent hover:underline">
                    https://guildy.ai
                  </a>
                </p>
                <p>
                  <a href="mailto:contact@guildy.ai" className="text-accent hover:underline">
                    contact@guildy.ai
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
