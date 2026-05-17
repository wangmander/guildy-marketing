import { HeroSection } from "@/components/hero-section"
import { QuickPrepHero } from "@/components/quick-prep-hero"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuickPrepHero />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
