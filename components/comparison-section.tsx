import Image from "next/image"
import { Check, X, Zap, Smile, Network, Sparkles, Mail, GitBranch, Target, Bell, Lightbulb } from "lucide-react"

export function ComparisonSection() {
  const comparisons = [
    {
      icon: Zap,
      title: "Confident Interviews",
      description:
        "Preparation is explicit, prioritized, and tailored so you walk into every interview knowing exactly what to say and why.",
    },
    {
      icon: Smile,
      title: "Lower Stress",
      description:
        "Guided structure removes mental overhead so you're not constantly second-guessing what you should be doing next.",
    },
    {
      icon: GitBranch,
      title: "Auto Pipeline Tracking",
      description:
        "Your interview pipeline is built and updated automatically from real signals instead of manual tracking.",
    },
    {
      icon: Target,
      title: "Bespoke Interview Prep",
      description: "Every role and round comes with targeted prep material designed for that specific moment.",
    },
    {
      icon: Network,
      title: "Pipeline Visibility",
      description: "You always know where you stand, what's coming up, and how close you are to an offer.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Timely nudges act like a personal assistant, keeping momentum without adding noise.",
    },
    {
      icon: Lightbulb,
      title: "Job-Specific Guidance",
      description: "Advice adapts to the company, role, and stage instead of relying on generic interview tips.",
    },
    {
      icon: Mail,
      title: "Higher Offer Odds",
      description:
        "Clearer answers, better framing, and stronger signal improve your chances of converting interviews into offers.",
    },
    {
      icon: Sparkles,
      title: "One Command Center",
      description:
        "Everything lives in one place so you're not juggling email, spreadsheets, docs, calendars, and notes.",
    },
  ]

  return (
    <section className="relative py-24 sm:py-32 bg-[#FCFCFA]">
      <div className="relative mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-[#3A2240] sm:text-4xl text-center mb-16 px-6 sm:px-0">
            Life with or without Guildy
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#E8D5EB]">
                  <th className="text-left pb-4 px-3 sm:px-4 pr-6 sm:pr-10 font-semibold text-[#3A2240] text-sm w-[60%] sm:w-auto sm:max-w-[260px] align-bottom">
                    Value
                  </th>
                  <th
                    className="text-center pb-4 px-2 font-semibold text-[#3A2240] text-sm bg-white pt-6 w-[20%] sm:w-[155px] align-bottom border-l border-r border-t border-[#E8D5EB]"
                    style={{
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">With</span>
                      <Image
                        src="/images/logo-plum.png"
                        alt="Guildy"
                        width={120}
                        height={27}
                        className="h-[20px] sm:h-[27px] w-auto"
                      />
                    </div>
                  </th>
                  <th className="text-center pb-4 px-2 font-semibold text-[#3A2240] text-xs sm:text-sm whitespace-nowrap w-[20%] sm:w-[145px] align-bottom">
                    Without Guidly
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => {
                  return (
                    <tr key={index} className="border-b border-[#E8D5EB]">
                      <td className="py-6 px-3 sm:px-4 pr-6 sm:pr-10 w-[60%] sm:w-auto sm:max-w-[260px]">
                        <div className="flex items-start gap-3">
                          <item.icon className="w-5 h-5 text-[#5C2F66] flex-shrink-0 mt-1" />
                          <div>
                            <div className="font-semibold text-[#3A2240] text-base sm:text-lg lg:text-xl mb-1">
                              {item.title}
                            </div>
                            <div className="text-[#705D74] text-xs sm:text-sm lg:text-base leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-2 text-center bg-white shadow-sm border-l border-r border-[#E8D5EB] align-middle w-[20%] sm:w-[155px]">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7A3F8C]">
                          <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                      </td>
                      <td className="py-6 px-2 text-center align-middle w-[20%] sm:w-[145px]">
                        <X className="inline-block w-6 h-6 text-[#B88ABF]" strokeWidth={2.5} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
