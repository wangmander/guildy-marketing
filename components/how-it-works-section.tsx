import Image from "next/image"

type Step = {
  name: string
  description: string
  screenshot?: string
  alt?: string
}

const steps: Step[] = [
  {
    name: "Add a job",
    description: "Paste the JD or fill it manually. No inbox connection required.",
  },
  {
    name: "Build your pipeline",
    description: "Drag jobs through Applied, Screen, Hiring Manager, Full Loop, Offer.",
    screenshot: "/images/pipelines-screenshot.png",
    alt: "Guildy job pipeline dashboard",
  },
  {
    name: "Generate stage-aware prep",
    description:
      "Quick prep is free. Deep Prep is $19.99/mo with company-grounded positioning, risk counters, and answer plans.",
    screenshot: "/images/prepare-effortlessly.png",
    alt: "Stage-aware interview prep",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative bg-[#F5F5F0] py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-sm font-medium text-[#A69F8F] tracking-widest uppercase">
            HOW IT WORKS
          </h1>
        </div>
        <div className="mx-auto mt-7 max-w-2xl sm:mt-9 lg:mt-11 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.name} className="flex flex-col items-start text-center group">
                <div className="w-full flex flex-col items-center mb-9">
                  <dt className="text-base font-semibold leading-7 text-[#3A2240]">
                    <span className="text-sm font-medium text-accent">Step {index + 1}</span>
                    <div className="mt-1 text-2xl">{step.name}</div>
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-[#705D74]">{step.description}</dd>
                </div>
                <div className="w-full relative aspect-square bg-white rounded-xl shadow-xl ring-1 ring-[#E8D5EB]">
                  <div className="relative h-full p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <div className="relative w-full h-full">
                      {step.screenshot ? (
                        <Image
                          src={step.screenshot}
                          alt={step.alt ?? step.name}
                          fill
                          className="object-contain rounded-xl"
                        />
                      ) : (
                        // Placeholder. User to replace with product screenshot for "Add a job".
                        <div className="w-full h-full rounded-xl bg-[#F5F5F0] ring-1 ring-[#E8D5EB] flex items-center justify-center text-sm text-[#A69F8F]">
                          Screenshot coming soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
