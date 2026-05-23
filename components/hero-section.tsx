import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-[#F5F5F0]">
      <Image
        src="/images/logo-plum.png"
        alt="Guildy"
        width={122}
        height={27}
        priority
        className="absolute left-6 top-4 z-30 h-[28px] w-auto"
      />
      <div className="relative z-20 mx-auto max-w-4xl px-6 pt-12 pb-4 sm:py-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h1 className="max-w-3xl text-balance text-center text-4xl font-bold leading-tight tracking-tight text-[#3A2240] md:text-6xl">
            Applying is easy. Landing is hard.
          </h1>
          <p className="max-w-2xl text-pretty text-center text-lg leading-relaxed text-[#705D74] sm:text-xl">
            Track every application. Prep for every round.
          </p>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/landing/9-manyjobcards.png"
            aria-label="Guildy product demo"
            className="relative z-30 aspect-video w-full rounded-2xl border-0 object-cover shadow-2xl outline-none"
          >
            <source src="/videos/hero-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
