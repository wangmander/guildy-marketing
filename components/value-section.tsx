"use client"

import { useState } from "react"

export function ValueSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Don't interview alone
          </h1>
          <h2 className="text-lg text-gray-600 sm:text-xl">
            We've got your back at every round. No spreadsheets, no guesswork. Guildy shows where you stand and
            optimizes getting you hired.
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 group">
              <h3 className="text-xl font-semibold text-foreground">Track All Your Applications</h3>
              <p className="text-muted-foreground">
                See all your job applications in one place with clear pipeline stages and next steps.
              </p>
              <a href="https://app.guildy.ai/api/auth/signin">
                <div className="relative rounded-2xl bg-card p-6 shadow-xl ring-1 ring-border transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer">
                  <img
                    src="/images/job-pipelines-dashboard.png"
                    alt="Guildy job pipelines dashboard showing multiple job applications with their current status and next steps"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-105" />
                </div>
              </a>
            </div>

            <div className="space-y-4 group">
              <h3 className="text-xl font-semibold text-foreground">Never Miss Important Details</h3>
              <p className="text-muted-foreground">
                Get detailed views of each application with email tracking and job information.
              </p>
              <a href="https://app.guildy.ai/api/auth/signin">
                <div className="relative rounded-2xl bg-card p-6 shadow-xl ring-1 ring-border transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer">
                  <img
                    src="/images/job-details-view.png"
                    alt="Guildy job details view showing interview scheduling email and application timeline"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-105" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
