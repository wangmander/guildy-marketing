"use client"

import posthog from "posthog-js"

const APP_ORIGIN = "https://app.guildy.ai"
const SOURCE_FALLBACK = "hero-quick-prep"

// Session channel: try-it writes the minted handoff UUID here after a real
// generate. Every "Get started free" CTA reads it at click time, so a prep
// generated this session carries into signup -> onboarding -> first job.
export const HANDOFF_STORAGE_KEY = "guildy_handoff_id"

function readHandoffId(): string | null {
  if (typeof window === "undefined") return null
  try {
    return window.sessionStorage.getItem(HANDOFF_STORAGE_KEY)
  } catch {
    return null
  }
}

function signupUrl(): string {
  const handoff = readHandoffId()
  return handoff
    ? `${APP_ORIGIN}/signup?handoff=${encodeURIComponent(handoff)}`
    : `${APP_ORIGIN}/signup?source=${SOURCE_FALLBACK}`
}

// Shared signup CTA. Fires unauth_signup_clicked with send_instantly BEFORE
// navigation so the event no longer dies mid-nav, then routes to signup
// carrying the handoff UUID when a demo prep exists this session.
export function GetStartedButton({
  className,
  children,
  location,
}: {
  className: string
  children: React.ReactNode
  location: string
}) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = signupUrl()
    const handoff = readHandoffId()
    posthog.capture(
      "unauth_signup_clicked",
      { location, has_handoff_id: !!handoff },
      { send_instantly: true },
    )
    window.location.href = href
  }

  return (
    <a className={className} href={`${APP_ORIGIN}/signup`} onClick={onClick}>
      {children}
    </a>
  )
}
