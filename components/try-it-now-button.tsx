"use client"

export function TryItNowButton({ className }: { className?: string }) {
  return (
    <a
      href="#try-it-now"
      onClick={(e) => {
        e.preventDefault()
        document.getElementById("try-it-now")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }}
      className={className}
    >
      Try it now
    </a>
  )
}
