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
    <footer className="bg-[#0f0a1a] border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%20%28night%29-NU9r9uIyOYuLHxb9Y3UilQgB9q20e2.png"
                alt="Guildy"
                width={125}
                height={29}
                className="h-6.5 w-auto"
                style={{ height: '26px' }}
              />
            </div>
            {/* </CHANGE> */}
            <p className="text-sm text-gray-400">
              Guildy - Your AI-powered job pipeline tracker. Land your next role with confidence.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                >
                  {copied ? "Email copied!" : "Contact"}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32 border-t border-gray-800 pt-10">
          <p className="text-sm text-gray-400 text-center">© {new Date().getFullYear()} Guildy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
