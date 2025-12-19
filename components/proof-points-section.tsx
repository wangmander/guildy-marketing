export function ProofPointsSection() {
  const proofPoints = [
    {
      stat: "30%",
      description: "Users complete 30% more interviews",
    },
    {
      stat: "80%",
      description: "Reduce tracking time by 80%",
    },
    {
      stat: "<30 mins",
      description: "Build interview confidence in <30 mins",
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {proofPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#3A2240] mb-3">{point.stat}</div>
              <div className="text-base sm:text-lg text-[#705D74]">{point.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
