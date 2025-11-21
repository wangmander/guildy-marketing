"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function ConnectInterviewGmailButton() {
  return (
    <Button
      className="bg-black text-white px-6 py-3 rounded-full text-lg"
      onClick={() =>
        signIn("google", {
          callbackUrl: "https://app.guildy.ai/pipelines"
        })
      }
    >
      Connect Interview Gmail →
    </Button>
  )
}
