import Image from "next/image"

export function InterviewPrepSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F5F0]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl mb-6">
            Bespoke Interview Prep
          </h1>
          <h2 className="text-lg text-[#705D74] sm:text-xl">
            Role-specific questions tailored to your job description and company
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-4 sm:p-6 shadow-xl ring-1 ring-[#E8D5EB] transition-all duration-300 hover:scale-[1.01]">
            <Image
              src="/images/image.png"
              alt="Interview prep with role-specific questions"
              width={800}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
