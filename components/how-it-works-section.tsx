"use client"

import Image from "next/image"

const steps = [
  {
    name: "Connect Gmail",
    description: "Secure sign-in.",
    screenshot: "/images/gmail-inbox-step1.png",
    alt: "Gmail inbox showing interview emails automatically detected by Guildy",
  },
  {
    name: "Auto-organized pipelines",
    description: "No manual tracking, visualize all job's stages.",
    screenshot: "/images/job-pipelines-step2.png",
    alt: "Guildy job pipeline dashboard showing tracked applications",
  },
  {
    name: "Prepare effortlessly",
    description: "AI-powered prep questions and tips.",
    screenshot: "/images/voice-interview-step3.png",
    alt: "AI-powered voice interview practice interface",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative bg-gradient-to-b from-background via-muted/20 to-background py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-20 right-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl" />
      <div className="absolute bottom-20 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-lg font-medium text-gray-600 sm:text-xl">How It Works</h1>
        </div>
        <div className="mx-auto mt-7 max-w-2xl sm:mt-9 lg:mt-11 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col items-start text-center group">
                <div className="w-full flex flex-col items-center mb-9">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <span className="text-sm font-medium text-accent">Step {index + 1}</span>
                    <div className="mt-1 text-2xl">{step.name}</div>
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-muted-foreground">{step.description}</dd>
                </div>
                <div className="w-full max-w-sm relative">
                  <a href="https://app.guildy.ai/api/auth/signin">
                    <div className="relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                      <Image
                        src={step.screenshot || "/placeholder.svg"}
                        alt={step.alt}
                        width={400}
                        height={300}
                        className="w-full rounded-xl shadow-xl ring-1 ring-gray-900/10"
                      />
                      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-accent/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-105" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
