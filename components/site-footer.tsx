import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <a className="brand" href="#top" aria-label="Guildy home">
          <Image
            src="/images/logo-20m-20flat-20-28night-29.png"
            alt="Guildy"
            width={122}
            height={27}
            className="brand__logo"
          />
        </a>
        <nav className="foot__links">
          <a href="#tryit">Try it</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#vision">Vision</a>
        </nav>
      </div>
      <div className="wrap foot__legal">
        © 2026 Guildy. Manage the hunt, not just the interview.
      </div>
    </footer>
  )
}
