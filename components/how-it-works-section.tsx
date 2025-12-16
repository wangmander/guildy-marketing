"use client"

import { useState } from "react"
import Image from "next/image"
import { EarlyAccessModal } from "./early-access-modal"

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
    screenshot: "/images/pipelines-screenshot.png",
    alt: "Guildy job pipeline dashboard showing tracked applications",
  },
  {
    name: "Prepare effortlessly",
    description: "AI-powered prep questions and tips.",
    screenshot: "/images/prepare-effortlessly.png",
    alt: "AI-powered interview preparation with sample questions for candidates and interviewers",
  },
]

export function HowItWorksSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative bg-[#F5F5F0] py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-sm font-medium text-[#A69F8F] tracking-widest uppercase">HOW IT WORKS</h1>
        </div>
        <div className="mx-auto mt-7 max-w-2xl sm:mt-9 lg:mt-11 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col items-start text-center group">
                <div className="w-full flex flex-col items-center mb-9">
                  <dt className="text-base font-semibold leading-7 text-[#3A2240]">
                    <span className="text-sm font-medium text-accent">Step {index + 1}</span>
                    <div className="mt-1 text-2xl">{step.name}</div>
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-[#705D74]">{step.description}</dd>
                </div>
                <div className="w-full relative aspect-square bg-white rounded-xl shadow-xl ring-1 ring-gray-900/10">
                  <div
                    onClick={() => setModalOpen(true)}
                    className="relative h-full p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={step.screenshot || "/placeholder.svg"}
                        alt={step.alt}
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
