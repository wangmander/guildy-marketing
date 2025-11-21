"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function ConnectInterviewGmailButton() {
  return (
    <Button
      size="lg"
      className="relative z-10 cta-gradient-button rounded-full text-white text-lg px-8 py-3 h-auto font-medium shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
      onClick={() =>
        signIn("google", {
          callbackUrl: "/pipelines"
        })
      }
    >
      Connect Interview Gmail →
    </Button>
  )
}
