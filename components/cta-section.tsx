import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-[#F5F5F0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl">
            Stop guessing. Start landing.
          </h2>
          <p className="mt-4 text-lg text-[#705D74]">
            Free to start. No credit card.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Button
              asChild
              size="lg"
              className="relative z-10 bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-lg pl-12 pr-10 py-3 h-auto font-medium shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-3"
            >
              <a href="https://app.guildy.ai">
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
