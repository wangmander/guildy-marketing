"use client"

import Image from "next/image"
import { useState } from "react"

export function ProductShowcaseSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sign up with your interview gmail
          </h1>
          <h2 className="mt-6 text-lg text-gray-600 sm:text-xl">
            Guildy auto-detects interview gmails to build job pipelines, stages and interview prep
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <a href="https://app.guildy.ai/api/auth/signin">
            <div className="rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-12 shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 transition-all duration-300 hover:shadow-purple-500/20 hover:scale-[1.02] cursor-pointer">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-CxPh4cVLtA20L6PG9z3jPuocRSpz0Q.png"
                alt="Gmail integration diagram showing how Guildy connects with your Gmail to auto-detect interview emails"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
