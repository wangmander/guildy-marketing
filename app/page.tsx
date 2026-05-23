import Image from "next/image"

import { HeroSection } from "@/components/hero-section"
import { QuickPrepHero } from "@/components/quick-prep-hero"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="bg-[#F5F5F0]">
        <div className="mx-auto flex max-w-4xl items-center px-6 py-4">
          <Image
            src="/images/logo-plum.png"
            alt="Guildy"
            width={122}
            height={27}
            className="h-[28px] w-auto"
            priority
          />
        </div>
      </header>
      <HeroSection />
      <QuickPrepHero />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
