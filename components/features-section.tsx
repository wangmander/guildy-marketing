import Image from "next/image"

type Block = {
  eyebrow: string
  heading: string
  body: string
  image: string
  alt: string
}

const blocks: Block[] = [
  {
    eyebrow: "Pipeline tracking",
    heading: "Track every interview, in one place",
    body: "Paste a JD by URL, plain text, or screenshot. Guildy parses company, role, and comp, and slots the job into your pipeline. Move cards through Applied, Screen, Hiring Manager, Full Loop, and Offer. Excel-grade tracking, without the spreadsheet.",
    image: "/landing/2b-jobextracted-skippable.png",
    alt: "Add a job modal showing pasted JD auto-filling company Northstack Labs, role Senior Backend Engineer, and comp range",
  },
  {
    eyebrow: "Stage-specific prep",
    heading: "Prep tuned to every round",
    body: "Screen rounds get warm-up framing. Hiring Manager rounds get leadership scope. Full Loop rounds get executive presence. Guildy generates prep that matches the actual stage you're in, not the same generic Q&A list everyone else uses.",
    image: "/landing/8a-deepprep.png",
    alt: "Deep Prep view for Verisol Senior Platform Engineer Hiring Manager round, showing weighted topic breakdown",
  },
  {
    eyebrow: "Round-aware loops",
    heading: "Different brief per loop round",
    body: "A System Design round and a Behavioral round inside the same Full Loop need different briefs. Guildy generates round-specific questions and answer plans so you walk into each one knowing exactly what they're testing.",
    image: "/landing/8b-deepprepquestions.png",
    alt: "Deep Prep questions grouped by category, Leadership Conflict and Background sections expanded with answer plan",
  },
  {
    eyebrow: "Comp at a glance",
    heading: "See comp without the spreadsheet",
    body: "Every live application shows its total comp range right on the card. Compare offers and live pipelines at a glance, no copy-pasting between tabs, no separate sheet.",
    image: "/landing/4-manyjobs.png",
    alt: "Applied column with five jobs visible, each showing salary range",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-white pt-24 sm:pt-32 pb-8 sm:pb-12">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[#A69F8F]">
            What it does
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-[#3A2240] sm:text-5xl lg:text-[56px]">
            Built for landing, not just tracking
          </h2>
        </div>
      </div>

      {blocks.map((block, index) => {
        const imageFirst = index % 2 === 0
        return (
          <div
            key={block.heading}
            className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 first:pt-16 first:sm:pt-20"
          >
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
              <div
                className={
                  imageFirst
                    ? "md:col-span-7 md:order-1"
                    : "md:col-span-7 md:order-2"
                }
              >
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[#E8D5EB]">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="block h-auto w-full"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div
                className={
                  imageFirst
                    ? "md:col-span-5 md:order-2"
                    : "md:col-span-5 md:order-1"
                }
              >
                <div className="max-w-[480px]">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#A69F8F]">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-[#3A2240] sm:text-4xl">
                    {block.heading}
                  </h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-[#705D74] sm:text-lg">
                    {block.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
