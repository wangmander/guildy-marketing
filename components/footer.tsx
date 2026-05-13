"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("support@guildy.ai")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-[#412A45]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-16">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-20m-20flat-20-28night-29.png"
                alt="Guildy"
                width={125}
                height={29}
                className="h-6.5 w-auto"
                style={{ height: "26px" }}
              />
            </div>
            <p className="text-sm text-gray-300">
              Stage-specific interview prep tied to your live job pipeline.
            </p>
            <p className="mt-3 text-sm text-gray-300">
              <a
                href="mailto:support@guildy.ai"
                className="hover:text-white transition-colors"
              >
                support@guildy.ai
              </a>
            </p>
          </div>

          <div className="pt-[30px] lg:pt-0">
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://app.guildy.ai"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  app.guildy.ai
                </a>
              </li>
              <li>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm text-gray-300 hover:text-white transition-colors text-left"
                >
                  {copied ? "Email copied" : "Contact"}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
        <p className="text-sm text-gray-300">© {new Date().getFullYear()} Guildy. All rights reserved.</p>
      </div>

      <div className="w-full relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#412A45] to-transparent z-10" />
        <Image
          src="/images/footer-illustration-purple.png"
          alt="Person at control panel dashboard"
          width={1920}
          height={800}
          className="w-full h-auto"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAQMDBAMAAAAAAAAAAAAAAQIDEQAEBQYSITFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMhMf/aAAwDAQACEEMPAD0AvM1kshp58sXV4ww6ygbUtKCSlI9nhSlVjm0LR//"
          loading="eager"
        />
      </div>
    </footer>
  )
}
