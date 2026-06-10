"use client"

import { useEffect } from "react"

// Ports app.js scroll-reveal: adds .in to .reveal elements as they enter the
// viewport. rAF + getBoundingClientRect so it works regardless of section
// nesting, with an initial pass and a load-time safety net. Keeping this in
// one mounted client component lets every section stay a server component.
export function ScrollReveal() {
  useEffect(() => {
    let reveals = Array.prototype.slice.call(
      document.querySelectorAll(".reveal"),
    ) as HTMLElement[]

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      for (let i = reveals.length - 1; i >= 0; i--) {
        const el = reveals[i]
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("in")
          reveals.splice(i, 1)
        }
      }
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        check()
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    window.addEventListener("load", check)
    requestAnimationFrame(check)
    const t = window.setTimeout(check, 300)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("load", check)
      window.clearTimeout(t)
    }
  }, [])

  return null
}
