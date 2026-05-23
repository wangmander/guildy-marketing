import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-[#F5F5F0]">
      <div className="relative z-20 mx-auto max-w-4xl px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h1 className="max-w-3xl text-balance text-center text-4xl font-bold leading-tight tracking-tight text-[#3A2240] md:text-6xl">
            Applying is easy. Landing is hard.
          </h1>
          <p className="max-w-2xl text-pretty text-center text-lg leading-relaxed text-[#705D74] sm:text-xl">
            Track every application. Prep for every round.
          </p>
          <div className="relative z-30 aspect-video w-full overflow-hidden rounded-2xl bg-[#F5F5F0] shadow-2xl transform-gpu">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/landing/9-manyjobcards.png"
              aria-label="Guildy product demo"
              className="absolute inset-0 h-full w-full border-0 object-cover outline-none"
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="relative z-30 bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-lg pl-10 pr-8 py-3 h-auto font-medium shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-3"
            >
              <a href="https://app.guildy.ai">
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <a
              href="#features"
              className="relative z-30 text-base font-medium text-[#3A2240] hover:text-[#2C1731] underline underline-offset-4 decoration-[#B88ABF]"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
