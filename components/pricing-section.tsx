import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const included = [
  "Web-grounded company research for every round",
  "All Full Loop rounds covered, round-aware prep",
  "Comp comparison across your active pipeline",
  "Cancel anytime in the Stripe portal. No annual lock-in.",
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-[#FAFAF7] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#A69F8F]">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl">
            One plan. Built for active job seekers.
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-[#E8D5EB] sm:p-10">
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#3A2240]">Guildy Deep</h3>
                <p className="mt-1 text-sm text-[#705D74]">Everything you need to land the role.</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#3A2240]">$19.99</div>
                <div className="text-sm text-[#705D74]">per month</div>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#7A3F8C]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-base text-[#3A2240]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-lg py-3 h-auto font-medium shadow-lg transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-3"
              >
                <a href="https://app.guildy.ai">
                  Start now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
