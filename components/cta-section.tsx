"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Eye, ArrowRight, DollarSign } from "lucide-react"
import { EarlyAccessModal } from "@/components/early-access-modal"

export function CTASection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-[#F5F5F0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl">
            Land your job with Guildy
          </h1>
          <div className="mt-10 flex items-center justify-center">
            <Button
              size="lg"
              onClick={() => setModalOpen(true)}
              className="relative z-10 bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-lg pl-16 pr-14 py-3 h-auto font-medium shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-3"
            >
              Request early access
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-[#705D74]">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>Read-only Gmail access</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="relative">
                <DollarSign className="h-4 w-4" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-[1.5px] bg-[#705D74] rotate-[-25deg]" />
                </div>
              </div>
              <span>Free to try</span>
            </div>
          </div>
        </div>
      </div>

      <EarlyAccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
