import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
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
                  asChild
                  size="lg"
                  className="relative z-30 bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-lg pl-14 pr-12 py-3 h-auto font-medium shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-3"
                >
                  <a href="https://app.guildy.ai">
                    Get started free
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <div className="relative z-30 text-sm text-[#705D74] ml-2">
                  <span>Free to try</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-30 mx-auto w-full max-w-md lg:max-w-lg overflow-visible p-4">
              <video
                src="/landing/hero-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/landing/hero-poster.jpg"
                className="rounded-lg shadow-lg w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
