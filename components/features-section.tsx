import Image from "next/image"

const features = [
  {
    image: "/landing/2b-jobextracted-skippable.png",
    alt: "Guildy extracting structured job details from a pasted job description",
    title: "Your job pipeline, your way",
    description:
      "Paste a job by URL, plain text, or screenshot. Move it through Applied, Screen, Hiring Manager, Full Loop, and Offer. You stay in control of every stage.",
  },
  {
    image: "/landing/8a-deepprep.png",
    alt: "Interview prep brief tailored to a specific Guildy round",
    title: "Stage-specific prep",
    description:
      "Screen prep frames fit. Hiring Manager prep frames priorities. Full Loop prep frames executive presence. Every round gets the angle and depth it actually needs.",
  },
  {
    image: "/landing/8b-deepprepquestions.png",
    alt: "Round-specific interview questions generated for a Full Loop round",
    title: "Round-aware Full Loop",
    description:
      "Rename a round inside the Loop and prep adapts to that round's framing. A System Design round and a Behavioral round get different briefs, on the same job.",
  },
  {
    image: "/landing/4-manyjobs.png",
    alt: "Comp comparison view across multiple active job applications",
    title: "Comp comparison matrix",
    description:
      "See total comp side-by-side across your active applications. Compare offers and live pipelines without spreadsheet gymnastics.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#F5F5F0] py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#A69F8F]">
            What's in Guildy
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl">
            Built to land the job, not just track it
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E8D5EB] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F0]">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(min-width: 1024px) 540px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-[#3A2240]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#705D74]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
