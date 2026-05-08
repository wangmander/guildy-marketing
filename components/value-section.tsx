export function ValueSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FAFAF7]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl mb-6">
            Don't interview alone
          </h1>
          <h2 className="text-lg text-[#705D74] sm:text-xl">
            We've got your back at every round. No spreadsheets, no guesswork. Guildy shows where
            you stand and helps you nail the next conversation.
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 group">
              <h3 className="text-xl font-semibold text-[#3A2240]">Track All Your Applications</h3>
              <p className="text-[#705D74]">
                See all your job applications in one place with clear pipeline stages and next
                steps.
              </p>
              <div className="relative rounded-2xl bg-card p-6 shadow-xl ring-1 ring-[#E8D5EB] transition-transform duration-300 group-hover:scale-[1.02] aspect-[3/4] flex items-center justify-center">
                <img
                  src="/images/pipelines-three-cards.png"
                  alt="Guildy pipeline cards"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4 group">
              <h3 className="text-xl font-semibold text-[#3A2240]">Never Miss Important Details</h3>
              <p className="text-[#705D74]">
                Get detailed views of each application with status tracking and job information.
              </p>
              <div className="relative rounded-2xl bg-card p-6 shadow-xl ring-1 ring-[#E8D5EB] transition-transform duration-300 group-hover:scale-[1.02] aspect-[3/4] flex items-center justify-center">
                <img
                  src="/images/never-miss-details.png"
                  alt="Job detail view"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
