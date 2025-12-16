"use client"

import type React from "react"
import type { FocusEvent } from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, XIcon } from "lucide-react"

const roleOptions = [
  { group: "Product Design", items: ["Product Design", "UX / UI Design", "Product Management"] },
  {
    group: "Software Engineering",
    items: [
      "Software Engineering",
      "Data Science / Analytics",
      "AI / Machine Learning",
      "QA / Automation Engineering",
      "DevOps / Cloud Infrastructure",
    ],
  },
  {
    group: "Business & Operations",
    items: [
      "Marketing / Growth",
      "Operations / Strategy",
      "Project Management",
      "Business Analysis",
      "Sales / Customer Success",
    ],
  },
  {
    group: "Creative & Content",
    items: [
      "Graphic Design / Visual Design",
      "Copywriting / Content Strategy",
      "Video / Motion Design",
      "Branding / Communication",
    ],
  },
  {
    group: "Students & Early Career",
    items: ["Student / Recent Graduate", "Bootcamp Graduate", "Career Transitioner"],
  },
  { group: "Other", items: ["HR / Recruiting", "Finance / Accounting", "Education / Training", "Other / Not Listed"] },
]

const referralOptions = [
  "Friend or colleague",
  "Twitter / X",
  "LinkedIn",
  "Google search",
  "Reddit",
  "Newsletter",
  "Podcast",
  "Other",
]

interface EarlyAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EarlyAccessModal({ open, onOpenChange }: EarlyAccessModalProps) {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [referral, setReferral] = useState("")
  const [fullName, setFullName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        // Small delay to let keyboard appear
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 300)
      }
    }

    document.addEventListener("focusin", handleFocus)
    return () => document.removeEventListener("focusin", handleFocus)
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !role || !referral) return

    setIsSubmitting(true)

    // Prepare data for Supabase (will be connected later)
    const formData = {
      interview_gmail: email,
      role_field: role || null,
      referral_source: referral || null,
      full_name: fullName || null,
      created_at: new Date().toISOString(),
    }

    console.log("[v0] Form data to be sent to Supabase:", formData)

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset and close after success
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
      setRole("")
      setReferral("")
      setFullName("")
      onOpenChange(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#A79CA7]/70 backdrop-blur-[25px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="w-[calc(100%-2rem)] sm:w-full sm:max-w-[490px] max-h-[85dvh] overflow-y-auto bg-[#F5F5F0] border-none rounded-2xl p-6 sm:p-8 fixed top-[5%] left-[50%] translate-x-[-50%] translate-y-0 sm:top-[50%] sm:translate-y-[-50%] z-50 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15),0_10px_30px_-10px_rgba(0,0,0,0.08)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            <XIcon className="h-5 w-5 text-[#705D74]" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-[#3A2240]">Request early access</DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="text-xl font-medium text-[#3A2240] mb-2">You're on the list!</div>
              <p className="text-[#705D74]">We'll reach out soon with your access.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#3A2240] font-medium">
                  Interview Gmail <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border-[#3A2240]/10 rounded-lg h-11 text-[#3A2240] placeholder:text-[#705D74]"
                />
                <p className="text-xs text-[#4F46E5] font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  Must be the same Gmail you apply to companies with
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-[#3A2240] font-medium">
                  Field <span className="text-red-500">*</span>
                </Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger className="bg-white border-[#3A2240]/10 rounded-lg h-11 text-[#3A2240]">
                    <SelectValue placeholder="Select your field" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-white border-[#3A2240]/10 rounded-lg max-h-[200px]"
                    position="popper"
                    sideOffset={5}
                  >
                    {roleOptions.map((group) => (
                      <div key={group.group}>
                        <div className="px-2 py-1.5 text-xs font-semibold text-[#705D74] uppercase tracking-wide">
                          {group.group}
                        </div>
                        {group.items.map((item) => (
                          <SelectItem key={item} value={item} className="text-[#3A2240]">
                            {item}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="referral" className="text-[#3A2240] font-medium">
                  Where you heard about Guildy <span className="text-red-500">*</span>
                </Label>
                <Select value={referral} onValueChange={setReferral} required>
                  <SelectTrigger className="bg-white border-[#3A2240]/10 rounded-lg h-11 text-[#3A2240]">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-white border-[#3A2240]/10 rounded-lg max-h-[200px]"
                    position="popper"
                    sideOffset={5}
                  >
                    {referralOptions.map((option) => (
                      <SelectItem key={option} value={option} className="text-[#3A2240]">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-[#705D74]">
                  Full name <span className="text-[#705D74]/60">(optional)</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white border-[#3A2240]/10 rounded-lg h-11 text-[#3A2240] placeholder:text-[#705D74]"
                />
              </div>

              <div className="space-y-3 pb-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || !email || !role || !referral}
                  className="w-full bg-[#2C1731] hover:bg-[#2C1731]/90 rounded-full text-white text-base py-3 h-12 font-medium flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Request
                      <span className="text-lg">👑</span>
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-[#705D74]">Slay interviews, close offers.</p>
              </div>
            </form>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  )
}
