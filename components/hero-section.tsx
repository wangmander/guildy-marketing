"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { EarlyAccessModal } from "@/components/early-access-modal"

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative bg-[#F5F5F0]">
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-20 sm:py-26 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="text-left">
            <div className="mb-4">
              <Image src="/images/logo-plum.png" alt="Guildy" width={122} height={27} className="h-[30px] w-auto" />
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-[#3A2240] sm:text-7xl lg:text-6xl xl:text-7xl">
              Where interviews get slayed
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed sm:text-xl lg:text-lg xl:text-xl sm:whitespace-nowrap">
              <span className="text-[#705D74]">Track every pipeline. Prep every round. </span>
              <span className="text-[#3A2240] font-medium">Close the damn offer.</span>
            </p>
            <div className="mt-10 flex items-start gap-x-6">
              <div className="flex flex-col items-start gap-3">
                <Button
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="relative z-30 bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-lg pl-14 pr-12 py-3 h-auto font-medium shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-3"
                >
                  Request early access
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <div className="relative z-30 text-sm text-[#705D74] ml-2">
                  <span>Free to try</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div onClick={() => setModalOpen(true)} className="cursor-pointer">
              <div className="relative z-30 mx-auto w-full max-w-md lg:max-w-lg overflow-visible p-4">
                <div className="relative w-full float-animation-1 scale-90 -ml-[30px] -mt-[20px]">
                  <Image
                    src="/images/pipelines-screenshot.png"
                    alt="Guildy Interview Pipelines dashboard"
                    width={600}
                    height={450}
                    className="w-full rounded-2xl shadow-2xl ring-1 ring-black/10"
                    priority
                  />
                </div>

                <div className="absolute top-[121px] right-4 z-10 scale-[0.765] origin-top-right float-animation-2">
                  <Image
                    src="/images/hero-top-card.png"
                    alt="Interview Questions - What They Might Ask and What You Should Ask"
                    width={600}
                    height={450}
                    className="w-full rounded-2xl shadow-2xl ring-1 ring-black/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
