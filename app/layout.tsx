import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

import { PostHogProvider } from "@/components/posthog-provider"
import "./globals.css"
import "./guildy-styles.css"
import "./guildy-sections.css"

// Self-hosted via next/font so there is no render-blocking external request.
// The design's --font-display / --font-serif point at these variables.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const siteUrl = "https://guildy.ai"
const title = "Guildy: Walk in ready"
const description =
  "Free AI interview prep and the command center for your whole job hunt. Paste the job, get prep tuned to that exact role and round, and walk in calm because you did the work."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Guildy",
  keywords: [
    "interview prep",
    "AI interview prep",
    "job pipeline",
    "job tracker",
    "hiring manager interview",
    "full loop interview",
    "stage-specific prep",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Guildy",
    title,
    description,
    // og:image swap point: drop a 1200x630 share asset in /public and add it
    // here (and to twitter.images) when it lands. Text tags ship now.
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Guildy: Walk in ready" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${bricolage.variable} ${playfair.variable}`}
      >
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
