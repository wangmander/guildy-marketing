"use client"

import { useState } from "react"
import Image from "next/image"
import { EarlyAccessModal } from "./early-access-modal"

export function ProductShowcaseSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F5F0]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl">
            Sign up with your interview gmail
          </h1>
          <h2 className="mt-6 text-lg text-[#705D74] sm:text-xl">
            Guildy auto-detects interview gmails to build job pipelines, stages and interview prep
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div
            onClick={() => setModalOpen(true)}
            className="rounded-3xl bg-white p-12 shadow-2xl ring-1 ring-gray-200/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
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
      </div>
      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
