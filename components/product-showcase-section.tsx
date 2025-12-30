"use client"

import { useState } from "react"
import Image from "next/image"
import { EarlyAccessModal } from "./early-access-modal"

export function ProductShowcaseSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FAFAF7]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl">
            Sign up with your interview gmail
          </h1>
          <h2 className="mt-6 text-lg text-[#705D74] sm:text-xl">
            Guildy auto-detects interview gmails to build job pipelines, stages and interview prep
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div
            onClick={() => setModalOpen(true)}
            className="rounded-3xl bg-white p-8 sm:p-10 shadow-2xl ring-1 ring-[#E8D5EB] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <Image
              src="/images/1.png"
              alt="Gmail integration diagram showing how Guildy connects with your Gmail to auto-detect interview emails"
              width={1200}
              height={800}
              className="w-full"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center space-y-2">
          <p className="text-sm sm:text-base text-[#705D74] font-medium">
            Only read-only access — we never send, delete, or modify your emails.
          </p>
          <p className="text-sm sm:text-base text-[#705D74]">Minimal data stored — your inbox stays private.</p>
        </div>
      </div>
      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
