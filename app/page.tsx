import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProofPointsSection } from "@/components/proof-points-section"
import { ValueSection } from "@/components/value-section"
import { InterviewPrepSection } from "@/components/interview-prep-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <ProofPointsSection />
      <ValueSection />
      <InterviewPrepSection />
      <ProductShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  )
}
