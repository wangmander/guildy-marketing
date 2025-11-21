"use client"

import { Button } from "@/components/ui/button"
import { Shield, Eye, ArrowRight, DollarSign } from 'lucide-react'

export function CTASection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Land your job with Guildy
          </h1>
          <div className="mt-10 flex items-center justify-center">
            <a href="https://app.guildy.ai/api/auth/signin">
              <Button
                size="lg"
                className="relative z-10 cta-gradient-button rounded-full text-white text-lg px-8 py-3 h-auto font-medium shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
              >
                Connect Interview Gmail
                <ArrowRight className="w-4 h-4 bounce-arrow" />
              </Button>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
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
                  <div className="w-5 h-[1.5px] bg-muted-foreground rotate-[-25deg]" />
                </div>
              </div>
              <span>Free to try</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
