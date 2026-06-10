import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { TryIt } from "@/components/try-it"
import { Narrative } from "@/components/narrative"
import { HowTiers } from "@/components/how-tiers"
import { CloseCta } from "@/components/close-cta"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <TryIt />
      <Narrative />
      <HowTiers />
      <CloseCta />
      <SiteFooter />
      <ScrollReveal />
    </>
  )
}
