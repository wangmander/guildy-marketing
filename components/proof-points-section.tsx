export function ProofPointsSection() {
  const proofPoints = [
    {
      title: "Stage-aware prep",
      description:
        "Hiring Manager prep is different from Bar Raiser prep. Generic tips are failure.",
    },
    {
      title: "Grounded in real research",
      description:
        "Deep Prep performs live company research before generating positioning and risks.",
    },
    {
      title: "Built for the moment that matters",
      description:
        "Designed for active job seekers in the layoff cycle. Calm UI for high-stakes prep.",
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {proofPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-[#3A2240] mb-3">
                {point.title}
              </div>
              <div className="text-base sm:text-lg text-[#705D74]">{point.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
