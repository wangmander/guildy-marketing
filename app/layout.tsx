import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const siteUrl = "https://guildy.ai"
const title = "Guildy: Applying is easy. Landing is hard."
const description = "Track every application. Prep for every round."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Guildy",
  keywords: [
    "interview prep",
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
    images: [
      {
        url: "/landing/9-manyjobcards.png",
        alt: "Guildy job pipeline with many active applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/landing/9-manyjobcards.png"],
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
      <body className={`font-sans antialiased ${playfair.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
