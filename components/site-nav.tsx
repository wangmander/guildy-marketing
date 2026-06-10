"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

import { GetStartedButton } from "@/components/get-started-button"

// Ports the app.js nav behavior: .scrolled past 30px, and .on-light once we
// pass the try-it band so the chrome flips against the lighter sections.
export function SiteNav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      const y = window.scrollY
      nav.classList.toggle("scrolled", y > 30)
      const tryit = document.getElementById("tryit")
      if (tryit) {
        const lightFrom = tryit.offsetTop + tryit.offsetHeight - 120
        nav.classList.toggle("on-light", y > lightFrom)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <a className="brand" href="#top" aria-label="Guildy home">
        <Image
          src="/images/logo-plum.png"
          alt="Guildy"
          width={122}
          height={27}
          priority
          className="brand__logo"
        />
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#tryit">
          Try it
        </a>
        <a className="nav__link" href="#how">
          How it works
        </a>
        <a className="nav__link" href="#pricing">
          Pricing
        </a>
        <GetStartedButton className="btn btn--ghost btn--sm" location="nav">
          Get started free
        </GetStartedButton>
      </div>
    </nav>
  )
}
