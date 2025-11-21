"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const LOGIN_URL =
  "https://app.guildy.ai/api/auth/signin?callbackUrl=/pipelines"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden stripe-gradient-hero">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-26 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT SIDE — TEXT */}
          <div className="text-left">
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%20flat%20%28night%29-mzJ5Z4IlMwMU9IsrhJVVz6S23yYI5f.png"
                alt="Guildy"
                width={162}
                height={36}
                className="h-10 w-auto"
              />
            </div>

            <h1 className="text-balance text-6xl font-bold tracking-tight text-[#111111] sm:text-8xl lg:text-7xl xl:text-8xl">
              Where interviews get slayed
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed sm:text-xl lg:text-lg xl:text-xl sm:whitespace-nowrap">
              <span className="text-black">Track every pipeline. Prep every round. </span>
              <span className="text-black font-medium">Close the damn offer.</span>
            </p>

            {/* CTA BUTTON */}
            <div className="mt-10 flex items-start gap-x-6">
              <div className="flex flex-col items-start gap-3">
                <a href={LOGIN_URL}>
                  <Button
                    size="lg"
                    className="relative z-10 cta-gradient-button rounded-full text-white text-lg px-8 py-3 h-auto font-medium shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
                  >
                    Connect Interview Gmail
                    <ArrowRight className="w-4 h-4 bounce-arrow" />
                  </Button>
                </a>

                <div className="relative z-10 text-sm text-gray-700 ml-2">
                  <span>Free to try</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE CTA */}
          <div className="relative">
            <a href={LOGIN_URL}>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none float-animation cursor-pointer">
                <Image
                  src="/images/job-pipelines-dashboard.png"
                  alt="Guildy job pipeline dashboard showing tracked applications"
                  width={800}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl ring-1 ring-black/10"
                  priority
                />
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 blur-2xl transform scale-105" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
