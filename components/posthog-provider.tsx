"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import posthog from "posthog-js"

let initialized = false

function initPostHog(): boolean {
  if (initialized) return true
  if (typeof window === "undefined") return false
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  if (!key) return false
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    cross_subdomain_cookie: true,
    person_profiles: "identified_only",
    capture_pageview: false,
  })
  initialized = true
  return true
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const landingFired = useRef(false)

  useEffect(() => {
    if (landingFired.current) return
    if (!initPostHog()) return

    posthog.capture("marketing_landing_view", {
      utm_source: searchParams?.get("utm_source") || undefined,
      utm_medium: searchParams?.get("utm_medium") || undefined,
      utm_campaign: searchParams?.get("utm_campaign") || undefined,
      utm_content: searchParams?.get("utm_content") || undefined,
    })
    landingFired.current = true
  }, [searchParams])

  return <>{children}</>
}
